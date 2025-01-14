import { Component, Element, Event, EventEmitter, h, Host, JSX, Prop } from '@stencil/core';
import {
  AllowedTypes,
  attachComponentCss,
  getPrefixedTagNames,
  hasNamedSlot,
  THEMES,
  validateProps,
} from '../../../utils';
import type { PropTypes, Theme } from '../../../types';
import { getComponentCss } from './table-styles';
import type { TableChangeEvent } from './table-utils';
import { SORT_EVENT_NAME, warnIfCaptionIsUndefined } from './table-utils';

const propTypes: PropTypes<typeof Table> = {
  caption: AllowedTypes.string,
  theme: AllowedTypes.oneOf<Theme>(THEMES),
};

@Component({
  tag: 'p-table',
  shadow: true,
})
export class Table {
  @Element() public host!: HTMLElement;

  /** A caption describing the contents of the table for accessibility only. This won't be visible in the browser.
   * Use an element with an attribute of `slot="caption"` for a visible caption. */
  @Prop() public caption?: string;

  /** Adapts the color when used on dark background. */
  @Prop() public theme?: Theme = 'light';

  /**
   * @deprecated since v3.0.0, will be removed with next major release, use `change` event instead.
   * Emitted when sorting is changed. */
  @Event({ bubbles: false }) public sortingChange: EventEmitter<TableChangeEvent>;

  /** Emitted when sorting is changed. */
  @Event({ bubbles: false }) public change: EventEmitter<TableChangeEvent>;

  public componentWillLoad(): void {
    warnIfCaptionIsUndefined(this.host, this.caption);
    this.host.shadowRoot.addEventListener(SORT_EVENT_NAME, (e: CustomEvent<TableChangeEvent>) => {
      e.stopPropagation();
      this.change.emit(e.detail);
      this.sortingChange.emit(e.detail);
    });
  }

  public render(): JSX.Element {
    validateProps(this, propTypes);
    attachComponentCss(this.host, getComponentCss, this.theme);

    const PrefixedTagNames = getPrefixedTagNames(this.host);
    const hasSlottedCaption = hasNamedSlot(this.host, 'caption');
    const captionId = 'caption';
    const tableAttr = this.caption
      ? { 'aria-label': this.caption }
      : hasSlottedCaption && { 'aria-labelledby': captionId };

    return (
      <Host>
        {hasSlottedCaption && (
          <div id={captionId} class="caption">
            <slot name="caption" />
          </div>
        )}

        <PrefixedTagNames.pScroller scrollbar={true} theme={this.theme}>
          <div class="table" role="table" {...tableAttr}>
            <slot />
          </div>
        </PrefixedTagNames.pScroller>
      </Host>
    );
  }
}
