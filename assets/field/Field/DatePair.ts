/**
 * https://github.com/jonthornton/Datepair.js
 */

const ONE_DAY = 86400000;

// IE's custom event support is totally borked.
// Use jQuery if possible
function triggerSimpleCustomEvent(el: HTMLElement, eventName: string) {
  $(el).trigger(eventName);
}

// el.classList not supported by < IE10
// use jQuery if available
function hasClass(el: HTMLElement, className: string): boolean {
  return $(el).hasClass(className);
}

function defaultOptions(): DatepairOptions {
  const options: DatepairOptions = {
    startClass: 'start',
    endClass: 'end',
    timeClass: 'time',
    dateClass: 'date',
    defaultDateDelta: 0,
    defaultTimeDelta: 3600000,
    anchor: 'start',

    // defaults for jquery-timepicker; override when using other input widgets
    parseTime: input => {
      return $(input).timepicker('getTime');
    },
    updateTime: (input, dateObj) => {
      $(input).timepicker('setTime', dateObj);
    },
    setMinTime: (input, dateObj) => {
      $(input).timepicker('option', 'minTime', dateObj);
    },

    // defaults for bootstrap datepicker; override when using other input widgets
    parseDate: input => {
      return input.value ? $(input).datepicker('getDate') : null;
    },
    updateDate: (input, dateObj) => {
      $(input).datepicker('setDate', dateObj);
    },
  };

  return options;
}

export interface DatepairOptions {
  /**
   * The input that will control the other input.
   * One of "start", "end", or null. See demo page for more information.
   *
   * default: "start"
   */
  anchor: string;

  /**
   * Class name of the date inputs, if any.
   *
   * default: "date"
   */
  dateClass: string;

  /**
   * Fill in the second date value with the specified range when the users
   * selects the first date. Value is in days. Set this to null to disable
   * automatically setting the second date.
   *
   * default: 0
   */
  defaultDateDelta: number;

  /**
   * Fill in the second time value with the specified range when the users
   * selects the first time. Value is in milliseconds; set this to 7200000
   * for a 2 hour range, for example. Set this to null to disable automatically
   * setting the second time.
   *
   * default: 0
   */
  defaultTimeDelta: number;

  /**
   * Class name of the range end input(s).
   *
   * default: "end"
   */
  endClass: string;

  /**
   * A function that takes a jQuery element for a date input and returns a
   * local time Date object representing the date input value.
   *
   * default: function for Bootstrap Datepicker
   */
  parseDate: (input: HTMLInputElement) => Date | null;

  /**
   * A function that takes a jQuery element for a time input and returns a
   * local time Date object representing the time input value. See example
   * page for more info.
   *
   * default: function for jquery-timepicker
   */
  parseTime: (input: HTMLInputElement) => Date | null;

  /**
   * A function that takes a jQuery element for a time input and a local
   * time Date object representing the time, and sets the timepicker
   * minTime value.
   *
   * default: function for jquery-timepicker
   */
  setMinTime?: (input: HTMLInputElement, dateObj: Date | null) => void;

  /**
   * Class name of the range start input(s).
   *
   * default: "start"
   */
  startClass: string;

  /**
   * Class name of the time inputs, if any.
   *
   * default: "time"
   */
  timeClass: string;

  /**
   * A function that takes a jQuery element for a date input and a local
   * time Date object representing the date, and sets the input value.
   *
   * default: function for Bootstrap Datepicker
   */
  updateDate: (input: HTMLInputElement, dateObj: Date | null) => void;

  /**
   * A function that takes a jQuery element for a time input and a local
   * time Date object representing the time, and sets the input value.
   *
   * default: function for jquery-timepicker
   */
  updateTime: (input: HTMLInputElement, dateObj: Date | null) => void;
}

export default class Datepair {
  container: HTMLElement;
  dateDelta: number = 0;
  endDateInput: HTMLInputElement | null;
  endTimeInput: HTMLInputElement | null;
  settings: DatepairOptions;
  startDateInput: HTMLInputElement | null;
  startTimeInput: HTMLInputElement | null;
  timeDelta: number = 0;

  constructor(container: HTMLElement, options: Partial<DatepairOptions> = {}) {
    this.container = container;
    this.settings = { ...defaultOptions(), ...options };

    this.startDateInput = this.container.querySelector(
      '.' + this.settings.startClass + '.' + this.settings.dateClass
    );

    this.endDateInput = this.container.querySelector(
      '.' + this.settings.endClass + '.' + this.settings.dateClass
    );

    this.startTimeInput = this.container.querySelector(
      '.' + this.settings.startClass + '.' + this.settings.timeClass
    );

    this.endTimeInput = this.container.querySelector(
      '.' + this.settings.endClass + '.' + this.settings.timeClass
    );

    // initialize date and time deltas
    this.refresh();

    // init starts here
    this._bindChangeHandler();
  }

