import * as L from 'leaflet';

import './index.styl';

export interface MapSettings {
  container: HTMLElement;
  disabled: boolean;
  initialLatitude: string;
  initialLongitude: string;
  latitude: string;
  longitude: string;
  enabled: string;
}

export default class Map {
  $container: JQuery;
  $enabled: JQuery;
  $latitude: JQuery;
  $longitude: JQuery;
  $viewport: JQuery;

  disabled: boolean = false;
  initialLatitude: number = 51.5;
  initialLongitude: number = -0.09;
  initialZoom: number = 16;
  latitude: number = 0;
  longitude: number = 0;
  map: L.Map | null = null;
  marker: L.Marker | null = null;

  constructor(settings: MapSettings) {
    const $container = $(settings.container);
    this.$container = $container;
    this.$latitude = $container.find(settings.latitude);
    this.$longitude = $container.find(settings.longitude);
    this.$enabled = $container.find(settings.enabled);
    this.$viewport = $container.find('.calendarfield--mapViewport');

    if ($container.data('ICalField.Map')) {
      return;
    } else {
      $container.data('ICalField.Map', this);
    }

    this.disabled = !!settings.disabled;
    this.latitude = parseFloat(this.$latitude.val() + '');
    this.longitude = parseFloat(this.$longitude.val() + '');

    const initialLatitude = parseFloat(settings.initialLatitude);
    const initialLongitude = parseFloat(settings.initialLongitude);
    if (!isNaN(initialLatitude) && !isNaN(initialLongitude)) {
      this.initialLatitude = initialLatitude;
      this.initialLongitude = initialLongitude;
    }

    if (!isNaN(this.latitude) && !isNaN(this.latitude)) {
      this.$enabled.prop('checked', true);
      this.updateState();
    }

    var that = this;
    this.$enabled.parent().on('click', function() {
      that.updateState();
    });
  }

  createMap() {
    if (!this.map) {
      const plugin = this.$container.find('.calendarfield--mapPlugin').get(0);
      const map = L.map(plugin);
      map.setView(this.getLatLng(), this.initialZoom);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        minZoom: 1,
        maxZoom: 19,
      }).addTo(map);

      const marker = L.marker(this.getLatLng(), {
        draggable: !this.disabled,
      }).addTo(map);

      marker.on('dragend', this.onMarkerDragEnd);

      (L.Control as any)
        .geocoder({
          defaultMarkGeocode: false,
        })
        .on('markgeocode', this.onMarkGeoCode)
        .addTo(map);

      Garnish.$win.on('resize', function() {
        map.invalidateSize();
      });

      this.map = map;
      this.marker = marker;
    }
  }

  getLatLng(): L.LatLngTuple {
    const latitude = isNaN(this.latitude)
      ? this.initialLatitude
      : this.latitude;

    const longitude = isNaN(this.longitude)
      ? this.initialLongitude
      : this.longitude;

    return [latitude, longitude];
  }

  isEnabled(): boolean {
    return this.$enabled.prop('checked');
  }

  onMarkerDragEnd = (event: L.DragEndEvent) => {
    if (this.isEnabled()) {
      const position = event.target.getLatLng();

      this.$latitude.val(position.lat);
      this.$longitude.val(position.lng);
    }
  };

  onMarkGeoCode = (event: any) => {
    const { $latitude, $longitude, map, marker } = this;
    if (this.isEnabled() && map && marker) {
      const latLng = event.geocode.center;

      marker.setLatLng(latLng);
      map.setView(latLng, this.initialZoom);
      $latitude.val(latLng.lat);
      $longitude.val(latLng.lng);
    }
  };

  updateState() {
    if (this.isEnabled()) {
      const latLng = this.getLatLng();
      this.$latitude.val(latLng[0]);
      this.$longitude.val(latLng[1]);
      this.$viewport.addClass('isVisible');
      this.createMap();
    } else {
      this.$latitude.val('');
      this.$longitude.val('');
      this.$viewport.removeClass('isVisible');
    }
  }
}
