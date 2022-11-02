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
  public CalendarEvent $calendarEvent;

  /**
   * @var CalendarEventField
   */
  public CalendarEventField $field;

  /**
   * @var ExportModel
   */
  public ExportModel $model;
}
