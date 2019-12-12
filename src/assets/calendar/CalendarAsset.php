<?php

namespace lenz\calendarfield\assets\calendar;

use craft\web\AssetBundle;
use craft\web\assets\cp\CpAsset;

/**
 * Class CalendarAsset
 */
class CalendarAsset extends AssetBundle
{
  /**
   * @return void
   */
  public function init() {
    $this->sourcePath = __DIR__ . '/resources';
    $this->depends = [ CpAsset::class ];

    $this->js = [
      'bundle.js',
    ];

    $this->css = [
      'bundle.css',
    ];

    parent::init();
  }
}
