import DatePair from './DatePair';

import './index.styl';
import './index-rrule.styl';

export interface FieldSettings {
  container: HTMLElement;
}

export default class Field {
  $container: JQuery;
  $dateAllDay: JQuery;

  constructor(settings: any) {
    const $container = $(settings.container);
    this.$container = $container;
    this.$dateAllDay = $container.find(settings.dateAllDay);

    if ($container.data('ICalField.Date')) {
      return;
    } else {
      $container.data('ICalField.Date', this);
    }

    this.createSelectToggles();
    this.createDatePair();
    this.updateState();

    if (!settings.disabled) {
      var that = this;
      this.$dateAllDay.parent().on('click', () => {
        that.updateState();
      });
    }
  }

  createDatePair() {
    const $wrapper = this.$container.find('.calendarfield--dateCommon');
    if (!$wrapper.length) {
      return;
    }

    $wrapper
      .find('.datewrapper > input, .timewrapper > input')
      .each((index, element) => {
        const name = element.getAttribute('name') || '';
        const match = /\[(?:date(End|Start))\]\[(date|time)\]/.exec(name);
        if (match) {
          element.classList.add(
            `${match[1]}`.toLowerCase(),
            `${match[2]}`.toLowerCase()
          );
        }
      });

    $wrapper.each((_, el) => { new DatePair(el) });
  }

  createSelectToggles() {
    const $toggles = this.$container.find('.calendarfield--selectToggle');
    $toggles.each(function(index, element) {
      const $element = $(element);
      const $select = $element.find('select');
      const $scope = $element.closest('.calendarfield--toggleScope');
      let toggleValue = $select.val() + '';

      $select.on('click change', function() {
        const newToggleValue = $select.val() + '';
        if (newToggleValue !== toggleValue) {
          $scope.removeClass(toggleValue).addClass(newToggleValue);
          toggleValue = newToggleValue;
        }
      });
    });
  }

  isAllDay() {
    return !!this.$dateAllDay.val();
  }

  updateState() {
    this.$container.find('.timewrapper').toggle(!this.isAllDay());
  }
}
