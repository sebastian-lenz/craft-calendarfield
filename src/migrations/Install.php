<?php

namespace lenz\calendarfield\migrations;

use craft\db\Migration;
use craft\db\Table;
use lenz\calendarfield\records\CalendarEventRecord;

/**
 * Class Install
 */
class Install extends Migration
{
  /**
   * @inheritdoc
   */
  public function safeUp() {
    $table = CalendarEventRecord::tableName();
    if (!$this->db->tableExists($table)) {
      CalendarEventRecord::createTable($this);
    }
  }

  /**
   * @inheritdoc
   */
  public function safeDown() {
    CalendarEventRecord::dropTable($this);
    return true;
  }
}