  setOptions(options: Partial<DatepairOptions>) {
    this.settings = { ...this.settings, ...options };
    this._updateEndMintime();
  }

  getTimeDiff() {
    // due to the fact that times can wrap around, timeDiff for any
    // time-only pair will always be >= 0
    let delta = this.dateDelta + this.timeDelta;
    if (delta < 0 && (!this.startDateInput || !this.endDateInput)) {
      delta += ONE_DAY;
    }

    return delta;
  }

  refresh() {
    const {
      endDateInput,
      endTimeInput,
      settings,
      startDateInput,
      startTimeInput,
    } = this;

    if (
      startDateInput &&
      startDateInput.value &&
      endDateInput &&
      endDateInput.value
    ) {
      const startDate = settings.parseDate(startDateInput);
      const endDate = settings.parseDate(endDateInput);
      if (startDate && endDate) {
        this.dateDelta = endDate.getTime() - startDate.getTime();
      }
    }

    if (
      startTimeInput &&
      startTimeInput.value &&
      endTimeInput &&
      endTimeInput.value
    ) {
      const startTime = settings.parseTime(startTimeInput);
      const endTime = settings.parseTime(endTimeInput);
      if (startTime && endTime) {
        this.timeDelta = endTime.getTime() - startTime.getTime();
        this._updateEndMintime();
      }
    }
  }

  remove() {
    this._unbindChangeHandler();
  }

  private _bindChangeHandler() {
    $(this.container).on('change.datepair', this.handleEvent as any);
  }

  private _unbindChangeHandler() {
    $(this.container).off('change.datepair');
  }

  // This function will be called when passing 'this' to addEventListener
  private handleEvent = (e: JQuery.EventBase) => {
    // temporarily unbind the change handler to prevent triggering this
    // if we update other inputs
    this._unbindChangeHandler();

    if (hasClass(e.target, this.settings.dateClass)) {
      if (e.target.value != '') {
        this._dateChanged(e.target);
        this._timeChanged(e.target);
      } else {
        this.dateDelta = 0;
      }
    } else if (hasClass(e.target, this.settings.timeClass)) {
      if (e.target.value != '') {
        this._timeChanged(e.target);
      } else {
        this.timeDelta = 0;
      }
    }

    this._validateRanges();
    this._updateEndMintime();
    this._bindChangeHandler();
  };

  private _dateChanged(target: HTMLInputElement) {
    const { endDateInput, startDateInput } = this;
    if (!startDateInput || !endDateInput) {
      return;
    }

    const {
      anchor,
      defaultDateDelta,
      endClass,
      parseDate,
      startClass,
      updateDate,
    } = this.settings;

    const startDate = parseDate(startDateInput);
    const endDate = parseDate(endDateInput);

    if (!startDate || !endDate) {
      if (defaultDateDelta !== null) {
        if (startDate) {
          updateDate(
            endDateInput,
            new Date(startDate.getTime() + defaultDateDelta * ONE_DAY)
          );
        } else if (endDate) {
          updateDate(
            startDateInput,
            new Date(endDate.getTime() - defaultDateDelta * ONE_DAY)
          );
        }

        this.dateDelta = defaultDateDelta * ONE_DAY;
      } else {
        this.dateDelta = 0;
      }

      return;
    }

    if (anchor == 'start' && hasClass(target, startClass)) {
      updateDate(endDateInput, new Date(startDate.getTime() + this.dateDelta));
    } else if (anchor == 'end' && hasClass(target, endClass)) {
      updateDate(startDateInput, new Date(endDate.getTime() - this.dateDelta));
    } else {
      if (endDate < startDate) {
        const otherInput = hasClass(target, startClass)
          ? endDateInput
          : startDateInput;

        this.dateDelta = 0;
        updateDate(otherInput, parseDate(target));
      } else {
        this.dateDelta = endDate.getTime() - startDate.getTime();
      }
    }
  }

