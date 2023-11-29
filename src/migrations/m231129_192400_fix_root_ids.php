<?php

namespace lenz\calendarfield\migrations;

use Craft;
use craft\db\Migration;
use craft\db\Table;
use craft\elements\Entry;
use lenz\calendarfield\fields\CalendarEventField;
use lenz\calendarfield\records\CalendarEventRecord;
use lenz\craft\utils\foreignField\ForeignFieldModel;
use Throwable;
use yii\db\Expression;

/**
 * m231129_192400_fix_root_ids migration.
 */
class m231129_192400_fix_root_ids extends Migration
{
  /**
   * @inheritdoc
   * @throws Throwable
   */
  public function safeUp() {
    $rows = CalendarEventRecord::find()
      ->select(['id', 'elementId', 'siteId', 'rootId'])
      ->asArray()
      ->all();

    $elements = Craft::$app->getElements();
    $reflection = new \ReflectionClass(ForeignFieldModel::class);
    $method = $reflection->getMethod('toParentElement');
    $method->setAccessible(true);

    foreach ($rows as $row) {
      $parent = $elements->getElementById($row['elementId'], null, $row['siteId'], ['trashed' => null]);
      if (!$parent) {
        if (!$this->compact) {
          echo "Could not find parent element with id $row[elementId] for row $row[id]\n";
        }

        continue;
      }

      try {
        $root = $method->invoke(null, $parent);
      } catch (Throwable $error) {
        if (!$this->compact) {
          $message = $error->getMessage();
          echo "Could not find parent element for row $row[id]: $message\n";
        }

        continue;
      }

      if ($root->id != $row['rootId']) {
        $this->update(
          CalendarEventRecord::tableName(),
          ['rootId' => $root->id],
          ['id' => $row['id']]
        );
      }
    }
  }

  /**
   * @inheritdoc
   * @throws Throwable
   */
  public function safeDown(): bool {
    return false;
  }
}
