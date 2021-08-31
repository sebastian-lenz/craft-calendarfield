<?php

namespace lenz\calendarfield\models;

use Craft;
use craft\base\Model;
use DateTime;
use DateTimeZone;
use Throwable;

/**
 * Class SimpleRecurrenceRule
 *
 * This is a simplified edit model for the full RecurrenceRule
 * specification. It is only used within the control panel edit
 * form.
 */
class SimpleRecurrenceRule extends Model
{
  /**
   * @var string
   */
  public $freq = 'none';

  /**
   * @var int
   */
  public $interval = 1;

  /**
   * @var string
   */
  public $monthlyMode = 'every';

  /**
   * @var array
   */
  public $monthlyDate = [];

  /**
   * @var string
   */
  public $monthlyDay = '';

  /**
   * @var int
   */
  public $monthlyDayOffset = 0;

  /**
   * @var string
   */
  public $until = 'never';

  /**
   * @var int
   */
  public $untilCount = 1;

  /**
   * @var DateTime|false
   */
  public $untilDate = false;

  /**
   * @var string[]
   */
  public $weeklyDay = [];

  /**
   * @var bool
   */
  public $yearlyAt = false;

  /**
   * @var array
   */
  public $yearlyMonths = [];

  /**
   * @var string
   */
  public $yearlyDay = '';

  /**
   * @var int
   */
  public $yearlyDayOffset = 0;


  /**
   * @return string
   */
  public function __toString() {
    if ($this->freq == 'none') {
      return '';
    }

    $rule = $this->toRecurrenceRule();
    return $rule
      ? $rule->getEscapedValue()
      : '';
  }

  /**
   * @inheritDoc
   */
  public function datetimeAttributes(): array {
    return ['untilDate'];
  }

  /**
   * @return array
   */
  public function getAllFrequencies(): array {
    return [
      [
        'value' => 'none',
        'label' => Craft::t('calendarfield', 'None'),
      ], [
        'value' => 'daily',
        'label' => Craft::t('calendarfield', 'Daily'),
      ], [
        'value' => 'weekly',
        'label' => Craft::t('calendarfield', 'Weekly'),
      ], [
        'value' => 'monthly',
        'label' => Craft::t('calendarfield', 'Monthly'),
      ], [
        'value' => 'yearly',
        'label' => Craft::t('calendarfield', 'Yearly'),
      ]
    ];
  }

  /**
   * @return array
   * @noinspection PhpUnused ApiMethod
   */
  public function getAllMonthlyModes(): array {
    return [
      [
        'value' => 'every',
        'label' => Craft::t('calendarfield', 'Every'),
      ], [
        'value' => 'at',
        'label' => Craft::t('calendarfield', 'At'),
      ]
    ];
  }

  /**
   * @return array
   */
  public function getAllMonths(): array {
    return [
      [
        'value' => 1,
        'label' => Craft::t('calendarfield', 'January'),
      ], [
        'value' => 2,
        'label' => Craft::t('calendarfield', 'February'),
      ], [
        'value' => 3,
        'label' => Craft::t('calendarfield', 'March'),
      ], [
        'value' => 4,
        'label' => Craft::t('calendarfield', 'April'),
      ], [
        'value' => 5,
        'label' => Craft::t('calendarfield', 'May'),
      ], [
        'value' => 6,
        'label' => Craft::t('calendarfield', 'June'),
      ], [
        'value' => 7,
        'label' => Craft::t('calendarfield', 'July'),
      ], [
        'value' => 8,
        'label' => Craft::t('calendarfield', 'August'),
      ], [
        'value' => 9,
        'label' => Craft::t('calendarfield', 'September'),
      ], [
        'value' => 10,
        'label' => Craft::t('calendarfield', 'October'),
      ], [
        'value' => 11,
        'label' => Craft::t('calendarfield', 'November'),
      ], [
        'value' => 12,
        'label' => Craft::t('calendarfield', 'December'),
      ]
    ];
  }

  /**
   * @return array
   * @noinspection PhpUnused ApiMethod
   */
  public function getAllMonthsShort(): array {
    return array_map(function($option) {
      $option['label'] = substr($option['label'], 0, 3);
      return $option;
    }, $this->getAllMonths());
  }

  /**
   * @return array
   */
  public function getAllOffsets(): array {
    return [
      [
        'value' => 1,
        'label' => Craft::t('calendarfield', 'First'),
      ], [
        'value' => 2,
        'label' => Craft::t('calendarfield', 'Second'),
      ], [
        'value' => 3,
        'label' => Craft::t('calendarfield', 'Third'),
      ], [
        'value' => 4,
        'label' => Craft::t('calendarfield', 'Fourth'),
      ], [
        'value' => -1,
        'label' => Craft::t('calendarfield', 'Last'),
      ]
    ];
  }

