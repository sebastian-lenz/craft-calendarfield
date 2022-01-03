<?php

namespace lenz\calendarfield\models;

use Craft;
use craft\base\Element;
use craft\base\ElementInterface;
use craft\helpers\DateTimeHelper;
use craft\helpers\StringHelper;
use DateTime;
use DateInterval;
use DateTimeZone;
use Eluceo\iCal\Component\Event as ExportModel;
use Eluceo\iCal\Property\Event\Geo;
use Exception;
use lenz\calendarfield\fields\CalendarEventField;
use lenz\calendarfield\Plugin;
use lenz\craft\utils\foreignField\ForeignFieldModel;
use RRule\RRule;
use Throwable;
use Twig\TemplateWrapper;
use yii\base\InvalidConfigException;

/**
 * Class CalendarEvent
 *
 * @property CalendarEventField $_field
 */
class CalendarEvent extends ForeignFieldModel
{
  /**
   * @var boolean
   */
  public $dateAllDay;

  /**
   * @var DateTime|null
   */
  public $dateEnd;

  /**
   * @var DateTime|null
   */
  public $dateStart;

  /**
   * @var string
   */
  public $description;

  /**
   * @var float
   */
  public $geoLatitude;

  /**
   * @var float
   */
  public $geoLongitude;

  /**
   * @var string
   */
  public $location;

  /**
   * @var string
   */
  public $rrule;

  /**
   * @var string
   */
  public $status;

  /**
   * @var string
   */
  public $title;

  /**
   * @var SimpleRecurrenceRule
   */
  private $_simpleRRule;

  /**
   * @var string
   */
  private $_uid;


  /**
   * CalendarEvent constructor.
   * @param CalendarEventField $field
   * @param ElementInterface|null $owner
   * @param array $config
   */
  public function __construct(CalendarEventField $field, ElementInterface $owner = null, array $config = []) {
    if (
      !$field->required &&
      array_key_exists('dateStart', $config) &&
      is_array($config['dateStart']) &&
      array_key_exists('date', $config['dateStart']) &&
      empty($config['dateStart']['date'])
    ) {
      $config['dateEnd'] = null;
      $config['dateStart'] = null;
    }

    // If the rRule form data is present, convert it to an instance
    // of SimpleRecurrenceRule
    if (
      array_key_exists('rrule', $config) &&
      is_array($config['rrule'])
    ) {
      $this->_simpleRRule = new SimpleRecurrenceRule($config['rrule']);
      unset($config['rrule']);
    }

    parent::__construct($field, $owner, $config);
  }

  /**
   * @inheritDoc
   */
  public function datetimeAttributes(): array {
    $attributes = parent::datetimeAttributes();
    $attributes[] = 'dateEnd';
    $attributes[] = 'dateStart';
    return $attributes;
  }

  /**
   * @retun string
   * @throws Throwable
   */
  public function getAttachmentName(): string {
    $name = $this->renderTemplate(
      $this->_field->getAttachmentNameTemplate()
    );

    return StringHelper::toAscii($name) . '.ics';
  }

  /**
   * @retun string
   * @throws Throwable
   */
  public function getAdvancedDescription(): string {
    return $this->renderTemplate(
      $this->_field->getDescriptionTemplate()
    );
  }

  /**
   * @return string
   * @noinspection PhpUnused
   */
  public function getDownloadUrl(): string {
    return Craft::$app->getUrlManager()->createAbsoluteUrl([
      'calendarfield/export/index', 'uid' => $this->_uid
    ]);
  }

  /**
   * @return string
   * @throws InvalidConfigException
   */
  public function getDateEndFormatted() : string {
    return $this->dateAllDay
      ? Craft::$app->getFormatter()->asDate($this->dateEnd)
      : Craft::$app->getFormatter()->asDatetime($this->dateEnd);
  }

  /**
   * @return string
   * @throws InvalidConfigException
   */
  public function getDateRangeFormatted(): string {
    $dateEnd   = $this->dateEnd;
    $dateStart = $this->dateStart;

    if (is_null($dateEnd) && is_null($dateStart)) {
      return '';
    } elseif (is_null($dateStart)) {
      return Craft::t('calendarfield', 'till {date}', [
        'date' => $this->getDateEndFormatted(),
      ]);
    } elseif (is_null($dateEnd)) {
      return Craft::t('calendarfield', 'from {date}', [
        'date' => $this->getDateStartFormatted(),
      ]);
    }

    if ($dateStart->getTimestamp() == $dateEnd->getTimestamp()) {
      return $this->getDateStartFormatted();
    }

    return implode(' - ', [
      $this->getDateStartFormatted(),
      $this->getDateEndFormatted()
    ]);
  }

