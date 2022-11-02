<?php

namespace lenz\calendarfield\services\calendar\adapters;

use Craft;
use craft\elements\MatrixBlock;
use craft\fields\Matrix;
use craft\models\FieldLayout;
use craft\records\Entry;
use craft\records\FieldLayoutField;
use craft\records\MatrixBlockType;
use lenz\calendarfield\fields\CalendarEventField;

/**
 * Class MatrixBlockAdapter
 */
class MatrixAdapter extends AbstractAdapter
{
  /**
   * @var int
   */
  private int $_matrixFieldId;


  /**
   * MatrixBlockAdapter constructor.
   *
   * @param int $fieldId
   * @param int $entryTypeId
   * @param int $matrixFieldId
   */
  public function __construct(int $fieldId, int $entryTypeId, int $matrixFieldId) {
    parent::__construct($fieldId, $entryTypeId);

    $this->_matrixFieldId = $matrixFieldId;
  }

  /**
   * @return string
   */
  public function getHandle() : string {
    return implode(':', [
      'matrix',
      $this->_entryTypeId,
      $this->_fieldId,
      $this->_matrixFieldId
    ]);
  }

  /**
   * @return Matrix|null
   */
  public function getMatrixField(): ?Matrix {
    $field = Craft::$app->getFields()->getFieldById($this->_matrixFieldId);
    return $field instanceof Matrix
      ? $field
      : null;
  }


  // Static methods
  // --------------

  /**
   * @param FieldLayout $layout
   * @param CalendarEventField $field
   * @return EntryAdapter[]|null
   */
  static public function create(FieldLayout $layout, CalendarEventField $field): ?array {
    if ($layout->type != MatrixBlock::class) {
      return null;
    }

    $matrixBlockType = MatrixBlockType::findOne([
      'fieldLayoutId' => $layout->id,
    ]);

    if (is_null($matrixBlockType)) {
      return null;
    }

    $layoutFields = FieldLayoutField::findAll([
      'fieldId' => $matrixBlockType->fieldId,
    ]);

    $result = [];
    $types = Craft::$app->sections->getAllEntryTypes();

    foreach ($layoutFields as $layoutField) {
      $parentLayout = Craft::$app->fields->getLayoutById($layoutField->layoutId);
      if ($parentLayout->type != Entry::class) {
        continue;
      }

      foreach ($types as $type) {
        if ($type->fieldLayoutId != $parentLayout->id) {
          continue;
        }

        $result[] = new MatrixAdapter($field->id, $type->id, $matrixBlockType->fieldId);
      }
    }

    return $result;
  }
}
