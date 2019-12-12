<?php

namespace lenz\calendarfield\migrations;

use Craft;
use craft\db\Migration;
use craft\db\Table;
use craft\elements\Entry;
use lenz\calendarfield\fields\CalendarEventField;
use lenz\calendarfield\models\CalendarEvent;
use lenz\calendarfield\records\CalendarEventRecord;
use Throwable;

/**
 * m191122_142256_add_root_and_till_field migration.
 */
class m191122_142256_add_root_and_till_field extends Migration
{
  /**
   * @inheritdoc
   * @throws Throwable
   */
  public function safeUp() {
    $table = CalendarEventRecord::tableName();

    $this->addColumn($table, 'dateTill', $this->dateTime());
    $this->addColumn($table, 'rootId', $this->dateTime());

    $this->createIndex(null, $table, ['dateTill']);
    $this->createIndex(null, $table, ['rootId']);

    $this->addForeignKey(null, $table, ['rootId'], Table::ELEMENTS, ['id'], 'CASCADE', null);

    Craft::$app->elements->resaveElements(Entry::find());
  }

  /**
   * @inheritdoc
   */
  public function safeDown() {
    echo "m191122_142256_add_root_and_till_field cannot be reverted.\n";
    return false;
  }
}
