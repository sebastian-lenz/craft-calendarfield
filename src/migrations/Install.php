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
    if (!$this->db->tableExists(CalenderEventRecord::TABLE_NAME)) {
      $this->createTable(CalenderEventRecord::TABLE_NAME, [
        'id'           => $this->primaryKey(),
        'elementId'    => $this->integer()->notNull(),
        'siteId'       => $this->integer()->notNull(),
        'fieldId'      => $this->integer()->notNull(),

        'title'        => $this->char(255),
        'description'  => $this->text(),
        'location'     => $this->text(),
        'status'       => $this->enum('status', CalenderEventRecord::STATUSES),
        'dateAllDay'   => $this->boolean(),
        'dateStart'    => $this->dateTime(),
        'dateEnd'      => $this->dateTime(),
        'geoLatitude'  => $this->decimal(20, 16),
        'geoLongitude' => $this->decimal(20, 16),
        'rrule'        => $this->text(),

        'dateCreated'  => $this->dateTime()->notNull(),
        'dateUpdated'  => $this->dateTime()->notNull(),
        'uid'          => $this->uid(),
      ]);

      $this->createIndex(null, CalenderEventRecord::TABLE_NAME, ['elementId', 'siteId'], true);
      $this->createIndex(null, CalenderEventRecord::TABLE_NAME, ['siteId']);
      $this->createIndex(null, CalenderEventRecord::TABLE_NAME, ['fieldId']);
      $this->createIndex(null, CalenderEventRecord::TABLE_NAME, ['dateStart']);
      $this->createIndex(null, CalenderEventRecord::TABLE_NAME, ['dateEnd']);

      $this->addForeignKey(null, CalenderEventRecord::TABLE_NAME, ['elementId'], Table::ELEMENTS, ['id'], 'CASCADE', null);
      $this->addForeignKey(null, CalenderEventRecord::TABLE_NAME, ['fieldId'], Table::FIELDS, ['id'], 'CASCADE', null);
    }
  }

  /**
   * @inheritdoc
   */
  public function safeDown() {
    $this->dropTableIfExists(CalenderEventRecord::TABLE_NAME);
    return true;
  }
}
