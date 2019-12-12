import Calendar from './Application';

(global => {
  global.CalendarField = {
    ...(global.CalendarField || {}),
    Calendar,
  };
})(window as any);
