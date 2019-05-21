<?php

namespace lenz\calendarfield\fields;

use Craft;
use craft\base\ElementInterface;
use craft\base\Field;
use craft\web\View;
use lenz\calendarfield\models\CalendarEvent;
use lenz\calendarfield\records\CalenderEventRecord;
use lenz\craft\utils\foreignField\ForeignField;
use lenz\craft\utils\foreignField\ForeignModel;
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
   * @inheritDoc
   */
  const MODEL_CLASS = CalendarEvent::class;

  /**
   * @inheritDoc
   */
  const RECORD_CLASS = CalenderEventRecord::class;

  /**
   * @inheritDoc
   */
  const TEMPLATE_SETTINGS = 'calendarfield/_settings';

  /**
   * @inheritDoc
   */
  const TEMPLATE_INPUT = 'calendarfield/_input';

  /**
   * @inheritDoc
   */
  const TRANSLATION_DOMAIN = 'calendarfield';


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
   * @param ForeignModel $value
   * @param ElementInterface|null $element
   * @param bool $disabled
   * @return string
   */
  protected function getHtml(ForeignModel $value, ElementInterface $element = null, $disabled = false) {
    $translatedFields = $this->translationMethod === Field::TRANSLATION_METHOD_NONE
      ? $this->translatedFields
      : [];

    return $this->render(static::TEMPLATE_INPUT, [
      'disabled'         => $disabled,
      'field'            => $this,
      'name'             => $this->handle,
      'required'         => $this->required,
      'translatedFields' => $translatedFields,
      'value'            => $value,
    ]);
  }


  // Static methods
  // --------------

  /**
   * @return string
   */
  static public function displayName(): string {
    return Craft::t(self::TRANSLATION_DOMAIN, 'Calendar field');
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
}
