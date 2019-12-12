<?php

namespace lenz\calendarfield\services\calendar;

use craft\models\EntryType;
use lenz\calendarfield\services\calendar\adapters\AbstractAdapter;
use yii\base\BaseObject;

/**
 * Class Source
 */
class Source extends BaseObject
{
  /**
   * @var AbstractAdapter[]
   */
  private $_adapters;

  /**
   * @var int
   */
  private $_entryTypeId;


  /**
   * Source constructor.
   *
   * @param AbstractAdapter $adapter
   */
  public function __construct(AbstractAdapter $adapter) {
    parent::__construct();

    $this->_adapters = [$adapter];
    $this->_entryTypeId = $adapter->getEntryTypeId();
  }

  /**
   * @return EntryType|null
   */
  public function getEntryType() {
    return \Craft::$app->sections->getEntryTypeById($this->_entryTypeId);
  }

  /**
   * @return string
   */
  public function getHandle() {
    return $this->getEntryType()->handle;
  }

  /**
   * @return string
   */
  public function getName() {
    return $this->getEntryType()->name;
  }


  // Static methods
  // --------------

  /**
   * @param AbstractAdapter[] $adapters
   * @return Source[]
   */
  static public function create($adapters) {
    $sources = [];

    foreach ($adapters as $adapter) {
      $entryTypeId = $adapter->getEntryTypeId();

      foreach ($sources as $source) {
        if ($source->_entryTypeId != $entryTypeId) {
          continue;
        }

        $source->_adapters[] = $adapter;
        continue 2;
      }

      $sources[] = new Source($adapter);
    }

    return $sources;
  }
}
