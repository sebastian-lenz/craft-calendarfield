<?php

namespace lenz\calendarfield\fields;

use Craft;
use craft\base\ElementInterface;
use craft\base\PreviewableFieldInterface;
use craft\base\SortableFieldInterface;
use craft\errors\DeprecationException;
use craft\helpers\ArrayHelper;
use craft\helpers\Json;
use craft\web\View;
use Exception;
use lenz\calendarfield\models\CalendarEvent;
use lenz\calendarfield\records\CalendarEventRecord;
use lenz\craft\utils\foreignField\ForeignField;
use lenz\craft\utils\foreignField\ForeignFieldModel;
use Throwable;
use Twig\TemplateWrapper;
use yii\base\InvalidConfigException;

/**
 * Class CalendarEventField
 */
class CalendarEventField
  extends ForeignField
  implements PreviewableFieldInterface, SortableFieldInterface
{
  /**
   * @var string
   */
  public $attachmentNameTemplate = '{{ dateStart|date(\'Y-m-d\') }} - {{ summary }}';

  /**
   * @var array
   */
  public $attributeSettings = [];

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
   * Known attributes that have additional settings.
   */
  const ATTRIBUTES_WITH_SETTINGS = [
    'description', 'calendarTitle', 'location',
  ];

  /**
   * Default field settings.
   */
  CONST DEFAULT_ATTRIBUTE_SETTINGS = [
    'hidden'       => false,
    'translatable' => false,
  ];


  /**
   * @inheritDoc
   * @throws DeprecationException
   */
  public function __set($name, $value) {
    if ($name == 'translatedFields') {
      Craft::$app->getDeprecator()->log(
        'calendarfield.translatedFields',
        'You must update the calendar field settings.'
      );

      foreach ($value as $fieldName) {
        $this->attributeSettings[$fieldName]['translatable'] = true;
      }
    } else {
      parent::__set($name, $value);
    }
  }

  /**
   * @return TemplateWrapper
   * @throws Throwable
   */
  public function getAttachmentNameTemplate(): TemplateWrapper {
    if (!isset($this->_attachmentNameTemplate)) {
      $this->_attachmentNameTemplate = self::parseTemplate($this->attachmentNameTemplate);
    }

    return $this->_attachmentNameTemplate;
  }

  /**
   * @param string $name
   * @return array
   * @throws Exception
   */
  public function getAttributeSettings(string $name): array {
    if (!in_array($name, self::ATTRIBUTES_WITH_SETTINGS)) {
      throw new Exception('Unknown field name: ' . $name);
    }

    return array_key_exists($name, $this->attributeSettings)
      ? $this->attributeSettings[$name] + self::DEFAULT_ATTRIBUTE_SETTINGS
      : self::DEFAULT_ATTRIBUTE_SETTINGS;
  }

  /**
   * @return TemplateWrapper
   * @throws Throwable
   */
  public function getDescriptionTemplate(): TemplateWrapper {
    if (!isset($this->_descriptionTemplate)) {
      $this->_descriptionTemplate = self::parseTemplate($this->descriptionTemplate);
    }

    return $this->_descriptionTemplate;
  }

  /**
   * @return array
   */
  public function getSortOption(): array {
    return [
      'label'     => $this->name,
      'orderBy'   => $this->handle . '.dateStart',
      'attribute' => 'field:' . $this->id,
    ];
  }

  /**
   * @param mixed $value
   * @param ElementInterface $element
   * @return string
   * @throws InvalidConfigException
   */
  public function getTableAttributeHtml($value, ElementInterface $element): string {
    return $value instanceof CalendarEvent
      ? $value->getDateRangeFormatted()
      : '-';
  }

  /**
   * @param string $attribute
   * @return bool
   * @throws Exception
   */
  public function isAttributePropagated(string $attribute): bool {
    // If the attribute has no custom settings, always propagate it.
    // Craft checks the translation method on its own and only
    // class this if we should propagate
    if (!in_array($attribute, self::ATTRIBUTES_WITH_SETTINGS)) {
      return true;
    }

    $settings = $this->getAttributeSettings($attribute);
    return !$settings['translatable'];
  }

  /**
   * @param string $name
   * @return bool
   * @throws Exception
   * @noinspection PhpUnused Used in field template
   */
  public function isAttributeVisible(string $name): bool {
    $settings = $this->getAttributeSettings($name);
    return !$settings['hidden'];
  }

  /**
   * @inheritDoc
   * @throws Exception
   */
  public function normalizeValue($value, ElementInterface $element = null) {
    if (is_string($value)) {
      try {
        $value = Json::decode($value);
      } catch (Throwable $error) {
        // Ignore this
      }
    }

    // If we get a serialized array here, we must remove the additional attributes
    // injected by CalendarEventField::toRecordAttributes
    if (is_array($value)) {
      unset($value['rootId']);
      unset($value['dateTill']);
    }

    return parent::normalizeValue($value, $element);
  }

  /**
   * @inheritDoc
   */
  public function rules(): array {
    $rules = parent::rules();
    $rules[] = [['attachmentNameTemplate', 'descriptionTemplate', 'initialLatitude', 'initialLongitude'], 'required'];
    $rules[] = [['attachmentNameTemplate', 'descriptionTemplate'], 'string'];
    $rules[] = [['initialLatitude', 'initialLongitude'], 'double'];
    $rules[] = [['enableRRule', 'enableStatus', 'useOwnerUrl'], 'boolean'];
    $rules[] = ['attributeSettings', 'validateAttributeSettings'];
    return $rules;
  }

  /**
   * @return void
   * @throws Exception
   */
  public function validateAttributeSettings() {
    $validated = [];
    $values = is_array($this->attributeSettings)
      ? $this->attributeSettings
      : [];

    foreach (self::ATTRIBUTES_WITH_SETTINGS as $name) {
      $validated[$name] = [
        'hidden'       => !!ArrayHelper::getValue($values, [$name, 'hidden'], false),
        'translatable' => !!ArrayHelper::getValue($values, [$name, 'translatable'], false),
      ];
    }

    $this->attributeSettings = $validated;
  }


  // Protected methods
  // -----------------

  /**
   * @param ForeignFieldModel $value
   * @param ElementInterface|null $element
   * @param bool $disabled
   * @return string
   */
  protected function getHtml(ForeignFieldModel $value, ElementInterface $element = null, $disabled = false): string {
    return $this->render(static::inputTemplate(), [
      'disabled' => $disabled,
      'field'    => $this,
      'name'     => $this->handle,
      'required' => $this->required,
      'value'    => $value,
    ]);
  }

  /**
   * @inheritDoc
   * @throws Exception
   */
  protected function toRecordAttributes(ForeignFieldModel $model, ElementInterface $element): array {
    if (!($model instanceof CalendarEvent)) {
      throw new Exception('Invalid model given');
    }

    $model->normalizeTimezone();
    $root = $model->getRoot();
    $fixtures = [
      'rootId'   => is_null($root) ? null : $root->getId(),
      'dateTill' => $model->getDateTill(),
    ];

    if ($model->hasSimpleRecurrenceRule()) {
      $fixtures['rrule'] = (string)$model->getSimpleRecurrenceRule();
    }

    $attributes = static::recordModelAttributes();
    ArrayHelper::removeValue($attributes, 'uid');

    return array_merge($model->getAttributes($attributes), $fixtures);
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
  static public function parseTemplate(string $source): TemplateWrapper {
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
    return CalendarEventRecord::class;
  }

  /**
   * @inheritDoc
   */
  public static function recordModelAttributes(): array {
    return [
      'calendarTitle',
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
