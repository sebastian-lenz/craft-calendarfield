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
    if ($this->db->tableExists($table)) {
      return;
    }

    CalendarEventRecord::createTable($this, [
      'title'        => $this->char(255),
      'description'  => $this->text(),
      'location'     => $this->text(),
      'status'       => $this->enum('status', CalendarEventRecord::STATUSES),
      'dateAllDay'   => $this->boolean(),
      'dateStart'    => $this->dateTime(),
      'dateEnd'      => $this->dateTime(),
      'geoLatitude'  => $this->decimal(20, 16),
      'geoLongitude' => $this->decimal(20, 16),
      'rrule'        => $this->text(),
    ]);

    $this->createIndex(null, $table, ['dateStart']);
    $this->createIndex(null, $table, ['dateEnd']);
  }

  /**
   * @inheritdoc
   */
  public function safeDown(): bool {
    CalendarEventRecord::dropTable($this);
    return true;
  }
}
