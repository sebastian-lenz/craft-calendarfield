interface Menu extends Garnish.Base {
  $options: JQuery;
}

interface MenuButtonData {
  menu: Menu;
}

interface JQuery {
  data(arg1: 'menubtn'): MenuButtonData;

  datepicker(arg1: 'getDate'): Date | null;
  datepicker(arg1: 'setDate', arg2: Date | null): void;

  menubtn(): JQuery;

  timepicker(arg1: 'getTime'): Date | null;
  timepicker(arg1: 'setTime', arg2: Date | null): void;
  timepicker(arg1: 'option', arg2: 'minTime', arg3: Date | null): void;
}
