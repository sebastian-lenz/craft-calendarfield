<?php

namespace lenz\calendarfield\migrations;

use Craft;
use craft\db\Migration;
use craft\db\Table;
use craft\elements\Entry;
use lenz\calendarfield\fields\CalendarEventField;
use lenz\calendarfield\records\CalendarEventRecord;
use Throwable;
use yii\db\Expression;

/**
 * m220209_181600_rename_title_column migration.
 */
class m220209_181600_rename_title_column extends Migration
{
  /**
   * @inheritdoc
   * @throws Throwable
   */
  public function safeUp() {
    $this->renameColumn(CalendarEventRecord::tableName(), 'title', 'calendarTitle');
    $this->renameFieldSettings('title', 'calendarTitle');
  }

  /**
   * @inheritdoc
   * @throws Throwable
   */
  public function safeDown(): bool {
    $this->renameColumn(CalendarEventRecord::tableName(), 'calendarTitle', 'title');
    $this->renameFieldSettings('calendarTitle', 'title');
    return true;
  }


  // Private methods
  // ---------------

  /**
   * @throws Throwable
   */
  private function renameFieldSettings(string $oldName, string $newName) {
    if (Craft::$app->projectConfig->readOnly) {
      return;
    }

    foreach (Craft::$app->fields->getAllFields() as $field) {
      if (
        !($field instanceof CalendarEventField) ||
        !array_key_exists($oldName, $field->attributeSettings)
      ) {
        continue;
      }

      $field->attributeSettings[$newName] = $field->attributeSettings[$oldName];
      unset($field->attributeSettings[$oldName]);

      Craft::$app->fields->saveField($field);
    }
  }
}
