<?php

namespace lenz\calendarfield\controllers;

use Craft;
use craft\helpers\DateTimeHelper;
use craft\helpers\UrlHelper;
use craft\web\Controller;
use Exception;
use lenz\calendarfield\fields\CalendarEventField;
use lenz\calendarfield\models\CalendarEvent;
use lenz\calendarfield\models\Recurrence;
use lenz\calendarfield\Plugin;
use lenz\calendarfield\records\CalendarEventRecord;
use lenz\calendarfield\services\calendar\Source;
use Throwable;
use yii\web\Response;

/**
 * Class CalendarController
 */
class CalendarController extends Controller
{
  /**
   * @return Response
   */
  public function actionIndex() {
    return $this->renderTemplate('calendarfield/_calendar', [
      'calendarOptions' => $this->getCalendarOptions(),
      'showSiteMenu'    => true,
    ]);
  }

  /**
   * @param string $start
   * @param string $end
   * @return Response
   * @throws Exception
   */
  public function actionFetchEvents($start, $end) {
    $request = Craft::$app->request;
    $recurrences = Plugin::getInstance()->calendar->query()
      ->eventAfter($start)
      ->eventBefore($end)
      ->siteId($request->getParam('siteId', null))
      ->all();

    return $this->asJson(array_map(function(Recurrence $recurrence) {
      return $recurrence->toFullCalendarEvent();
    }, $recurrences));
  }

  /**
   * @param int $eventId
   * @param array $attributes
   * @return Response
   * @throws Throwable
   */
  public function actionUpdateEvent() {
    $request = Craft::$app->request;
    $record = CalendarEventRecord::findOne([
      'id' => $request->post('eventId')
    ]);

    if (is_null($record)) {
      throw new Exception('Event not found.');
    }

    $event = $this->updateCalendarEvent($record, $request->post('attributes'));
    if (!$event) {
      throw new Exception('Could not update event record.');
    }

    return $this->asJson([
      'success' => true,
    ]);
  }


  // Private methods
  // ---------------

  /**
   * @return array
   */
  private function getCalendarOptions() : array {
    return [
      'eventsUrl' => $this->getEventsUrl(),
      'sources'   => $this->getSources(),
      'updateUrl' => $this->getUpdateUrl(),
      'input'     => [
        'firstDay' => Plugin::getWeekStartDay(),
        'locale'   => Craft::$app->locale->id,
        'timeZone' => Craft::$app->getTimeZone(),
      ],
    ];
  }

  /**
   * @return string
   */
  private function getEventsUrl() {
    return UrlHelper::cpUrl('calendar/fetch-events');
  }

  /**
   * @return array
   */
  private function getSources() {
    return array_map(function(Source $source) {

    }, Plugin::getInstance()->calendar->getSources());
  }

  /**
   * @return string
   */
  private function getUpdateUrl() {
    return UrlHelper::cpUrl('calendar/update-event');
  }

  /**
   * @param CalendarEventRecord $record
   * @param array $attributes
   * @return CalendarEvent
   * @throws Throwable
   */
  private function updateCalendarEvent(CalendarEventRecord $record, array $attributes) {
    $field = Craft::$app->getFields()->getFieldById($record->fieldId);
    if (!($field instanceof CalendarEventField)) {
      throw new Exception('Could not resolve field.');
    }

    $element = Craft::$app->getElements()->getElementById($record->elementId);
    if (!$element) {
      throw new Exception('Could not load element.');
    }

    $model = $element->getFieldValue($field->handle);
    if (!($model instanceof CalendarEvent)) {
      throw new Exception('Could not create model.');
    }

    foreach ($model->datetimeAttributes() as $name) {
      if (array_key_exists($name, $attributes)) {
        $attributes[$name] = DateTimeHelper::toDateTime($attributes[$name]);
      }
    }

    $model->setAttributes($attributes);
    return Craft::$app->elements->saveElement($element)
      ? $model
      : null;
  }
}
