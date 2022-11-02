<?php

/** @noinspection PhpUnused */

namespace lenz\calendarfield\controllers;

use Craft;
use craft\elements\Entry;
use craft\errors\InvalidFieldException;
use craft\web\Controller;
use craft\web\Response;
use Eluceo\iCal\Component\Calendar;
use lenz\calendarfield\fields\CalendarEventField;
use lenz\calendarfield\models\CalendarEvent;
use lenz\calendarfield\records\CalendarEventRecord;
use Throwable;
use yii\web\NotFoundHttpException;
use yii\web\Response as ResponseAlias;

/**
 * Class ExportController
 */
class ExportController extends Controller
{
  /**
   * @inheritDoc
   */
  protected int|bool|array $allowAnonymous = true;


  /**
   * @param string $uid
   * @return Response
   * @throws NotFoundHttpException
   * @throws Throwable
   */
  public function actionIndex(string $uid): Response {
    $model = $this->loadModel($uid);
    if (is_null($model)) {
      throw new NotFoundHttpException();
    }

    $element = $model->getRoot();
    if (
      $element instanceof Entry &&
      $element->status !== Entry::STATUS_LIVE
    ) {
      throw new NotFoundHttpException();
    }

    return $this->createResponse($model);
  }


  // Private methods
  // ---------------

  /**
   * @param CalendarEvent $model
   * @return string
   * @throws Throwable
   */
  private function createContent(CalendarEvent $model): string {
    $calendar = new Calendar(\Craft::$app->getSystemName());
    $calendar->addComponent($model->getICalEvent());

    return $calendar->render();
  }

  /**
   * @param CalendarEvent $model
   * @return Response
   * @throws Throwable
   */
  private function createResponse(CalendarEvent $model): Response {
    $response = new Response();
    $response->format = ResponseAlias::FORMAT_RAW;
    $response->content = $this->createContent($model);
    $response->headers->add('Content-Type', 'text/calendar');
    $response->setDownloadHeaders($model->getAttachmentName(), 'text/calendar');

    return $response;
  }

  /**
   * @param string $uid
   * @return CalendarEvent|null
   * @throws InvalidFieldException
   * @throws InvalidFieldException
   * @throws InvalidFieldException
   */
  private function loadModel(string $uid): ?CalendarEvent {
    $record = CalendarEventRecord::findOne(['uid' => $uid]);
    if (is_null($record)) {
      return null;
    }

    $owner = Craft::$app
      ->getElements()
      ->getElementById($record->elementId, null, $record->siteId);

    $field = Craft::$app->getFields()
      ->getFieldById($record->fieldId);

    if (!($field instanceof CalendarEventField)) {
      return null;
    }

    return $owner->getFieldValue($field->handle);
  }
}
