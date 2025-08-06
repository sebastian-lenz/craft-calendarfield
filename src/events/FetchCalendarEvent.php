<?php

namespace lenz\calendarfield\events;

use lenz\calendarfield\models\Recurrence;
use lenz\calendarfield\Plugin;
use yii\base\Event;

/**
 * Class FetchCalendarEvent
 */
class FetchCalendarEvent extends Event
{
  /**
   * @var string
   */
  public string $end;

  /**
   * @var string
   */
  public string $start;

  /**
   * @var Recurrence[]
   */
  public array $recurrences;


  /**
   * @return array
   */
  public function findDefaultRecurrences(): array {
    $request = \Craft::$app->request;
    $query = Plugin::getInstance()
      ->calendar
      ->query()
      ->eventAfter($this->start)
      ->eventBefore($this->end);

    $site = $request->getQueryParam('site');
    if (is_numeric($site)) {
      $query->siteId($site);
    } else {
      $query->site($site);
    }

    return $query->all();
  }

  /**
   * @return array|Recurrence[]
   */
  public function getRecurrences(): array {
    return $this->recurrences ?? $this->findDefaultRecurrences();
  }

  /**
   * @param array $value
   * @return void
   */
  public function setRecurrences(array $value): void {
    $this->recurrences = $value;
  }
}
