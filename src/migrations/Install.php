<?php

namespace lenz\calendarfield\migrations;

use craft\db\Migration;
use craft\db\Table;
use lenz\calendarfield\records\CalenderEventRecord;

/**
 * Class Install
 */
class Install extends Migration
{
  /**
   * @inheritdoc
   */
  public function safeUp() {
    $table = CalenderEventRecord::tableName();
    if (!$this->db->tableExists($table)) {
      CalenderEventRecord::createTable($this);
      $this->createIndex(null, $table, ['dateStart']);
      $this->createIndex(null, $table, ['dateEnd']);
    }
  }

  /**
   * @inheritdoc
   */
  public function safeDown() {
    CalenderEventRecord::dropTable($this);
    return true;
  }
}
