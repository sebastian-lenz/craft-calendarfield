<?php

namespace lenz\calendarfield;

use craft\events\RegisterComponentTypesEvent;
use craft\services\Fields;
use Eluceo\iCal\Component\Event as ExportModel;
use lenz\calendarfield\events\ExportEvent;
use lenz\calendarfield\fields\CalendarEventField;
use lenz\calendarfield\models\CalendarEvent;
use yii\base\Event;

/**
 * Class Plugin
 */
class Plugin extends \craft\base\Plugin
{
  /**
   * @inheritdoc
   */
  public $schemaVersion = '1.0.0';

  /**
   * Event thrown when an ics event is exported.
   */
  const EXPORT_EVENT = 'export';


  /**
   * @return void
   */
  public function init() {
    parent::init();

    Event::on(
      Fields::class,
      Fields::EVENT_REGISTER_FIELD_TYPES,
      [$this, 'onRegisterFieldTypes']
    );
  }

  /**
   * @param RegisterComponentTypesEvent $event
   */
  public function onRegisterFieldTypes(RegisterComponentTypesEvent $event) {
    $event->types[] = CalendarEventField::class;
  }

  /**
   * @param CalendarEvent $calendarEvent
   * @param ExportModel $model
   * @return ExportModel
   */
  public function triggerExportEvent(CalendarEvent $calendarEvent, ExportModel $model) {
    if (!$this->hasEventHandlers(self::EXPORT_EVENT)) {
      return $model;
    }

    $event = new ExportEvent([
      'calendarEvent' => $calendarEvent,
      'field'         => $calendarEvent->getField(),
      'model'         => $model,
    ]);

    $this->trigger(self::EXPORT_EVENT, $event);
    return $event->model;
  }
}
