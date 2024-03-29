<?php

namespace lenz\calendarfield\migrations;

use Craft;
use craft\db\Migration;
use craft\db\Table;
use craft\elements\Entry;
use lenz\calendarfield\records\CalendarEventRecord;
use Throwable;
use yii\db\Expression;

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
    $this->addColumn($table, 'rootId', $this->integer()->notNull());

    $this->update($table, [
      'rootId'   => new Expression('elementId'),
      'dateTill' => new Expression('dateEnd'),
    ]);

    $this->createIndex('idx_lenz_calendarfield_dateTill', $table, ['dateTill']);
    $this->createIndex('idx_lenz_calendarfield_rootId', $table, ['rootId']);
    $this->addForeignKey('fk_lenz_calendarfield_rootId', $table, ['rootId'], Table::ELEMENTS, ['id'], 'CASCADE', null);

    Craft::$app->elements->resaveElements(Entry::find());
  }

  /**
   * @inheritdoc
   */
  public function safeDown(): bool {
    $table = CalendarEventRecord::tableName();
    $this->dropColumn($table, 'rootId');
    $this->dropColumn($table, 'dateTill');

    $this->dropForeignKey('fk_lenz_calendarfield_rootId', $table);
    $this->dropIndex('idx_lenz_calendarfield_rootId', $table);
    $this->dropIndex('idx_lenz_calendarfield_dateTill', $table);

    return true;
  }
}