  /**
   * @return array
   */
  public function getAllUntils(): array {
    return [
      [
        'value' => 'never',
        'label' => Craft::t('calendarfield', 'Never'),
      ], [
        'value' => 'count',
        'label' => Craft::t('calendarfield', 'After'),
      ], [
        'value' => 'date',
        'label' => Craft::t('calendarfield', 'At'),
      ]
    ];
  }

  /**
   * @return array
   */
  public function getAllWeekdays(): array {
    $weekdays = [
      [
        'value' => 'SU',
        'label' => Craft::t('calendarfield', 'Sunday'),
      ], [
        'value' => 'MO',
        'label' => Craft::t('calendarfield', 'Monday'),
      ], [
        'value' => 'TU',
        'label' => Craft::t('calendarfield', 'Tuesday'),
      ], [
        'value' => 'WE',
        'label' => Craft::t('calendarfield', 'Wednesday'),
      ], [
        'value' => 'TH',
        'label' => Craft::t('calendarfield', 'Thursday'),
      ], [
        'value' => 'FR',
        'label' => Craft::t('calendarfield', 'Friday'),
      ], [
        'value' => 'SA',
        'label' => Craft::t('calendarfield', 'Saturday'),
      ],
    ];

    $session = Craft::$app->getUser();
    $user = $session->getIdentity();
    $weekStartDay = $user ? $user->getPreference('weekStartDay') : null;

    if ($weekStartDay == 1) {
      $weekdays[] = array_shift($weekdays);
    }

    return $weekdays;
  }

  /**
   * @return array
   * @noinspection PhpUnused ApiMethod
   */
  public function getAllWeekdaysShort(): array {
    return array_map(function($option) {
      $option['label'] = substr($option['label'], 0, 2);
      return $option;
    }, $this->getAllWeekdays());
  }

  /**
   * @return array
   */
  public function getAllWeekdaysAndGroups(): array {
    $weekdays = $this->getAllWeekdays();
    return array_merge($weekdays, [
      [
        'value' => 'SU,MO,TU,WE,TH,FR,SA',
        'label' => Craft::t('calendarfield', 'Day'),
      ], [
        'value' => 'MO,TU,WE,TH,FR',
        'label' => Craft::t('calendarfield', 'Weekday'),
      ], [
        'value' => 'SU,SA',
        'label' => Craft::t('calendarfield', 'Weekend day'),
      ]
    ]);
  }

  /**
   * @return array
   */
  public function rules(): array {
    $rules = [
      ['yearlyAt', 'boolean'],

      ['untilDate', 'validateDateTime'],

      ['freq', 'in',
        'range' => $this->getValues($this->getAllFrequencies())
      ],

      ['until', 'in',
        'range' => $this->getValues($this->getAllUntils())
      ],

      [['monthlyDay', 'yearlyDay'], 'in',
        'range' => $this->getValues($this->getAllWeekdaysAndGroups())
      ],

      [['monthlyDayOffset', 'yearlyDayOffset'], 'in',
        'range' => $this->getValues($this->getAllOffsets())
      ],

      ['weeklyDay', 'validateArrayOf',
        'params' => [
          'range' => $this->getValues($this->getAllWeekdays())
        ]
      ],

      ['yearlyMonths', 'validateArrayOf',
        'params' => [
          'range' => $this->getValues($this->getAllMonths())
        ]
      ],

      [['interval', 'untilCount'], 'integer',
        'min' => 1
      ],
    ];

    $required = [];

    if ($this->until == 'count') {
      $required[] = 'untilCount';
    } elseif ($this->until == 'date') {
      $required[] = 'untilDate';
    }

    if (count($required)) {
      $rules[] = [$required, 'required'];
    }

    return $rules;
  }

  /**
   * @return RecurrenceRule|null
   */
  public function toRecurrenceRule(): ?RecurrenceRule {
    try {
      return $this->createRecurrenceRule();
    } catch (Throwable $error) {
      Craft::error($error->getMessage());
    }

    return null;
  }

  /**
   * @param string $attribute
   * @param array $params
   * @noinspection PhpUnused Validator
   */
  public function validateArrayOf(string $attribute, array $params) {
    $items = $this->$attribute;
    $range = $params['range'];

    if (!is_array($items)) {
      $this->addError($attribute, '{attribute} must be an array.');
    }

    $invalidValues = [];
    foreach ($items as $item) {
      if (!in_array($item, $range)) {
        $invalidValues[] = $item;
      }
    }

    if (count($invalidValues)) {
      $this->addError($attribute, '{attribute} contains invalid values.');
    }
  }

