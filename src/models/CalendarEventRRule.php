<?php

namespace lenz\calendarfield\models;

use Craft;
use craft\base\Model;
use DateTime;
use Eluceo\iCal\Property\Event\RecurrenceRule;
use Recurr\Rule;
use Throwable;

class CalendarEventRRule extends Model
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

    $rule = $this->toRecurrRule();
    return $rule
      ? $rule->getString()
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
  public function getAllFrequencies() {
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
   */
  public function getAllMonthlyModes() {
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
  public function getAllMonths() {
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
   */
  public function getAllMonthsShort() {
    return array_map(function($option) {
      $option['label'] = substr($option['label'], 0, 3);
      return $option;
    }, $this->getAllMonths());
  }

  /**
   * @return array
   */
  public function getAllOffsets() {
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
  public function getAllUntils() {
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
  public function getAllWeekdays() {
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
   */
  public function getAllWeekdaysShort() {
    return array_map(function($option) {
      $option['label'] = substr($option['label'], 0, 2);
      return $option;
    }, $this->getAllWeekdays());
  }

  /**
   * @return array
   */
  public function getAllWeekdaysAndGroups() {
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
  public function rules() {
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
  public function toExportRule() {
    try {
      $rule = new RecurrenceRule();
      $this->putRule($rule);
      return $rule;
    } catch (Throwable $error) {
      Craft::error($error->getMessage());
    }

    return null;
  }

  /**
   * @return Rule|null
   */
  public function toRecurrRule() {
    try {
      $rule = new Rule();
      $this->putRule($rule);
      return $rule;
    } catch (Throwable $error) {
      Craft::error($error->getMessage());
    }

    return null;
  }

  /**
   * @param string $attribute
   * @param array $range
   */
  public function validateArrayOf($attribute, $params) {
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
   */
  public function validateDateTime($attribute) {
    $value = $this->$attribute;
    if ($value !== false && !($value instanceof DateTime)) {
      $this->addError($attribute, '{attribute} must be a date / time.');
    }
  }


  // Private methods
  // ---------------

  /**
   * @param array $options
   * @return array
   */
  private function getValues($options) {
    return array_map(function($option) {
      return $option['value'];
    }, $options);
  }

  /**
   * @param Rule|RecurrenceRule $rule
   * @param string $day
   * @param int $offset
   * @throws Throwable
   */
  private function putByDay($rule, $day, $offset) {
    $byDay = explode(',', $day);
    $bySetOffset = [$offset];

    $rule->setByDay($byDay);
    $rule->setBySetPosition($bySetOffset);
  }

  /**
   * @param Rule|RecurrenceRule $rule
   * @throws Throwable
   */
  private function putRule($rule) {
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
        $this->putByDay($rule, $this->monthlyDay, $this->monthlyDayOffset);
      }
    } elseif ($this->freq == 'yearly') {
      if (count($this->yearlyMonths) > 0) {
        $rule->setByMonth($this->yearlyMonths);
      }

      if ($this->yearlyAt) {
        $this->putByDay($rule, $this->yearlyDay, $this->yearlyDayOffset);
      }
    }

    if ($this->until == 'count') {
      $rule->setCount($this->untilCount);
    } elseif ($this->until == 'date') {
      $rule->setUntil($this->untilDate);
    }
  }

  /**
   * @param Rule $rule
   * @param string $day
   * @param string $offset
   * @return true
   */
  private function readByDay($rule, $day, $offset) {
    $byDay = $rule->getByDay();
    $bySetPosition = $rule->getBySetPosition();

    if (is_array($byDay) && count($byDay) > 0) {
      $this->$day = implode(',', $byDay);
      $this->$offset = is_array($bySetPosition) && count($bySetPosition)
        ? $bySetPosition[0]
        : 0;

      return true;
    }

    return false;
  }


  // Static methods
  // --------------

  /**
   * @param string|null $rrule
   * @return CalendarEventRRule
   */
  static public function fromRRule(string $rrule = null) {
    $model = new CalendarEventRRule();
    if (is_null($rrule) || empty($rrule)) {
      return $model;
    }

    try {
      $rule = new Rule($rrule);
      $model->freq = strtolower($rule->getFreqAsText());
      $model->interval = $rule->getInterval();

      if ($model->freq == 'weekly') {
        $model->weeklyDay = $rule->getByDay();
      } elseif ($model->freq == 'monthly') {
        if ($model->readByDay($rule, 'monthlyDay', 'monthlyDayOffset')) {
          $model->monthlyMode = 'at';
        } else {
          $monthDate = $rule->getByMonthDay();
          $model->monthlyMode = 'every';
          $model->monthlyDate = is_array($monthDate) ? $monthDate : [];
        }
      } elseif ($model->freq == 'yearly') {
        $months = $rule->getByMonth();
        $model->yearlyMonths = is_array($months) ? $months : [];
        if ($model->readByDay($rule, 'yearlyDay', 'yearlyDayOffset')) {
          $model->yearlyAt = true;
        }
      }

      $count = $rule->getCount();
      $until = $rule->getUntil();
      if (!is_null($count)) {
        $model->until = 'count';
        $model->untilCount = $count;
      } elseif (!is_null($until)) {
        $model->until = 'date';
        $model->untilDate = $until;
      }
    } catch (Throwable $error) {
      Craft::error($error->getMessage());
    }

    return $model;
  }
}
