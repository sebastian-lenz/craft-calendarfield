<?php

namespace lenz\calendarfield\services\calendar\adapters;

use Craft;
use craft\models\EntryType;
use craft\models\FieldLayout;
use craft\records\FieldLayout as FieldLayoutRecord;
use lenz\calendarfield\fields\CalendarEventField;
use yii\base\BaseObject;

/**
 * Class AbstractAdapter
 */
abstract class AbstractAdapter extends BaseObject
{
  /**
   * @var int
   */
  protected $_entryTypeId;

  /**
   * @var int
   */
  protected $_fieldId;

  /**
   * A list of all known adapters.
   */
  const ADAPTERS = [
    EntryAdapter::class,
    MatrixAdapter::class,
  ];


  /**
   * AbstractAdapter constructor.
   *
   * @param int $fieldId
   * @param int $entryTypeId
   */
  public function __construct(int $fieldId, int $entryTypeId) {
    parent::__construct();

    $this->_entryTypeId = $entryTypeId;
    $this->_fieldId = $fieldId;
  }

  /**
   * @return EntryType|null
   */
  public function getEntryType() {
    return Craft::$app->sections->getEntryTypeById($this->_entryTypeId);
  }

  /**
   * @return int
   */
  public function getEntryTypeId() {
    return $this->_entryTypeId;
  }

  /**
   * @return CalendarEventField|null
   */
  public function getField() {
    $field = Craft::$app->getFields()->getFieldById($this->_fieldId);

    return $field instanceof CalendarEventField
      ? $field
      : null;
  }

  /**
   * @return string
   */
  abstract public function getHandle() : string;


  // Static methods
  // --------------

  /**
   * @param FieldLayout $layout
   * @param CalendarEventField $field
   * @return AbstractAdapter[]|null
   */
  abstract static function create(FieldLayout $layout, CalendarEventField $field);

  /**
   * @return AbstractAdapter[]
   */
  public static function createAll() {
    $result = [];
    $fields = Craft::$app->getFields();
    $layoutIds = FieldLayoutRecord::find()
      ->select(['id'])
      ->column();

    foreach ($layoutIds as $layoutId) {
      $layout = $fields->getLayoutById($layoutId);

      foreach ($layout->getFields() as $field) {
        if (!($field instanceof CalendarEventField)) {
          continue;
        }

        foreach (self::ADAPTERS as $adapter) {
          $sources = $adapter::create($layout, $field);
          if (!is_null($sources)) {
            $result = array_merge($result, $sources);
          }
        }
      }
    }

    return $result;
  }
}
