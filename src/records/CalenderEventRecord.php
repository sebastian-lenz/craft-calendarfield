<?php

namespace lenz\calendarfield\records;

use craft\db\ActiveRecord;
use craft\db\SoftDeleteTrait;
use craft\db\Table;
use lenz\craft\utils\foreignField\ForeignFieldRecord;
use yii\db\ActiveQueryInterface;

/**
 * Class CalenderEventRecord
 *
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
   * The name of the table used to store this record.
   */
  const TABLE_NAME = '{{%lenz_calendarfield}}';

  /**
   * Enum values of the status field.
   */
  const STATUSES = ['TENTATIVE', 'CONFIRMED', 'CANCELLED'];


  /**
   * @return array
   */
  public function getModelAttributes() {
    return $this->getAttributes([
      'title',
      'description',
      'location',
      'dateAllDay',
      'dateStart',
      'dateEnd',
      'geoLatitude',
      'geoLongitude',
      'status',
      'rrule',
      'uid',
    ]);
  }

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
}
