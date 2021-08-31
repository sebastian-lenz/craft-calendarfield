<?php

namespace lenz\calendarfield\models;

use craft\base\ElementInterface;
use craft\helpers\UrlHelper;
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
 * @property string $title
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
  private $_root = null;

  /**
   * @var array
   */
  private $_record;
  /**
   *
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
    return $this->_root;
  }

  /**
   * @return string
   */
  public function getRootId(): string {
    return $this->_record['rootId'];
  }

  /**
   * @return string
   */
  public function getSiteId(): string {
    return $this->_record['siteId'];
  }

  /**
   * @return string
   */
  public function getTitle(): string {
    $title = $this->_record['title'];
    return empty($title) && !is_null($this->_root)
      ? (string)$this->_root
      : $title;
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
   * @param DateTime $after
   * @param DateTime $before
   * @return Recurrence[]
   */
  static public function createForModel(CalendarEvent $model, DateTime $after, DateTime $before): array {
    $recurrences = self::createForArray(
      $model->getAttributes(),
      $after,
      $before
    );

    foreach ($recurrences as $recurrence) {
      $recurrence->setRoot($model->getRoot());
    }

    return $recurrences;
  }

  /**
   * @param array $row
   * @param DateTime $after
   * @param DateTime $before
   * @return Recurrence[]
   */
  static public function createForArray(array $row, DateTime $after, DateTime $before): array {
    try {
      $timezone  = $row['dateAllDay'] ? null : new DateTimeZone('UTC');
      $dateStart = new DateTime($row['dateStart'], $timezone);
      $dateEnd   = new DateTime($row['dateEnd'], $timezone);
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
    }, $rRule->getOccurrencesBetween($after, $before));
  }
}
