<?php

namespace lenz\calendarfield\services\calendar;

use Exception;
use lenz\calendarfield\services\calendar\adapters\AbstractAdapter;
use yii\base\Component;

/**
 * Class Calendar
 */
class Calendar extends Component
{
  /**
   * @var AbstractAdapter[]
   */
  private array $_adapters;

  /**
   * @var Source[]
   */
  private array $_sources;


  /**
   * @param string $handle
   * @return AbstractAdapter|null
   */
  public function getAdapterByHandle(string $handle): ?AbstractAdapter {
    foreach ($this->getAdapters() as $adapter) {
      if ($adapter->getHandle() == $handle) {
        return $adapter;
      }
    }

    return null;
  }

  /**
   * @return AbstractAdapter[]
   */
  public function getAdapters(): array {
    if (!isset($this->_adapters)) {
      $this->_adapters = AbstractAdapter::createAll();
    }

    return $this->_adapters;
  }

  /**
   * @return Source[]
   */
  public function getSources(): array {
    if (!isset($this->_sources)) {
      $this->_sources = Source::create($this->getAdapters());
    }

    return $this->_sources;
  }

  /**
   * @return CalendarQuery
   * @throws Exception
   */
  public function query(): CalendarQuery {
    return new CalendarQuery();
  }
}
