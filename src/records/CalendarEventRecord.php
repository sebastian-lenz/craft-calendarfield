<?php

namespace lenz\calendarfield\records;

use craft\db\Migration;
use craft\db\Table;
use craft\helpers\DateTimeHelper;
use DateTime;
use DateTimeZone;
use Exception;
use lenz\craft\utils\foreignField\ForeignFieldRecord;

/**
 * Class CalendarEventRecord
 *
 * @property string $rootId
 * @property string $title
 * @property string $description
 * @property string $location
 * @property string $status
 * @property string $dateAllDay
 * @property string $dateStart
 * @property string $dateEnd
 * @property string $dateTill
 * @property string $geoLatitude
 * @property string $geoLongitude
 * @property string $rrule
 */
class CalendarEventRecord extends ForeignFieldRecord
{
  /**
   * A list of attributes that can be edited by the calendar controller.
   */
  const EDIT_ATTRIBUTES = ['dateEnd', 'dateStart'];

  /**
   * Enum values of the status field.
   */
  const STATUSES = ['TENTATIVE', 'CONFIRMED', 'CANCELLED'];


  /**
   * @inheritDoc
   */
  public function rules(): array {
    return [
      [['title', 'description', 'location', 'rrule'], 'string'],
      [['dateAllDay'], 'boolean'],
      [['dateStart', 'dateEnd', 'dateTill'], 'validateDateTime'],
      [['geoLatitude', 'geoLongitude'], 'double'],
      ['status', 'in', 'range' => self::STATUSES],
    ];
  }

  /**
   * @param array $attributes
   * @throws Exception
   */
  public function setEditAttributes(array $attributes) {
    foreach ($attributes as $name => $value) {
      if (!in_array($name, self::EDIT_ATTRIBUTES)) {
        throw new Exception('Illegal attribute: ' . $name);
      }

      $this->setAttribute($name, $value);
    }
  }

  /**
   * @param string $attribute
   * @throws Exception
   * @noinspection PhpUnused (Validator)
   */
  public function validateDateTime(string $attribute) {
    $value = $this->$attribute;

    if (!is_null($value)) {
      $value = DateTimeHelper::toDateTime($value);
      if (!($value instanceof DateTime)) {
        $this->addError($attribute, 'Must be DateTime');
      } else {
        $this->$attribute = $value;
      }
    }
  }


  // Static methods
  // --------------

  /**
   * @inheritDoc
   */
  static public function createTable(Migration $migration, array $columns = []) {
    parent::createTable($migration, [
      'rootId'       => $migration->integer()->notNull(),
      'title'        => $migration->char(255),
      'description'  => $migration->text(),
      'location'     => $migration->text(),
      'status'       => $migration->enum('status', CalendarEventRecord::STATUSES),
      'dateAllDay'   => $migration->boolean(),
      'dateStart'    => $migration->dateTime(),
      'dateEnd'      => $migration->dateTime(),
      'dateTill'     => $migration->dateTime(),
      'geoLatitude'  => $migration->decimal(20, 16),
      'geoLongitude' => $migration->decimal(20, 16),
      'rrule'        => $migration->text(),
    ] + $columns);

    $migration->createIndex(null, self::tableName(), ['dateStart']);
    $migration->createIndex(null, self::tableName(), ['dateEnd']);
    $migration->createIndex(null, self::tableName(), ['dateTill']);
    $migration->createIndex(null, self::tableName(), ['rootId']);

    $migration->addForeignKey(null, self::tableName(), ['rootId'], Table::ELEMENTS, ['id'], 'CASCADE');
  }

  /**
   * @param string $column
   * @return DateTime|false
   * @throws Exception
   */
  static public function getNearestDate(string $column) {
    $now = (new DateTime('now', new DateTimeZone('UTC')))
      ->format('Y-m-d H:i:s');

    $record = CalendarEventRecord::find()
      ->where(['>', $column, $now])
      ->orderBy($column)
      ->select([$column])
      ->one();

    return is_null($record)
      ? false
      : DateTimeHelper::toDateTime($record[$column]);
  }

  /**
   * @return DateTime|false
   * @throws Exception
   */
  static public function getNearestEdge() {
    $dateStart = self::getNearestDate('dateStart');
    $dateEnd = self::getNearestDate('dateEnd');

    if ($dateStart && $dateEnd) {
      return $dateStart->getTimestamp() < $dateEnd->getTimestamp() ? $dateStart : $dateEnd;
    } else {
      return $dateStart ?: $dateEnd;
    }
  }

  /**
   * @inheritDoc
   */
  static public function tableName(): string {
    return '{{%lenz_calendarfield}}';
  }
}
