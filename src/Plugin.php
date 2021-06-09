<?php

namespace lenz\calendarfield;

use Craft;
use craft\events\RegisterComponentTypesEvent;
use craft\events\RegisterCpNavItemsEvent;
use craft\events\RegisterUrlRulesEvent;
use craft\services\Fields;
use craft\web\twig\variables\Cp;
use craft\web\UrlManager;
use Eluceo\iCal\Component\Event as ExportModel;
use lenz\calendarfield\events\ExportEvent;
use lenz\calendarfield\fields\CalendarEventField;
use lenz\calendarfield\models\CalendarEvent;
use lenz\calendarfield\records\CalendarEventRecord;
use lenz\calendarfield\services\calendar\Calendar;
use yii\base\Event;

/**
 * Class Plugin
 *
 * @property Calendar $calendar
 */
class Plugin extends \craft\base\Plugin
{
  /**
   * @inheritdoc
   */
  public $schemaVersion = '1.0.1';

  /**
   * Event thrown when an ics event is exported.
   */
  const EXPORT_EVENT = 'export';


  /**
   * @return void
   */
  public function init() {
    parent::init();

    $this->setComponents([
      'calendar' => Calendar::class,
    ]);

    Event::on(
      Fields::class, Fields::EVENT_REGISTER_FIELD_TYPES,
      function(RegisterComponentTypesEvent $event) {
        $event->types[] = CalendarEventField::class;
      }
    );

    Event::on(
      Cp::class, Cp::EVENT_REGISTER_CP_NAV_ITEMS,
      function(RegisterCpNavItemsEvent $event) {
        $navItem = [
          'url'      => 'calendar',
          'label'    => Craft::t('app', 'Calendar'),
          'fontIcon' => 'date'
        ];

        foreach ($event->navItems as $index => $item) {
          if ($item['url'] != 'entries') continue;
          array_splice($event->navItems, $index + 1, 0, [$navItem]);
          return;
        }

        $event->navItems[] = $navItem;
      }
    );

    Event::on(
      UrlManager::class, UrlManager::EVENT_REGISTER_CP_URL_RULES,
      function(RegisterUrlRulesEvent $event) {
        $event->rules['calendar'] = 'calendarfield/calendar/index';
      }
    );

    Event::on(
      'lenz\craft\essentials\services\frontendCache\FrontendCacheService', 'defaultCacheDuration',
      function($event) {
        $edge = CalendarEventRecord::getNearestEdge();
        if ($edge) {
          $event->setMinDate($edge);
        }
      }
    );

    Craft::$app->getView()->hook('cp.entries.edit', function(array &$context) {
      if (isset($_GET['redirect']) && $_GET['redirect'] == 'calendar') {
        $context['redirectUrl'] = 'calendar';
      }
    });
  }

  /**
   * @param CalendarEvent $calendarEvent
   * @param ExportModel $model
   * @return ExportModel
   */
  public function triggerExportEvent(CalendarEvent $calendarEvent, ExportModel $model): ExportModel {
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
