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
use RRule\RRule;

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
  public $eventAfter;

  /**
   * @var DateTime
   */
  public $eventBefore;


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
  public function eventAfter($value) {
    $this->eventAfter = self::toDateTime($value);
    return $this;
  }

  /**
   * @param mixed $value
   * @return $this
   * @throws InvalidArgumentException
   * @throws Exception
   */
  public function eventBefore($value) {
    $this->eventBefore = self::toDateTime($value);
    return $this;
  }

  /**
   * @inheritDoc
   */
  public function populate($rows) {
    if (empty($rows)) {
      return [];
    }

    return $this->createRecurrences($rows);
  }


  // Protected methods
  // -----------------

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
    foreach ($this->subQuery->join as $index => &$join) {
      $joinTable = $join[1];
      if (is_array($joinTable)) {
        $joinAlias = array_key_first($joinTable);
        $joinTable = $joinTable[$joinAlias];
      } else {
        $joinAlias = $joinTable;
      }

      if (preg_match('/(content|elements_sites)(?:}})$/', $joinTable, $match)) {
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
  private function createRecurrences(array $rows) {
    $siteIds = [];
    $rootIds = [];
    $result  = [];

    foreach ($rows as $row) {
      $rootId = $row['rootId'];
      $siteId = $row['siteId'];
      if (is_null($rootId)) {
        continue;
      }

      $recurrences = Recurrence::createForArray(
        $row,
        $this->eventAfter,
        $this->eventBefore
      );

      if (count($recurrences) == 0) {
        continue;
      }

      if (!is_null($siteId) && !in_array($siteId, $siteIds)) {
        $siteIds[] = $siteId;
      }

      if (!in_array($rootId, $rootIds)) {
        $rootIds[] = $rootId;
      }

      $result = array_merge($result, $recurrences);
    }

    $roots = Entry::findAll([
      'id'     => $rootIds,
      'siteId' => $siteId,
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
  static public function toDateTime($value) {
    if (is_string($value)) {
      $value = new DateTime($value);
    }

    if (!($value instanceof DateTime)) {
      throw new InvalidArgumentException('Value must be a DateTime object.');
    }

    return $value;
  }
}
