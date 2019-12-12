<?php

namespace lenz\calendarfield\models;

use Eluceo\iCal\Property\Event\RecurrenceRule as RecurrenceRuleBase;
use Exception;
use InvalidArgumentException;
use RRule\RRule;

/**
 * Class RecurrenceRule
 */
class RecurrenceRule extends RecurrenceRuleBase
{
  /**
   * RecurrenceRule constructor.
   *
   * @param string|null $rule
   * @throws Exception
   */
  public function __construct(string $rule = null) {
    if (!is_null($rule) && !empty($rule)) {
      $this->applyString($rule);
    }
  }

  /**
   * @return string|null
   */
  public function getByDay() {
    return $this->byDay;
  }

  /**
   * @return array|null
   */
  public function getByDayArray() {
    return is_null($this->byDay)
      ? null
      : explode(',', $this->byDay);
  }

  /**
   * @return string|null
   */
  public function getByMonth() {
    return $this->byMonth;
  }

  public function getByMonthArray() {
    return is_null($this->byMonth)
      ? null
      : explode(',', $this->byMonth);
  }

  /**
   * @return string|null
   */
  public function getByMonthDay() {
    return $this->byMonthDay;
  }

  /**
   * @return array|null
   */
  public function getByMonthDayArray() {
    return is_null($this->byMonthDay)
      ? null
      : explode(',', $this->byMonthDay);
  }

  /**
   * @return array|null
   */
  public function getBySetPos() {
    return $this->bySetPos;
  }

  /**
   * @inheritDoc
   * @param array|null|string $day
   * @return $this
   */
  public function setByDay($day) {
    $this->byDay = self::toStringList($day, function($value) {
      return !preg_match('/^(-?\d+)?(SU|MO|TU|WE|TH|FR|SA)$/', $value);
    });

    $this->canUseBySetPos = true;
    return $this;
  }

  /**
   * @inheritDoc
   * @param array|int|null|string $hour
   * @return $this
   */
  public function setByHour($hour) {
    $this->byMinute = self::toIntegerList($hour, function($value) {
      return (!is_integer($value) || $value < 0 || $value > 23);
    });

    $this->canUseBySetPos = true;
    return $this;
  }

  /**
   * @inheritDoc
   * @param array|int|null|string $minute
   * @return $this
   */
  public function setByMinute($minute) {
    $this->byMinute = self::toIntegerList($minute, function($value) {
      return (!is_integer($value) || $value < 0 || $value > 59);
    });

    $this->canUseBySetPos = true;
    return $this;
  }

  /**
   * @inheritDoc
   * @param array|int|null|string $month
   * @return $this
   */
  public function setByMonth($month) {
    $this->byMonth = self::toIntegerList($month, function($value) {
      return (!is_integer($value) || $value <= 0 || $value > 12);
    });

    $this->canUseBySetPos = true;
    return $this;
  }

  /**
   * @inheritDoc
   * @param array|int|null|string $monthDay
   * @return $this
   */
  public function setByMonthDay($monthDay) {
    $this->byMonthDay = self::toIntegerList($monthDay, function($value) {
      return (!is_integer($value) || $value > 31 || $value < -31 || $value === 0);
    });

    $this->canUseBySetPos = true;
    return $this;
  }

  /**
   * @inheritDoc
   * @param array|int|null|string $second
   * @return $this
   */
  public function setBySecond($second) {
    $this->bySecond = self::toIntegerList($second, function($value) {
      return (!is_integer($value) || $value < 0 || $value > 60);
    });

    $this->canUseBySetPos = true;
    return $this;
  }

  /**
   * @inheritDoc
   * @param array|int|null|string $weekNo
   * @return $this
   */
  public function setByWeekNo($weekNo) {
    $this->byWeekNo = self::toIntegerList($weekNo, function($value) {
      return (!is_integer($value) || $value > 53 || $value < -53 || $value === 0);
    });

    $this->canUseBySetPos = true;
    return $this;
  }

  /**
   * @inheritDoc
   * @param array|int|null|string $yearDay
   * @return $this
   */
  public function setByYearDay($yearDay) {
    $this->byYearDay = self::toIntegerList($yearDay, function($value) {
      return (!is_integer($value) || $value > 366 || $value < -366 || $value === 0);
    });

    $this->canUseBySetPos = true;
    return $this;
  }


  // Protected methods
  // -----------------

  /**
   * @param string $key
   * @param $value
   * @throws Exception
   */
  protected function applyOption(string $key, $value) {
    if     ($key == 'BYDAY')      $this->setByDay($value);
    elseif ($key == 'BYHOUR')     $this->setByHour($value);
    elseif ($key == 'BYMINUTE')   $this->setByMinute($value);
    elseif ($key == 'BYMONTH')    $this->setByMonth($value);
    elseif ($key == 'BYMONTHDAY') $this->setByMonthDay($value);
    elseif ($key == 'BYSECOND')   $this->setBySecond($value);
    elseif ($key == 'BYSETPOS')   $this->setBySetPos($value);
    elseif ($key == 'BYYEARDAY')  $this->setByYearDay($value);
    elseif ($key == 'BYWEEKNO')   $this->setByWeekNo($value);
    elseif ($key == 'COUNT')      $this->setCount($value);
    elseif ($key == 'FREQ')       $this->setFreq($value);
    elseif ($key == 'INTERVAL')   $this->setInterval($value);
    elseif ($key == 'UNTIL')      $this->setUntil($value);
    elseif ($key == 'WKST')       $this->setWkst($value);
    elseif ($key != 'DTSTART') {
      throw new Exception('Unknown property "' . $key . '".');
    }
  }

  /**
   * @param string $rule
   * @throws Exception
   */
  protected function applyString(string $rule) {
    $rRule = new RRule($rule);
    $values = $rRule->getRule();

    foreach ($values as $key => $value) {
      $this->applyOption($key, $value);
    }
  }


  // Static methods
  // --------------

  /**
   * @param array|int|null|string $value
   * @param callable $validator
   * @return string|null
   */
  public static function toIntegerList($value, callable $validator) {
    if (is_null($value)) {
      return $value;
    }

    if (is_string($value)) {
      $value = explode(',', $value);
    } else if (is_int($value)) {
      $value = [$value];
    } else if (!is_array($value)) {
      throw new InvalidArgumentException('Invalid value');
    }

    $value = array_map(function($value) use ($validator) {
      $value = intval(trim($value));
      if ($validator($value)) {
        throw new InvalidArgumentException('Invalid value');
      }

      return $value;
    }, $value);

    return count($value) ? implode(',', $value) : null;
  }

  /**
   * @param array|null|string $value
   * @param callable $validator
   * @return string|null
   */
  public static function toStringList($value, callable $validator) {
    if (is_null($value)) {
      return $value;
    }

    if (is_string($value)) {
      $value = explode(',', $value);
    } else if (!is_array($value)) {
      throw new InvalidArgumentException('Invalid value');
    }

    $value = array_map(function($value) use ($validator) {
      $value = trim($value);
      if ($validator($value)) {
        throw new InvalidArgumentException('Invalid value');
      }

      return $value;
    }, $value);

    return count($value) ? implode(',', $value) : null;
  }
}