  /**
   * @return string
   * @throws InvalidConfigException
   */
  public function getDateStartFormatted() : string {
    return $this->dateAllDay
      ? Craft::$app->getFormatter()->asDate($this->dateStart)
      : Craft::$app->getFormatter()->asDatetime($this->dateStart);
  }

  /**
   * @return DateTime|null
   */
  public function getDateTill(): ?DateTime {
    $rRule = $this->getRRuleResolver();
    if (is_null($this->dateStart) || is_null($rRule)) {
      return $this->dateEnd;
    } elseif ($rRule->isInfinite()) {
      return null;
    }

    $count = $rRule->count();
    if ($count < 1) {
      return $this->dateEnd;
    }

    /** @var DateTime $result */
    $result = $rRule[$count - 1];
    if (!is_null($this->dateEnd)) {
      $result->add($this->dateEnd->diff($this->dateStart));
    }

    return $result;
  }

  /**
   * @return ExportModel|null
   * @throws Throwable
   */
  public function getICalEvent(): ?ExportModel {
    if ($this->isEmpty()) {
      return null;
    }

    $dateEnd = $this->dateEnd;
    if ($this->dateAllDay) {
      $dateEnd = clone $dateEnd;
      $dateEnd->add(new DateInterval('P1D'));
    }

    $event = new ExportModel();
    $event
      ->setUniqueId($this->_uid)
      ->setSummary($this->getSummary())
      ->setDtStart($this->dateStart)
      ->setDtEnd($dateEnd)
      ->setNoTime($this->dateAllDay);

    $description = $this->getAdvancedDescription();
    if (!empty($description)) {
      $event->setDescription($description);
    }

    $location = $this->getLocationSingleLine();
    if (!empty($location)) {
      // We send the location as the location title, seems to be
      // the only way to show a map in Apple Calendar
      $event->setLocation($location, $location);
    }

    if ($this->_field->enableStatus && !empty($this->status)) {
      $event->setStatus($this->status);
    }

    if ($this->_field->enableRRule && !empty($this->rrule)) {
      $rule = $this->getSimpleRecurrenceRule()->toRecurrenceRule();
      if (!is_null($rule)) {
        $event->addRecurrenceRule($rule);
      }
    }

    if ($this->_field->useOwnerUrl) {
      $url = $this->getRootUrl();
      if (!is_null($url)) {
        $event->setUrl($url);
      }
    }

    if (
      !is_null($this->geoLatitude) &&
      !is_null($this->geoLongitude)
    ) {
      $geo = new Geo($this->geoLatitude, $this->geoLongitude);
      $event->setGeoLocation($geo);
    }

    return Plugin::getInstance()
      ->triggerExportEvent($this, $event);
  }

  /**
   * @return string
   */
  public function getLocationSingleLine(): string {
    return implode(', ', $this->getLocationLines());
  }

  /**
   * @return string[]
   */
  public function getLocationLines(): array {
    return array_filter(
      array_map(
        'trim',
        preg_split("/\r\n|\n|\r/", $this->location)
      )
    );
  }

  /**
   * @return string
   * @noinspection PhpUnused
   */
  public function getLocationTitle(): string {
    return $this->getLocationLines()[0];
  }

  /**
   * @param mixed $after
   * @param mixed $before
   * @param mixed $limit
   */
  public function getRecurrences($after = null, $before = null, $limit = null): array {
    return Recurrence::createForModel($this, $after, $before, $limit);
  }

  /**
   * @return string|null
   */
  public function getRootUrl(): ?string {
    $root = $this->getRoot();
    if (is_null($root)) {
      return null;
    }

    return $root->getUrl();
  }

  /**
   * @return RRule|null
   */
  public function getRRuleResolver(): ?RRule {
    if (empty($this->rrule)) {
      return null;
    }

    return new RRule($this->rrule, $this->dateStart);
  }

  /**
   * @return SimpleRecurrenceRule
   */
  public function getSimpleRecurrenceRule(): SimpleRecurrenceRule {
    if (!isset($this->_simpleRRule)) {
      $this->_simpleRRule = SimpleRecurrenceRule::fromString($this->rrule);
    }

    return $this->_simpleRRule;
  }

  /**
   * @return string
   */
  public function getSummary(): string {
    if (!empty($this->title)) {
      return $this->title;
    }

    $rootElement = $this->getRoot();
    if ($rootElement instanceof Element) {
      return (string)$rootElement;
    }

    return '';
  }

  /**
   * @return string
   */
  public function getUid(): string {
    return $this->_uid;
  }

  /**
   * @return bool
   */
  public function hasSimpleRecurrenceRule(): bool {
    return isset($this->_simpleRRule);
  }

