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
    if (!empty($rule)) {
      $this->applyString($rule);
    }
  }

  /**
   * @return string|null
   * @noinspection PhpUnused ApiMethod
   */
  public function getByDay(): ?string {
    return $this->byDay;
  }

  /**
   * @return array|null
   */
  public function getByDayArray(): ?array {
    return is_null($this->byDay)
      ? null
      : explode(',', $this->byDay);
  }

  /**
   * @return string|null
   * @noinspection PhpUnused ApiMethod
   */
  public function getByMonth(): ?string {
    return $this->byMonth;
  }

  /**
   * @return string[]|null
   */
  public function getByMonthArray(): ?array {
    return is_null($this->byMonth)
      ? null
      : explode(',', $this->byMonth);
  }

  /**
   * @return string|null
   * @noinspection PhpUnused ApiMethod
   */
  public function getByMonthDay(): ?string {
    return $this->byMonthDay;
  }

  /**
   * @return array|null
   */
  public function getByMonthDayArray(): ?array {
    return is_null($this->byMonthDay)
      ? null
      : explode(',', $this->byMonthDay);
  }

  /**
   * @return array|null
   */
  public function getBySetPos(): ?array {
    return $this->bySetPos;
  }

  /**
   * @inheritDoc
   * @param array|null|string $day
   * @return $this
   */
  public function setByDay($day): RecurrenceRule {
    $this->byDay = self::toStringList($day, function($value) {
      return !preg_match('/^(-?\d+)?(SU|MO|TU|WE|TH|FR|SA)$/', $value);
    });

    $this->canUseBySetPos = true;
    return $this;
  }

  /**
   * @inheritDoc
   * @param array|int|null|string $value
   * @return $this
   */
  public function setByHour($value): RecurrenceRule {
    $this->byMinute = self::toIntegerList($value, function($value) {
      return (!is_integer($value) || $value < 0 || $value > 23);
    });

    $this->canUseBySetPos = true;
    return $this;
  }

  /**
   * @inheritDoc
   * @param array|int|null|string $value
   * @return $this
   */
  public function setByMinute($value): RecurrenceRule {
    $this->byMinute = self::toIntegerList($value, function($value) {
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
  public function setByMonth($month): RecurrenceRule {
    $this->byMonth = self::toIntegerList($month, function($value) {
      return (!is_integer($value) || $value <= 0 || $value > 12);
    });

    $this->canUseBySetPos = true;
    return $this;
  }

  /**
   * @inheritDoc
   * @param array|int|null|string $day
   * @return $this
   */
  public function setByMonthDay($day): RecurrenceRule {
    $this->byMonthDay = self::toIntegerList($day, function($value) {
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
  public function setBySecond($second): RecurrenceRule {
    $this->bySecond = self::toIntegerList($second, function($value) {
      return (!is_integer($value) || $value < 0 || $value > 60);
    });

    $this->canUseBySetPos = true;
    return $this;
  }

  /**
   * @inheritDoc
   * @param array|int|null|string $value
   * @return $this
   */
  public function setByWeekNo($value): RecurrenceRule {
    $this->byWeekNo = self::toIntegerList($value, function($value) {
      return (!is_integer($value) || $value > 53 || $value < -53 || $value === 0);
    });

    $this->canUseBySetPos = true;
    return $this;
  }

  /**
   * @inheritDoc
   * @param array|int|null|string $day
   * @return $this
   */
  public function setByYearDay($day): RecurrenceRule {
    $this->byYearDay = self::toIntegerList($day, function($value) {
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
   * @param array|int|string|null $value
   * @param callable $validator
   * @return string|null
   */
  public static function toIntegerList(array|int|string|null $value, callable $validator): ?string {
    if (is_null($value)) {
      return null;
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
   * @param array|string|null $value
   * @param callable $validator
   * @return string|null
   */
  public static function toStringList(array|string|null $value, callable $validator): ?string {
    if (is_null($value)) {
      return null;
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
