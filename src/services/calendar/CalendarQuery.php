<?php

namespace lenz\calendarfield\services\calendar;

use craft\db\Query;
use craft\db\Table;
use craft\elements\db\EntryQuery;
use craft\elements\Entry;
use DateTime;
use Exception;
use InvalidArgumentException;
use lenz\calendarfield\models\Recurrence;
use lenz\calendarfield\records\CalendarEventRecord;

/**
 * Class CalendarQuery
 *
 * @method Recurrence[] all()
 */
class CalendarQuery extends EntryQuery
{
  /**
   * @var DateTime
   */
  public DateTime $eventAfter;

  /**
   * @var DateTime
   */
  public DateTime $eventBefore;

  /**
   * @var mixed
   */
  private mixed $originalLimit;

  /**
   * @var mixed
   */
  private array|string|null $originalWith;


  /**
   * CalendarQuery constructor.
   *
   * @param string $elementType
   * @param array $config
   * @throws Exception
   */
  public function __construct($elementType = Entry::class, array $config = []) {
    parent::__construct($elementType, $config);

    $this->eventAfter  = new DateTime('first day of this month');
    $this->eventBefore = new DateTime('last day of this month');
  }

  /**
   * @param mixed $value
   * @return $this
   * @throws Exception
   */
  public function eventAfter(DateTime|string $value): CalendarQuery {
    $this->eventAfter = self::toDateTime($value);
    return $this;
  }

  /**
   * @param DateTime|string $value
   * @return $this
   * @throws InvalidArgumentException
   * @throws Exception
   */
  public function eventBefore(DateTime|string $value): CalendarQuery {
    $this->eventBefore = self::toDateTime($value);
    return $this;
  }

  /**
   * @inheritDoc
   */
  public function populate($rows): array {
    if (empty($rows)) {
      return [];
    }

    return $this->createRecurrences($rows);
  }


  // Protected methods
  // -----------------

  /**
   * @return bool
   */
  protected function beforePrepare(): bool {
    $this->originalWith = $this->with;
    $this->originalLimit = $this->limit;
    $this->limit = null;
    $this->with = null;

    return parent::beforePrepare();
  }

  /**
   * @inheritDoc
   */
  protected function afterPrepare(): bool {
    $this->query = new Query();
    $this->query
      ->from(['subquery' => $this->subQuery])
      ->select('calendarfield.*')
      ->innerJoin(
        CalendarEventRecord::tableName() . ' calendarfield',
        '[[calendarfield.id]] = [[subquery.id]]'
      );

    $this->subQuery
      ->from(CalendarEventRecord::tableName() . ' calendarfield')
      ->select('calendarfield.id')
      ->groupBy('calendarfield.id')
      ->orderBy('')
      ->innerJoin(
        ['calendarfieldOwner' => Table::ELEMENTS],
        '[[calendarfieldOwner.id]] = [[calendarfield.elementId]]'
      )
      ->andWhere([
        'and',
        ['calendarfieldOwner.dateDeleted' => null],
        ['<', 'dateStart', $this->eventBefore->format('c')],
        [
          'or',
          ['>', 'dateTill', $this->eventAfter->format('c')],
          ['dateTill' => null]
        ]
      ]);

    // Join the content and elements_sites tables against our field table
    foreach ($this->subQuery->join as &$join) {
      $joinTable = $join[1];
      if (is_array($joinTable)) {
        $joinAlias = array_key_first($joinTable);
        $joinTable = $joinTable[$joinAlias];
      } else {
        $joinAlias = $joinTable;
      }

      if (preg_match('/(content|elements_sites)}}$/', $joinTable)) {
        $join[2] = [
          'and',
          "[[$joinAlias.elementId]] = [[calendarfield.rootId]]",
          "[[$joinAlias.siteId]] = [[calendarfield.siteId]]"
        ];
      }
    }

    array_unshift($this->subQuery->join, [
      'INNER JOIN',
      '{{%elements}} elements',
      '[[elements.id]] = [[calendarfield.rootId]]'
    ]);

    return parent::afterPrepare();
  }

  /**
   * @param array $rows
   * @return Recurrence[]
   */
  private function createRecurrences(array $rows): array {
    $result  = [];
    foreach ($rows as $row) {
      if (is_null($row['siteId']) || is_null($row['rootId'])) {
        continue;
      }

      $recurrences = Recurrence::createForArray(
        $row,
        $this->eventAfter,
        $this->eventBefore
      );

      if (count($recurrences)) {
        $result = array_merge($result, $recurrences);
      }
    }

    usort($result, [Recurrence::class, 'sort']);
    if (!empty($this->originalLimit)) {
      $result = array_slice($result, 0, $this->originalLimit);
    }

    $siteIds = [];
    $rootIds = [];
    foreach ($result as $recurrence) {
      if (!in_array($recurrence->siteId, $siteIds)) {
        $siteIds[] = $recurrence->siteId;
      }

      if (!in_array($recurrence->rootId, $rootIds)) {
        $rootIds[] = $recurrence->rootId;
      }
    }

    $roots = Entry::findAll([
      'id'     => $rootIds,
      'siteId' => $siteIds,
      'with'   => $this->originalWith,
    ]);

    return array_filter($result, function(Recurrence $recurrence) use ($roots) {
      $rootId = $recurrence->getRootId();
      $siteId = $recurrence->getSiteId();

      foreach ($roots as $root) {
        if ($root->id == $rootId && $root->siteId == $siteId) {
          $recurrence->setRoot($root);
          return true;
        }
      }

      return false;
    });
  }


  // Static methods
  // --------------

  /**
   * @param mixed $value
   * @return DateTime
   * @throws InvalidArgumentException
   * @throws Exception
   */
  static public function toDateTime(DateTime|string $value): DateTime {
    if (is_string($value)) {
      $value = new DateTime($value);
    }

    if (!($value instanceof DateTime)) {
      throw new InvalidArgumentException('Value must be a DateTime object.');
    }

    return $value;
  }
}
