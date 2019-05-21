var CalendarField = CalendarField ? CalendarField : {};

CalendarField.Field = Garnish.Base.extend({
  $container: null,
  $dateAllDay: null,

  init: function(settings) {
    var $container = $(settings.container);
    if ($container.data('ICalField.Date')) {
      return;
    } else {
      $container.data('ICalField.Date', this);
    }

    this.$container = $container;
    this.$dateAllDay = $container.find(settings.dateAllDay);

    this._createSelectToggles();
    this._updateState();

    if (!settings.disabled) {
      var that = this;
      this.$dateAllDay.parent().on('click', function() {
        that._updateState();
      })
    }
  },

  _isAllDay: function() {
    return !!this.$dateAllDay.val();
  },

  _createSelectToggles: function() {
    var $toggles = this.$container.find('.calendarfield--selectToggle');
    $toggles.each(function(index, element) {
      var $element = $(element);
      var $select = $element.find('select');
      var $scope = $element.closest('.calendarfield--toggleScope');
      var toggleValue = $select.val();

      $select.on('click change', function() {
        var newToggleValue = $select.val();
        if (newToggleValue !== toggleValue) {
          $scope.removeClass(toggleValue).addClass(newToggleValue);
          toggleValue = newToggleValue;
        }
      });
    });
  },

  _updateState() {
    this.$container.find('.timewrapper').toggle(!this._isAllDay());
  }
});

CalendarField.Map = Garnish.Base.extend({
  $container: null,
  $enabled: null,
  $latitude: null,
  $longitude: null,
  $viewport: null,

  disabled: false,
  initialLatitude: 51.5,
  initialLongitude: -0.09,
  initialZoom: 16,
  latitude: 0,
  longitude: 0,
  map: null,
  marker: null,

  init: function(settings) {
    var $container = $(settings.container);
    if ($container.data('ICalField.Map')) {
      return;
    } else {
      $container.data('ICalField.Map', this);
    }

    this.$container = $container;
    this.$latitude = $container.find(settings.latitude);
    this.$longitude = $container.find(settings.longitude);
    this.$enabled = $container.find(settings.enabled);
    this.$viewport = $container.find('.calendarfield--mapViewport');

    this.disabled = !!settings.disabled;
    this.latitude = parseFloat(this.$latitude.val());
    this.longitude = parseFloat(this.$longitude.val());

    var initialLatitude = parseFloat(settings.initialLatitude);
    var initialLongitude = parseFloat(settings.initialLongitude);
    if (!isNaN(initialLatitude) && !isNaN(initialLongitude)) {
      this.initialLatitude = initialLatitude;
      this.initialLongitude = initialLongitude;
    }

    if (!isNaN(this.latitude) && !isNaN(this.latitude)) {
      this.$enabled.prop('checked', true);
      this._updateState();
    }

    var that = this;
    this.$enabled.parent().on('click', function() {
      that._updateState();
    });
  },

  _createMap: function() {
    if (!this.map) {
      var that = this;
      var plugin = this.$container.find('.calendarfield--mapPlugin').get(0);
      var map = L.map(plugin);
      map.setView(this._getLatLng(), this.initialZoom);

      L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png', {
        attribution: '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>',
        minZoom: 1,
        maxZoom: 19
      }).addTo(map);

      var marker = L.marker(this._getLatLng(), {
        draggable: !this.disabled,
      }).addTo(map);

      marker.on('dragend', function(event) {
        that._onMarkerDragEnd(event);
      });

      L.Control.geocoder({
        defaultMarkGeocode: false
      }).on('markgeocode', function(event) {
        that._onMarkGeoCode(event);
      }).addTo(map);

      Garnish.$win.on('resize', function() {
        map.invalidateSize();
      });

      this.map = map;
      this.marker = marker;
    }
  },

  _getLatLng: function() {
    var latitude = isNaN(this.latitude)
      ? this.initialLatitude
      : this.latitude;

    var longitude = isNaN(this.longitude)
      ? this.initialLongitude
      : this.longitude;

    return [latitude, longitude];
  },

  _isEnabled: function() {
    return this.$enabled.prop('checked');
  },

  _onMarkerDragEnd: function(event){
    if (this._isEnabled()) {
      var position = event.target.getLatLng();
      this.$latitude.val(position.lat);
      this.$longitude.val(position.lng);
    }
  },

  _onMarkGeoCode: function(event) {
    if (this._isEnabled()) {
      var latLng = event.geocode.center;
      this.marker.setLatLng(latLng);
      this.map.setView(latLng, this.initialZoom);
      this.$latitude.val(latLng.lat);
      this.$longitude.val(latLng.lng);
    }
  },

  _updateState: function() {
    if (this._isEnabled()) {
      var latLng = this._getLatLng();
      this.$latitude.val(latLng[0]);
      this.$longitude.val(latLng[1]);
      this.$viewport.addClass('isVisible');
      this._createMap();
    } else {
      this.$latitude.val('');
      this.$longitude.val('');
      this.$viewport.removeClass('isVisible');
    }
  },
});
