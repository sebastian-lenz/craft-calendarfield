const storageKey = 'BaseElementIndex.siteId';

export interface SiteChangeHandler {
  (siteId: number): void;
}

export interface SiteMenuOptions {
  $button: JQuery;
  menu: Menu;
  onChange: SiteChangeHandler;
}

export default class SiteMenu {
  $button: JQuery;
  onChange: SiteChangeHandler;
  menu: Menu;
  siteId: number | null;

  constructor({ $button, menu, onChange }: SiteMenuOptions) {
    this.$button = $button;
    this.onChange = onChange;
    this.menu = menu;

    menu.on('optionselect', this.handleSiteChange);

    this.siteId = this.getInitialSiteId();
  }

  getDefaultSiteId(): number | null {
    const { menu } = this;
    let $option = menu.$options.filter('.sel:first');
    if (!$option.length) {
      $option = menu.$options.first();
    }

    return $option.length ? parseInt($option.data('site-id')) : null;
  }

  getInitialSiteId() {
    const siteId = this.getDefaultSiteId();
    const storedSiteId = Craft.getLocalStorage(storageKey);

    if (storedSiteId && storedSiteId != siteId) {
      this.selectSiteId(storedSiteId);
      return storedSiteId;
    }

    return siteId;
  }

  handleSiteChange = (ev: any) => {
    const { $button, menu } = this;
    const $option = $(ev.selectedOption).addClass('sel');
    menu.$options.removeClass('sel');
    $button.html($option.html());

    const siteId = parseInt($option.data('site-id'));
    this.setSite(siteId);
  };

  selectSiteId(siteId: number) {
    const { menu } = this;
    const $storedSiteOption = menu.$options.filter(
      `[data-site-id="${siteId}"]:first`
    );

    if ($storedSiteOption.length) {
      $storedSiteOption.trigger('click');
    }
  }

  setSite(siteId: number) {
    Craft.setLocalStorage(storageKey, siteId);
    this.siteId = siteId;

    this.onChange(siteId);
  }

  static tryCreate(onChange: SiteChangeHandler): SiteMenu | null {
    const $button = $('#main-container .sitemenubtn:first');
    if (!$button.length) {
      return null;
    }

    const { menu } = $button.menubtn().data('menubtn');
    if (!menu) {
      return null;
    }

    return new SiteMenu({ $button, menu, onChange });
  }
}
