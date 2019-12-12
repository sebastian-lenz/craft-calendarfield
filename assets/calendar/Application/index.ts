import {
  Calendar,
  OptionsInput,
  EventApi,
  View,
  Duration,
} from '@fullcalendar/core';

import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import luxonPlugin from '@fullcalendar/luxon';
import { EventSourceInput } from '@fullcalendar/core/structs/event-source';

import SiteMenu from './SiteMenu';

import './index.styl';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';

const dateStorageKey = 'CalendarField.Calendar.defaultDate';

export interface ApplicationOptions {
  eventsUrl: string;
  input: OptionsInput;
  sources: Array<any>;
  updateUrl: string;
}

export interface ExtendedProps {
  editUrl: string;
  eventId: number;
}

export interface EventChangeArguments {
  event: EventApi;
  revert: () => void;
}

export interface EventClickArguments {
  event: EventApi;
}

export default class Application {
  calendar: Calendar;
  element: HTMLElement;
  options: ApplicationOptions;
  siteMenu: SiteMenu | null;

  constructor(element: string | HTMLElement, options: ApplicationOptions) {
    if (typeof element == 'string') {
      element = document.querySelector(element) as HTMLElement;
    }

    this.element = element;
    this.options = options;
    this.siteMenu = this.initSiteMenu();
    this.calendar = this.initCalendar(options);

    this.update();
  }

  initCalendar({ input }: ApplicationOptions) {
    const { element } = this;
    const calendar = new Calendar(element, {
      ...input,
      datesRender: this.handleDatesRender,
      defaultDate: this.getDefaultDate(),
      editable: true,
      eventClick: this.handleEventClick,
      eventDrop: this.handleEventChange,
      eventResize: this.handleEventChange,
      height: 'parent',
      plugins: [dayGridPlugin, interactionPlugin, luxonPlugin],
    });

    calendar.render();
    return calendar;
  }

  getDefaultDate(): Date {
    let defaultDate = Craft.getLocalStorage(dateStorageKey);
    if (!defaultDate) {
      defaultDate = new Date();
    }

    return defaultDate;
  }

  getEventSource(): EventSourceInput {
    const { siteMenu } = this;
    const { eventsUrl } = this.options;
    const extraParams: any = {};

    if (siteMenu) {
      extraParams.siteId = siteMenu.siteId;
    }

    return {
      url: Craft.getActionUrl('calendarfield/calendar/fetch-events'),
      extraParams,
    };
  }

  handleDatesRender = () => {
    const { calendar } = this;
    if (calendar) {
      Craft.setLocalStorage(dateStorageKey, calendar.getDate());
    }
  };

  handleEventClick = ({ event }: EventClickArguments) => {
    const { editUrl } = event.extendedProps as ExtendedProps;
    if (editUrl) {
      window.location.assign(editUrl);
    }
  };

  handleEventChange = ({ event, revert }: EventChangeArguments) => {
    const { eventId } = event.extendedProps as ExtendedProps;
    let { allDay, end, start } = event;

    if (allDay && !end) end = start;
    if (!end || !start) return revert();
    const attributes = {
      dateStart: start.toISOString(),
      dateEnd: end.toISOString(),
    };

    Craft.postActionRequest(
      'calendarfield/calendar/update-event',
      { eventId, attributes },
      result => {
        if (result === null) {
          revert();
        } else {
          this.calendar.refetchEvents();
        }
      }
    );
  };

  initSiteMenu() {
    return SiteMenu.tryCreate(this.update);
  }

  update = () => {
    const { calendar } = this;
    if (!calendar) return;

    calendar.removeAllEventSources();
    calendar.addEventSource(this.getEventSource());
  };
}
