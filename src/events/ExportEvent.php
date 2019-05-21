<?php

namespace lenz\calendarfield\events;

use Eluceo\iCal\Component\Event as ExportModel;
use lenz\calendarfield\fields\CalendarEventField;
use lenz\calendarfield\models\CalendarEvent;
use yii\base\Event;

/**
 * Class ExportEvent
 */
class ExportEvent extends Event
{
  /**
   * @var CalendarEvent
   */
  public $calendarEvent;

  /**
   * @var CalendarEventField
   */
  public $field;

  /**
   * @var ExportModel
   */
  public $model;
}
