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
      'rootId'        => $this->integer()->notNull(),
      'calendarTitle' => $this->char(255),
      'description'   => $this->text(),
      'location'      => $this->text(),
      'status'        => $this->enum('status', CalendarEventRecord::STATUSES),
      'dateAllDay'    => $this->boolean(),
      'dateStart'     => $this->dateTime(),
      'dateEnd'       => $this->dateTime(),
      'dateTill'      => $this->dateTime(),
      'geoLatitude'   => $this->decimal(20, 16),
      'geoLongitude'  => $this->decimal(20, 16),
      'rrule'         => $this->text(),
    ]);

    $this->createIndex('idx_lenz_calendarfield_dateEnd', $table, ['dateEnd']);
    $this->createIndex('idx_lenz_calendarfield_dateStart', $table, ['dateStart']);
    $this->createIndex('idx_lenz_calendarfield_dateTill', $table, ['dateTill']);
    $this->createIndex('idx_lenz_calendarfield_rootId', $table, ['rootId']);
    $this->addForeignKey('fk_lenz_calendarfield_rootId', $table, ['rootId'], Table::ELEMENTS, ['id'], 'CASCADE', null);
  }

  /**
   * @inheritdoc
   */
  public function safeDown(): bool {
    CalendarEventRecord::dropTable($this);
    return true;
  }
}
