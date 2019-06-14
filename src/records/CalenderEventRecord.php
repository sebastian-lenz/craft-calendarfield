<?php

namespace lenz\calendarfield\records;

use craft\db\Migration;
use lenz\craft\utils\foreignField\ForeignFieldRecord;

/**
 * Class CalenderEventRecord
 * @property string $title
 * @property string $description
 * @property string $location
 * @property string $status
 * @property string $dateAllDay
 * @property string $dateStart
 * @property string $dateEnd
 * @property string $geoLatitude
 * @property string $geoLongitude
 * @property string $rrule
 */
class CalenderEventRecord extends ForeignFieldRecord
{
  /**
   * Enum values of the status field.
   */
  const STATUSES = ['TENTATIVE', 'CONFIRMED', 'CANCELLED'];


  /**
   * @inheritDoc
   */
  public function rules() {
    return [
      [['title', 'description', 'location', 'rrule'], 'string'],
      [['dateAllDay'], 'boolean'],
      [['dateStart', 'dateEnd'], 'validateDateTime'],
      [['geoLatitude', 'geoLongitude'], 'double'],
      ['status', 'in', 'range' => self::STATUSES],
    ];
  }

  /**
   * @param string $attribute
   */
  public function validateDateTime($attribute) {
    if (!($this->$attribute instanceof \DateTime)) {
      $this->addError($attribute, 'Must be DateTime');
    }
  }


  // Static methods
  // --------------

  /**
   * @inheritDoc
   */
  static public function createTable(Migration $migration, array $columns = []) {
    return parent::createTable($migration, [
      'title'        => $migration->char(255),
      'description'  => $migration->text(),
      'location'     => $migration->text(),
      'status'       => $migration->enum('status', CalenderEventRecord::STATUSES),
      'dateAllDay'   => $migration->boolean(),
      'dateStart'    => $migration->dateTime(),
      'dateEnd'      => $migration->dateTime(),
      'geoLatitude'  => $migration->decimal(20, 16),
      'geoLongitude' => $migration->decimal(20, 16),
      'rrule'        => $migration->text(),
    ] + $columns);
  }

  /**
   * @inheritDoc
   */
  static public function tableName() {
    return '{{%lenz_calendarfield}}';
  }
}
