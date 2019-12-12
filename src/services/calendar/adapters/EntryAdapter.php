<?php

namespace lenz\calendarfield\services\calendar\adapters;

use Craft;
use craft\elements\Entry;
use craft\models\FieldLayout;
use lenz\calendarfield\fields\CalendarEventField;

/**
 * Class EntryAdapter
 */
class EntryAdapter extends AbstractAdapter
{
  /**
   * @return string
   */
  public function getHandle() : string {
    return implode(':', [
      'entry',
      $this->_entryTypeId,
      $this->_fieldId
    ]);
  }


  // Static methods
  // --------------

  /**
   * @param FieldLayout $layout
   * @param CalendarEventField $field
   * @return EntryAdapter[]|null
   */
  static public function create(FieldLayout $layout, CalendarEventField $field) {
    if ($layout->type != Entry::class) {
      return null;
    }

    $types = Craft::$app->sections->getAllEntryTypes();
    foreach ($types as $type) {
      if ($type->fieldLayoutId != $layout->id) {
        continue;
      }

      return [new EntryAdapter($field->id, $type->id)];
    }

    return null;
  }
}
