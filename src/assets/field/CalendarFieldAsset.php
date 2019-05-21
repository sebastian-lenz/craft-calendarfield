<?php

namespace lenz\calendarfield\assets\field;

use craft\web\AssetBundle;
use craft\web\assets\cp\CpAsset;

/**
 * Class CalendarFieldAsset
 */
class CalendarFieldAsset extends AssetBundle
{
  /**
   * @return void
   */
  public function init() {
    $this->sourcePath = __DIR__ . '/resources';
    $this->depends = [ CpAsset::class ];

    $this->js = [
      'vendor/leaflet/leaflet.js',
      'vendor/leaflet-geocoder/leaflet-geocoder.js',
      'calendar-field.js',
    ];

    $this->css = [
      'vendor/leaflet/leaflet.css',
      'vendor/leaflet-geocoder/leaflet-geocoder.css',
      'calendar-field.css',
    ];

    parent::init();
  }
}