  /**
   * @inheritDoc
   * @throws Exception
   */
  public function init() {
    foreach ($this->datetimeAttributes() as $attribute) {
      if ($this->$attribute !== null) {
        $this->$attribute = DateTimeHelper::toDateTime(
          $this->$attribute, false, !$this->dateAllDay
        );

        if ($this->dateAllDay) {
          self::convertTimezone(Craft::$app->getTimeZone(), $this->$attribute, $this->$attribute);
        }
      }
    }

    parent::init();
  }

  /**
   * @return bool
   */
  public function isEmpty(): bool {
    return is_null($this->dateStart) || is_null($this->dateEnd);
  }

  /**
   * @throws Exception
   */
  public function normalizeTimezone() {
    if ($this->dateAllDay) {
      $dateEnd   = $this->dateEnd;
      $dateStart = $this->dateStart;

      if (!is_null($this->dateStart)) {
        CalendarEvent::convertTimezone('UTC', $dateStart, $dateStart);
        $dateStart->setTime(0, 0);
      }

      if (!is_null($dateEnd)) {
        CalendarEvent::convertTimezone('UTC', $dateEnd, $dateEnd);
        $dateEnd->setTime(23, 59, 59);
      }
    }
  }

  /**
   * @inheritDoc
   */
  public function rules(): array {
    $rules = [
      [['title', 'description', 'location'], 'string'],
      [['dateAllDay'], 'boolean'],
      [['geoLatitude', 'geoLongitude'], 'double'],
      ['dateStart', 'validateDate'],
      ['dateEnd', 'validateDateEnd'],
      ['rrule', 'validateRRule', 'skipOnEmpty' => false],
    ];

    if ($this->_field->required) {
      $rules[] = [['dateStart', 'dateEnd'], 'required'];
    }

    return $rules;
  }

  /**
   * @param string $value
   */
  public function setUid(string $value) {
    $this->_uid = $value;
  }

  /**
   * @param string $attribute
   * @throws Exception
   */
  public function validateDate(string $attribute) {
    $value = $this->$attribute;

    if (
      !is_null($value) &&
      !($value instanceof DateTime)
    ) {
      $this->addError($attribute, Craft::t('calendarfield',
        '{attribute} must be a date/time value.'
      ));
    }
  }

  /**
   * @param string $attribute
   * @throws Exception
   * @noinspection PhpUnused Validator
   */
  public function validateDateEnd(string $attribute) {
    $value = $this->$attribute;
    $this->validateDate($attribute);

    if (is_null($this->dateStart)) {
      $this->$attribute = $value = null;
    } elseif (is_null($value)) {
      $this->addError($attribute, Craft::t('calendarfield',
        '{attribute} is required.'
      ));
    } elseif ($this->dateStart->getTimestamp() > $value->getTimestamp()) {
      $this->addError($attribute, Craft::t('calendarfield',
        'The end time must be after the start time.'
      ));
    }
  }

  /**
   * @param string $attribute
   * @noinspection PhpUnused Validator
   */
  public function validateRRule(string $attribute) {
    if (isset($this->_simpleRRule)) {
      $this->_simpleRRule->validate();

      if ($this->_simpleRRule->hasErrors()) {
        $this->addError($attribute, Craft::t('calendarfield',
          '{attribute} contains errors'
        ));
      } else {
        $this->$attribute = (string)$this->_simpleRRule;
      }
    }
  }


  // Private methods
  // ---------------

  /**
   * @param TemplateWrapper $template
   * @return string
   */
  private function renderTemplate(TemplateWrapper $template): string {
    $context = $this->getAttributes() + [
      'element'  => $this->getRoot(),
      'owner'    => $this->_owner,
      'ownerUrl' => is_null($this->_owner) ? null : $this->_owner->getUrl(),
      'rootUrl'  => $this->getRootUrl(),
      'summary'  => $this->getSummary(),
    ];

    return $template->render($context);
  }


  // Static methods
  // --------------

  /**
   * @param string $timezone
   * @param DateTime $value
   * @param DateTime|null $result
   * @return DateTime
   * @throws Exception
   */
  static public function convertTimezone(string $timezone, DateTime $value, DateTime $result = null): ?DateTime {
    $year   = $value->format('Y');
    $month  = $value->format('m');
    $day    = $value->format('d');
    $hour   = $value->format('H');
    $minute = $value->format('i');
    $second = $value->format('s');

    if (is_null($result)) {
      $result = new DateTime();
    }

    $result->setTimezone(new DateTimeZone($timezone));
    $result->setDate($year, $month, $day);
    $result->setTime($hour, $minute, $second);

    return $result;
  }
}