  private _timeChanged(target: HTMLInputElement) {
    const { endDateInput, endTimeInput, startDateInput, startTimeInput } = this;
    if (!startTimeInput || !endTimeInput) {
      return;
    }

    const {
      anchor,
      defaultTimeDelta,
      endClass,
      parseTime,
      startClass,
      updateTime,
    } = this.settings;

    let startTime = parseTime(startTimeInput);
    let endTime = parseTime(endTimeInput);

    if (!startTime || !endTime) {
      if (defaultTimeDelta !== null) {
        this.timeDelta = defaultTimeDelta;

        if (startTime) {
          endTime = this._setTimeAndReturn(
            endTimeInput,
            new Date(startTime.getTime() + defaultTimeDelta)
          );
          this._doMidnightRollover(startTime, endTime);
        } else if (endTime) {
          startTime = this._setTimeAndReturn(
            startTimeInput,
            new Date(endTime.getTime() - defaultTimeDelta)
          );
          this._doMidnightRollover(startTime, endTime);
        }
      } else {
        this.timeDelta = 0;
      }

      return;
    }

    if (anchor == 'start' && hasClass(target, startClass)) {
      endTime = this._setTimeAndReturn(
        endTimeInput,
        new Date(startTime.getTime() + this.timeDelta)
      );
      this._doMidnightRollover(startTime, endTime);
    } else if (anchor == 'end' && hasClass(target, endClass)) {
      startTime = this._setTimeAndReturn(
        startTimeInput,
        new Date(endTime.getTime() - this.timeDelta)
      );
      this._doMidnightRollover(startTime, endTime);
    } else {
      this._doMidnightRollover(startTime, endTime);

      var startDate, endDate;
      if (startDateInput && endDateInput) {
        startDate = this.settings.parseDate(startDateInput);
        endDate = this.settings.parseDate(endDateInput);
      }

      if (startDate == endDate && endTime < startTime) {
        const thisInput = hasClass(target, endClass)
          ? endTimeInput
          : startTimeInput;
        const otherInput = hasClass(target, startClass)
          ? endTimeInput
          : startTimeInput;

        const selectedTime = parseTime(thisInput);
        this.timeDelta = 0;
        updateTime(otherInput, selectedTime);
      } else {
        this.timeDelta = endTime.getTime() - startTime.getTime();
      }
    }
  }

  private _setTimeAndReturn(input: HTMLInputElement, newTime: Date): Date {
    this.settings.updateTime(input, newTime);
    return this.settings.parseTime(input) || newTime;
  }

  private _doMidnightRollover(startTime: Date, endTime: Date) {
    const { dateDelta, endDateInput, startDateInput, timeDelta } = this;
    if (!startDateInput || !endDateInput) {
      return;
    }

    const { anchor, parseDate, updateDate } = this.settings;

    const endDate = parseDate(endDateInput);
    const startDate = parseDate(startDateInput);
    const newDelta = endTime.getTime() - startTime.getTime();
    const offset = endTime < startTime ? ONE_DAY : -1 * ONE_DAY;

    if (
      dateDelta !== null &&
      dateDelta + timeDelta <= ONE_DAY &&
      dateDelta + newDelta != 0 &&
      (offset > 0 || dateDelta != 0) &&
      ((newDelta >= 0 && timeDelta < 0) || (newDelta < 0 && timeDelta >= 0))
    ) {
      if (anchor == 'start' && endDate) {
        updateDate(endDateInput, new Date(endDate.getTime() + offset));
        this._dateChanged(endDateInput);
      } else if (anchor == 'end' && startDate) {
        updateDate(startDateInput, new Date(startDate.getTime() - offset));
        this._dateChanged(startDateInput);
      }
    }

    this.timeDelta = newDelta;
  }

  private _updateEndMintime() {
    const { dateDelta, endTimeInput, startTimeInput, timeDelta } = this;
    const { anchor, parseTime, setMinTime } = this.settings;
    if (!endTimeInput || !setMinTime || !startTimeInput) {
      return;
    }

    let baseTime: Date | null = null;
    if (
      anchor == 'start' &&
      (!dateDelta ||
        dateDelta < ONE_DAY ||
        (timeDelta && dateDelta + timeDelta < ONE_DAY))
    ) {
      baseTime = parseTime(startTimeInput);
    }

    setMinTime(endTimeInput, baseTime);
  }

  private _validateRanges() {
    if (this.startTimeInput && this.endTimeInput && this.timeDelta === null) {
      triggerSimpleCustomEvent(this.container, 'rangeIncomplete');
      return;
    }

    if (this.startDateInput && this.endDateInput && this.dateDelta === null) {
      triggerSimpleCustomEvent(this.container, 'rangeIncomplete');
      return;
    }

    // due to the fact that times can wrap around, any time-only pair will be considered valid
    if (
      !this.startDateInput ||
      !this.endDateInput ||
      this.dateDelta + this.timeDelta >= 0
    ) {
      triggerSimpleCustomEvent(this.container, 'rangeSelected');
    } else {
      triggerSimpleCustomEvent(this.container, 'rangeError');
    }
  }
}
