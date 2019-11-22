import Field from './Field';
import Map from './Map';

(global => {
  global.CalendarField = {
    ...(global.CalendarField || {}),
    Field,
    Map,
  };
})(window as any);
