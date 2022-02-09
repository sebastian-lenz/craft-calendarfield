<?php

namespace lenz\calendarfield\models;

use Craft;
use craft\base\ElementInterface;
use craft\helpers\UrlHelper;
use craft\models\Site;
use DateTime;
use DateTimeZone;
use Exception;
use RRule\RRule;
use yii\base\BaseObject;

/**
 * Class Recurrence
 *
 * @property bool $dateAllDay
 * @property DateTime $dateEnd
 * @property DateTime $dateStart
 * @property int $eventId
 * @property bool $isEditable
 * @property ElementInterface|null $root
 * @property string $rootId
 * @property string $siteId
 * @property string $status
 * @property string $title
 * @property string $uid
 */
class Recurrence extends BaseObject
{
  /**
   * @var DateTime
   */
  private $_dateEnd;

  /**
   * @var DateTime
   */
  private $_dateStart;

  /**
   * @var ElementInterface|null
   */
  private $_root;

  /**
   * @var array
   */
  private $_record;

  /**
   * Format used to export json dates.
   */
  const JSON_DATE_FORMAT = 'c';


  /**
   * Recurrence constructor.
   *
   * @param array $record
   * @param DateTime $dateStart
   * @param DateTime $dateEnd
   */
  public function __construct(array $record, DateTime $dateStart, DateTime $dateEnd) {
    parent::__construct();

    $this->_record    = $record;
    $this->_dateStart = $dateStart;
    $this->_dateEnd   = $dateEnd;
  }

  /**
   * @return bool
   * @noinspection PhpUnused
   */
  public function getDateAllDay(): bool {
    return !!$this->_record['dateAllDay'];
  }

  /**
   * @return DateTime
   * @noinspection PhpUnused
   */
  public function getDateEnd(): DateTime {
    return $this->_dateEnd;
  }

  /**
   * @return DateTime
   */
  public function getDateStart(): DateTime {
    return $this->_dateStart;
  }

  /**
   * @return int
   */
  public function getEventId(): int {
    return $this->_record['id'];
  }

  /**
   * @return bool
   */
  public function getIsEditable(): bool {
    return !is_null($this->_root) && $this->_root->getIsEditable();
  }

  /**
   * @return ElementInterface|null
   */
  public function getRoot(): ?ElementInterface {
    if (!isset($this->_root)) {
      $rootId = $this->getRootId();
      $this->_root = empty($rootId) ? null : Craft::$app->elements->getElementById($rootId);
    }

    return $this->_root;
  }

  /**
   * @return string
   */
  public function getRootId(): string {
    return $this->_record['rootId'];
  }

  /**
   * @return Site|null
   */
  public function getSite(): ?Site {
    return Craft::$app->sites->getSiteById($this->getSiteId());
  }

  /**
   * @return string
   */
  public function getSiteId(): string {
    return $this->_record['siteId'];
  }

  /**
   * @return string|null
   */
  public function getStatus(): ?string {
    return $this->_record['status'];
  }

  /**
   * @return string
   */
  public function getTitle(): string {
    $title = $this->_record['calendarTitle'];

    return empty($title) && !is_null($this->_root)
      ? (string)$this->_root
      : $title;
  }

  /**
   * @return string
   */
  public function getUid(): string {
    return $this->_record['uid'];
  }

  /**
   * @param ElementInterface $owner
   */
  public function setRoot(ElementInterface $owner) {
    $this->_root = $owner;
  }

  /**
   * @return array
   * @throws Exception
   */
  public function toFullCalendarEvent(): array {
    return [
      'allDay'        => !!$this->_record['dateAllDay'],
      'editable'      => $this->getIsEditable(),
      'end'           => $this->_dateEnd->format(self::JSON_DATE_FORMAT),
      'extendedProps' => $this->getExtendedProps(),
      'groupId'       => $this->_record['id'],
      'start'         => $this->_dateStart->format(self::JSON_DATE_FORMAT),
      'title'         => $this->getTitle(),
    ];
  }


  // Protected methods
  // -----------------

  /**
   * @return array
   */
  protected function getExtendedProps(): array {
    $editUrl = null;
    if (!is_null($this->_root) && $this->_root->getIsEditable()) {
      $editUrl = UrlHelper::url($this->_root->getCpEditUrl(), [
        'redirect' => 'calendar',
      ]);
    }

    return [
      'editUrl' => $editUrl,
      'eventId' => $this->_record['id'],
    ];
  }


  // Static methods
  // --------------

  /**
   * @param CalendarEvent $model
   * @param mixed $after
   * @param mixed $before
   * @param mixed $limit
   * @return Recurrence[]
   */
  static public function createForModel(CalendarEvent $model, $after = null, $before = null, $limit = null): array {
    if (is_null($after)) {
      $after = $model->dateStart;
    }

    if (is_null($before)) {
      $before = $model->getDateTill();
    }

    $recurrences = self::createForArray(
      $model->getAttributes(),
      $after,
      $before,
      $limit
    );

    foreach ($recurrences as $recurrence) {
      $recurrence->setRoot($model->getRoot());
    }

    return $recurrences;
  }

  /**
   * @param array $row
   * @param mixed $after
   * @param mixed $before
   * @param mixed $limit
   * @return Recurrence[]
   */
  static public function createForArray(array $row, $after = null, $before = null, $limit = null): array {
    try {
      $timezone = $row['dateAllDay'] ? null : new DateTimeZone('UTC');
      $toDateTime = function($value) use ($timezone) {
        return $value instanceof DateTime ? $value : new DateTime($value, $timezone);
      };

      $dateStart = $toDateTime($row['dateStart']);
      $dateEnd   = $toDateTime($row['dateEnd']);
    } catch (Exception $exception) {
      return [];
    }

    if (empty($row['rrule'])) {
      return [new Recurrence($row, $dateStart, $dateEnd)];
    }

    $rRule    = new RRule($row['rrule'], $dateStart);
    $duration = $dateStart->diff($dateEnd);

    return array_map(function(DateTime $dateStart) use ($duration, $row) {
      $dateEnd = clone $dateStart;
      $dateEnd->add($duration);
      return new Recurrence($row, $dateStart, $dateEnd);
    }, $rRule->getOccurrencesBetween($after, $before, $limit));
  }

  /**
   * @param Recurrence $lft
   * @param Recurrence $rgt
   * @return int
   */
  static public function sort(Recurrence $lft, Recurrence $rgt): int {
    return $lft->getDateStart()->getTimestamp() - $rgt->getDateStart()->getTimestamp();
  }
}