  /**
   * @param string $attribute
   * @noinspection PhpUnused Validator
   */
  public function validateDateTime(string $attribute) {
    $value = $this->$attribute;
    if ($value !== false && !($value instanceof DateTime)) {
      $this->addError($attribute, '{attribute} must be a date / time.');
    }
  }


  // Private methods
  // ---------------

  /**
   * @param RecurrenceRule $rule
   * @param string $day
   * @param string $offset
   * @return bool
   */
  private function applyByDay(RecurrenceRule $rule, string $day, string $offset): bool {
    $byDay = $rule->getByDayArray();
    $bySetPosition = $rule->getBySetPos();

    if (is_array($byDay) && count($byDay) > 0) {
      $this->$day = implode(',', $byDay);
      $this->$offset = is_array($bySetPosition) && count($bySetPosition)
        ? $bySetPosition[0]
        : 0;

      return true;
    }

    return false;
  }

  /**
   * @return RecurrenceRule
   * @throws Throwable
   */
  private function createRecurrenceRule() : RecurrenceRule {
    $rule = new RecurrenceRule();
    $rule
      ->setFreq(strtoupper($this->freq))
      ->setInterval($this->interval);

    if ($this->freq == 'weekly') {
      if (count($this->weeklyDay) > 0) {
        $rule->setByDay($this->weeklyDay);
      }
    } elseif ($this->freq == 'monthly') {
      if ($this->monthlyMode == 'every') {
        if (count($this->monthlyDate) > 0) {
          $rule->setByMonthDay($this->monthlyDate);
        }
      } else {
        $rule->setByDay($this->monthlyDay);
        $rule->setBySetPos($this->monthlyDayOffset);
      }
    } elseif ($this->freq == 'yearly') {
      if (count($this->yearlyMonths) > 0) {
        $rule->setByMonth($this->yearlyMonths);
      }

      if ($this->yearlyAt) {
        $rule->setByDay($this->yearlyDay);
        $rule->setBySetPos($this->yearlyDayOffset);
      }
    }

    if ($this->until == 'count') {
      $rule->setCount($this->untilCount);
    } elseif ($this->until == 'date') {
      $until = clone $this->untilDate;
      $until->setTime(23, 59, 59);
      $until->setTimezone(new DateTimeZone('UTC'));
      $rule->setUntil($until);
    }

    return $rule;
  }

  /**
   * @param array $options
   * @return array
   */
  private function getValues(array $options): array {
    return array_map(function($option) {
      return $option['value'];
    }, $options);
  }


  // Static methods
  // --------------

  /**
   * @param string|null $raw
   * @return SimpleRecurrenceRule
   */
  static public function fromString(string $raw = null): SimpleRecurrenceRule {
    $model = new SimpleRecurrenceRule();
    if (empty($raw)) {
      return $model;
    }

    try {
      $rule = new RecurrenceRule($raw);
      $model->freq = strtolower($rule->getFreq());
      $model->interval = $rule->getInterval();

      if ($model->freq == 'weekly') {
        $model->weeklyDay = $rule->getByDayArray();
      } elseif ($model->freq == 'monthly') {
        if ($model->applyByDay($rule, 'monthlyDay', 'monthlyDayOffset')) {
          $model->monthlyMode = 'at';
        } else {
          $monthDate = $rule->getByMonthDayArray();
          $model->monthlyMode = 'every';
          $model->monthlyDate = is_array($monthDate) ? $monthDate : [];
        }
      } elseif ($model->freq == 'yearly') {
        $months = $rule->getByMonthArray();
        $model->yearlyMonths = is_array($months) ? $months : [];
        if ($model->applyByDay($rule, 'yearlyDay', 'yearlyDayOffset')) {
          $model->yearlyAt = true;
        }
      }

      $count = $rule->getCount();
      $until = $rule->getUntil();
      if (!is_null($count)) {
        $model->until = 'count';
        $model->untilCount = $count;
      } elseif (!is_null($until)) {
        $until = new DateTime($until->format('c'));
        $until->setTimezone(new DateTimeZone(Craft::$app->getTimeZone()));
        $model->until = 'date';
        $model->untilDate = $until;
      }
    } catch (Throwable $error) {
      Craft::error($error->getMessage());
    }

    return $model;
  }
}
