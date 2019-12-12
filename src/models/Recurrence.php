<?php

namespace lenz\calendarfield\models;

use craft\base\ElementInterface;
use craft\helpers\UrlHelper;
use DateTime;
use Exception;
use lenz\calendarfield\records\CalendarEventRecord;
use RRule\RRule;

/**
 * Class Recurrence
 */
class Recurrence
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
   * @param CalendarEventRecord $record
   * @param DateTime $dateStart
   * @param DateTime $dateEnd
   */
  public function __construct(array $record, DateTime $dateStart, DateTime $dateEnd) {
    $this->_record    = $record;
    $this->_dateStart = $dateStart;
    $this->_dateEnd   = $dateEnd;
  }

  /**
   * @return int
   */
  public function getEventId() {
    return $this->_record['id'];
  }

  /**
   * @return bool
   */
  public function getIsEditable() {
    return is_null($this->_root)
      ? false
      : $this->_root->getIsEditable();
  }

  /**
   * @return ElementInterface|null
   */
  public function getRoot() {
    return $this->_root;
  }

  /**
   * @return string
   */
  public function getRootId() {
    return $this->_record['rootId'];
  }

  /**
   * @return string
   */
  public function getSiteId() {
    return $this->_record['siteId'];
  }

  /**
   * @return string
   */
  public function getTitle() {
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
  public function toFullCalendarEvent() {
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
  protected function getExtendedProps() {
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
  static public function createForModel(CalendarEvent $model, $after, $before) {
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
  static public function createForArray(array $row, $after, $before) {
    try {
      $timezone  = $row['dateAllDay'] ? null : new \DateTimeZone('UTC');
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
