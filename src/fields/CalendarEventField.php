<?php

namespace lenz\calendarfield\fields;

use Craft;
use craft\base\ElementInterface;
use craft\base\Field;
use craft\helpers\ArrayHelper;
use craft\web\View;
use lenz\calendarfield\models\CalendarEvent;
use lenz\calendarfield\records\CalenderEventRecord;
use lenz\craft\utils\foreignField\ForeignField;
use lenz\craft\utils\foreignField\ForeignFieldModel;
use Throwable;
use Twig\TemplateWrapper;

/**
 * Class CalendarEventField
 */
class CalendarEventField extends ForeignField
{
  /**
   * @var string
   */
  public $attachmentNameTemplate = '{{ dateStart|date(\'Y-m-d\') }} - {{ summary }}';

  /**
   * @var string
   */
  public $descriptionTemplate = "{{- description -}}\n{{- ownerUrl ? '\\n\\nURL: ' ~ ownerUrl : '' -}}";

  /**
   * @var bool
   */
  public $enableRRule = false;

  /**
   * @var bool
   */
  public $enableStatus = false;

  /**
   * @var float
   */
  public $initialLatitude = 51.5;

  /**
   * @var float
   */
  public $initialLongitude = -0.09;

  /**
   * @var array
   */
  public $translatedFields = [];

  /**
   * @var bool
   */
  public $useOwnerUrl = false;

  /**
   * @var TemplateWrapper
   */
  private $_attachmentNameTemplate;

  /**
   * @var TemplateWrapper
   */
  private $_descriptionTemplate;


  /**
   * @return TemplateWrapper
   * @throws Throwable
   */
  public function getAttachmentNameTemplate() {
    if (!isset($this->_attachmentNameTemplate)) {
      $this->_attachmentNameTemplate = self::parseTemplate($this->attachmentNameTemplate);
    }

    return $this->_attachmentNameTemplate;
  }

  /**
   * @return TemplateWrapper
   * @throws Throwable
   */
  public function getDescriptionTemplate() {
    if (!isset($this->_descriptionTemplate)) {
      $this->_descriptionTemplate = self::parseTemplate($this->descriptionTemplate);
    }

    return $this->_descriptionTemplate;
  }

  /**
   * @param string $attribute
   * @return bool
   */
  public function isAttributePropagated(string $attribute) {
    return (
      $this->translationMethod != Field::TRANSLATION_METHOD_NONE ||
      in_array($attribute, $this->translatedFields)
    );
  }

  /**
   * @inheritDoc
   */
  public function rules() {
    $rules = parent::rules();
    $rules[] = [['attachmentNameTemplate', 'descriptionTemplate', 'initialLatitude', 'initialLongitude', 'translatedFields'], 'required'];
    $rules[] = [['attachmentNameTemplate', 'descriptionTemplate'], 'string'];
    $rules[] = [['initialLatitude', 'initialLongitude'], 'double'];
    $rules[] = [['enableRRule', 'enableStatus', 'useOwnerUrl'], 'boolean'];
    return $rules;
  }


  // Protected methods
  // -----------------

  /**
   * @param ForeignFieldModel $value
   * @param ElementInterface|null $element
   * @param bool $disabled
   * @return string
   */
  protected function getHtml(ForeignFieldModel $value, ElementInterface $element = null, $disabled = false) {
    $translatedFields = $this->translationMethod === Field::TRANSLATION_METHOD_NONE
      ? $this->translatedFields
      : [];

    return $this->render(static::inputTemplate(), [
      'disabled'         => $disabled,
      'field'            => $this,
      'name'             => $this->handle,
      'required'         => $this->required,
      'translatedFields' => $translatedFields,
      'value'            => $value,
    ]);
  }

  /**
   * @inheritDoc
   */
  protected function toRecordAttributes(ForeignFieldModel $model, ElementInterface $element) {
    $attributes = static::recordModelAttributes();
    ArrayHelper::removeValue($attributes, 'uid');

    return $model->getAttributes($attributes);
  }


  // Static methods
  // --------------

  /**
   * @inheritDoc
   */
  static public function displayName(): string {
    return static::t('Calendar field');
  }

  /**
   * @inheritDoc
   */
  public static function inputTemplate(): string {
    return 'calendarfield/_input';
  }

  /**
   * @inheritDoc
   */
  static public function modelClass(): string {
    return CalendarEvent::class;
  }

  /**
   * @param string $source
   * @return TemplateWrapper
   * @throws Throwable
   */
  static public function parseTemplate(string $source) {
    $view = Craft::$app->getView();
    $oldTemplateMode = $view->getTemplateMode();

    $view->setTemplateMode(View::TEMPLATE_MODE_SITE);
    $template = $view->getTwig()->createTemplate($source);
    $view->setTemplateMode($oldTemplateMode);

    return $template;
  }

  /**
   * @inheritDoc
   */
  static public function recordClass(): string {
    return CalenderEventRecord::class;
  }

  /**
   * @inheritDoc
   */
  public static function recordModelAttributes(): array {
    return [
      'title',
      'description',
      'location',
      'dateAllDay',
      'dateStart',
      'dateEnd',
      'geoLatitude',
      'geoLongitude',
      'status',
      'rrule',
      'uid',
    ];
  }

  /**
   * @inheritDoc
   */
  public static function settingsTemplate(): string {
    return 'calendarfield/_settings';
  }

  /**
   * @inheritDoc
   */
  public static function t(string $message): string {
    return Craft::t('calendarfield', $message);
  }
}
