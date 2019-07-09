/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  BreakpointCustomizable,
} from './utils';
import {
  Components,
} from './index';
import {
  PaginationItemType,
} from './components/navigation/pagination/pagination-helper';

export namespace Components {
  interface PButtonIcon {
    /**
    * Disables the button. No events will be triggered while disabled state is active.
    */
    'disabled'?: boolean;
    /**
    * When providing an url then the component will be rendered as `<a>` instead of `<button>` tag.
    */
    'href'?: string;
    /**
    * The icon shown.
    */
    'icon'?: string;
    /**
    * A visually hidden label text to improve accessibility which describes the function behind the button.
    */
    'label'?: string;
    /**
    * Disables the button and shows a loading indicator. No events will be triggered while loading state is active.
    */
    'loading'?: boolean;
    /**
    * Adapts the button color when used on dark background.
    */
    'theme'?: 'light' | 'dark';
    /**
    * Specifies the type of the button when no href prop is defined.
    */
    'type'?: 'button' | 'submit' | 'reset';
    /**
    * The style variant of the button.
    */
    'variant'?: 'ghost' | 'transparent' | 'default';
  }
  interface PButtonRegular {
    /**
    * Disables the button. No events will be triggered while disabled state is active.
    */
    'disabled'?: boolean;
    /**
    * When providing an url then the component will be rendered as `<a>` instead of `<button>` tag.
    */
    'href'?: string;
    /**
    * The icon shown next to the label.
    */
    'icon'?: string;
    /**
    * Disables the button and shows a loading indicator. No events will be triggered while loading state is active.
    */
    'loading'?: boolean;
    /**
    * Displays the button smaller.
    */
    'small'?: boolean;
    /**
    * Adapts the button color when used on dark background.
    */
    'theme'?: 'light' | 'dark';
    /**
    * Specifies the type of the button when no href prop is defined.
    */
    'type'?: 'button' | 'submit' | 'reset';
    /**
    * The style variant of the button.
    */
    'variant'?: 'highlight' | 'ghost' | 'default';
  }
  interface PCheckbox {
    'checked'?: boolean;
    'disabled'?: boolean;
    'error'?: boolean;
    'name'?: string;
    'value'?: string;
  }
  interface PColor {
    'colors'?: | 'porsche-black'
    | 'porsche-light'
    | 'porsche-dark'
    | 'porsche-red'
    | 'porsche-dark-red'
    | 'surface-light'
    | 'surface-dark'
    | 'neutral-grey-1'
    | 'neutral-grey-2'
    | 'neutral-grey-3'
    | 'neutral-grey-4'
    | 'neutral-grey-5'
    | 'neutral-grey-6'
    | 'neutral-grey-7'
    | 'neutral-grey-8'
    | 'status-red'
    | 'status-green'
    | 'status-yellow'
    | 'state-focus';
    'text'?: | 'porsche-black'
    | 'porsche-light'
    | 'porsche-red'
    | 'neutral-grey-1'
    | 'neutral-grey-2'
    | 'neutral-grey-3'
    | 'neutral-grey-4'
    | 'neutral-grey-5'
    | 'neutral-grey-6'
    | 'neutral-grey-7'
    | 'neutral-grey-8'
    | 'inherit';
  }
  interface PFlex {
    /**
    * This aligns a flex container's individual lines when there is extra space in the cross-axis, similar to how "justifyContent" aligns individual items along the main axis. Corresponds to the "alignContent" css property.
    */
    'alignContent'?: BreakpointCustomizable<
    'stretch' | 'start' | 'end' | 'center' | 'space-between' | 'space-around'
    > &
    string;
    /**
    * Defines how the flex items are aligned along the cross axis.
    */
    'alignItems'?: BreakpointCustomizable<'stretch' | 'start' | 'end' | 'center' | 'baseline'> & string;
    /**
    * Defines the direction of the main and cross axis. The default "row" defines the main axis as horizontal left to right.
    */
    'direction'?: BreakpointCustomizable<'row' | 'row-reverse' | 'column' | 'column-reverse'> & string;
    /**
    * Defines the flex containers content flow if 2 or more containers are siblings of each other.
    */
    'flow'?: BreakpointCustomizable<'block' | 'inline'> & string;
    /**
    * Defines the gap between contained children.
    */
    'gap'?: | '0'
    | '4'
    | '8'
    | '16'
    | '24'
    | '32'
    | '40'
    | '48'
    | '56'
    | '64'
    | '72'
    | '80'
    | 'a'
    | 'b'
    | 'c'
    | 'd'
    | 'e'
    | 'f'
    | 'g';
    /**
    * Defines how the flex items are aligned along the main axis.
    */
    'justifyContent'?: BreakpointCustomizable<
    'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
    > &
    string;
    /**
    * If set, overflowing elements will wrap to a new line.
    */
    'wrap'?: BreakpointCustomizable<'nowrap' | 'wrap' | 'reverse'> & string;
  }
  interface PFlexItem {
    /**
    * Defines how this flex item is aligned along the cross axis. This overwrites the cross axis alignment set by the container. Corresponds to the "alignSelf" css property.
    */
    'alignSelf'?: BreakpointCustomizable<'auto' | 'start' | 'end' | 'center' | 'baseline' | 'stretch'> & string;
    /**
    * The shorthand property for the combined definition of "shrink", "grow" and "basis"
    */
    'flex'?: BreakpointCustomizable<'initial' | 'auto' | 'none' | 'equal'> & string;
    /**
    * The ability to allow/disallow the flex child to grow.
    */
    'grow'?: BreakpointCustomizable<'0' | '1'> & string;
    /**
    * The offset of the column. You can also supply values for specific breakpoints, like {base: "none", l: "one-quarter"}. You always need to provide a base value when doing this.
    */
    'offset'?: BreakpointCustomizable<
    'none' | 'one-quarter' | 'one-third' | 'half' | 'two-thirds' | 'three-quarters'
    > &
    string;
    /**
    * The ability to allow/disallow the flex child to shrink.
    */
    'shrink'?: BreakpointCustomizable<'1' | '0'> & string;
    /**
    * The width of the flex item. You can also supply values for specific breakpoints, like {base: "full", l: "one-quarter"}. You always need to provide a base value when doing this.
    */
    'width'?: BreakpointCustomizable<
    'auto' | 'one-quarter' | 'one-third' | 'half' | 'two-thirds' | 'three-quarters' | 'full'
    > &
    string;
  }
  interface PGrid {
    /**
    * Defines the direction of the main and cross axis. The default "row" defines the main axis as horizontal left to right. Also defines the direction for specific breakpoints, like {"base": "column", "l": "row"}. You always need to provide a base value when doing this.
    */
    'direction'?: BreakpointCustomizable<'row' | 'row-reverse' | 'column' | 'column-reverse'> & string;
    /**
    * Defines the gap between contained children. The value "normal" (default) sets responsive grid spacings that should be used together with Grid.Child. Also defines the gap for specific breakpoints, like {"base": "zero", "l": "normal"}. You always need to provide a base value when doing this.
    */
    'gap'?: BreakpointCustomizable<'normal' | 'zero'> & string;
  }
  interface PGridChild {
    /**
    * The offset of the column. Can be between 0 and 11. Also defines the offset of the column for specific breakpoints, like {"base": 6, "l": 3}. You always need to provide a base value when doing this.
    */
    'offset'?: BreakpointCustomizable<'0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11'> &
    string;
    /**
    * The size of the column. Can be between 1 and 12. Also defines the size of the column for specific breakpoints, like {"base": 6, "l": 3}. You always need to provide a base value when doing this.
    */
    'size'?: BreakpointCustomizable<'1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'> &
    string;
  }
  interface PHeadline {
    /**
    * The text alignment of the component.
    */
    'align'?: 'left' | 'center' | 'right';
    /**
    * Adds an ellipsis to a single line of text if it overflows.
    */
    'ellipsis'?: boolean;
    /**
    * Headline level/hierarchy.
    */
    'level'?: '1' | '2' | '3' | '4' | '5' | '6';
    /**
    * Adapts the text color when used on dark background.
    */
    'theme'?: 'light' | 'dark';
    /**
    * The style of the text.
    */
    'type'?: | 'large-title'
    | 'headline-1'
    | 'headline-2'
    | 'headline-3'
    | 'headline-4'
    | 'headline-5'
    | 'headline-6';
    /**
    * Wraps the text, even when it has to break a word.
    */
    'wrap'?: boolean;
  }
  interface PIcon {
    /**
    * Specifies the label to use for accessibility. Defaults to the icon name.
    */
    'ariaLabel'?: string;
    /**
    * Basic color variations.
    */
    'color'?: Components.PColor['text'];
    /**
    * If enabled, ion-icon will be loaded lazily when it's visible in the viewport. Default, `false`.
    */
    'lazy'?: boolean;
    /**
    * The size of the icon.
    */
    'size'?: 'small' | 'medium' | 'large' | 'inherit';
    /**
    * Specifies which icon to use.
    */
    'source': string;
  }
  interface PInput {
    'disabled'?: boolean;
    'error'?: boolean;
    'icon'?: string;
    'label'?: string;
    'name'?: string;
    'type'?: 'text' | 'password' | 'date' | 'time' | 'number' | string;
    'value'?: string;
  }
  interface PPagination {
    /**
    * Index of the currently active page.
    */
    'activePage'?: number;
    /**
    * The total count of items which should be shown per page.
    */
    'itemsPerPage': number;
    /**
    * Aria label what the pagination is used for.
    */
    'label'?: string;
    /**
    * Aria label for next page icon.
    */
    'labelNext'?: string;
    /**
    * Aria label for page navigation.
    */
    'labelPage'?: string;
    /**
    * Aria label for previous page icon.
    */
    'labelPrev'?: string;
    /**
    * The number of pages between ellipsis. 0 = mobile | 1 = desktop
    */
    'pageRange'?: 0 | 1;
    /**
    * Adapts the color when used on dark background.
    */
    'theme'?: 'light' | 'dark';
    /**
    * The total count of items.
    */
    'totalItemsCount': number;
    'type': PaginationItemType;
  }
  interface PRadio {
    'checked'?: boolean;
    'disabled'?: boolean;
    'error'?: boolean;
    'name'?: string;
    'value'?: string;
  }
  interface PSelect {
    'label'?: string;
    'name'?: string;
    'value'?: string;
  }
  interface PSpinner {
    /**
    * Predefined spinner sizes.
    */
    'size'?: 'x-small' | 'small' | 'medium' | 'large';
    /**
    * Adapts the spinner color when used on dark background.
    */
    'theme'?: 'light' | 'dark';
  }
  interface PSwitch {
    'checked'?: boolean;
    'disabled'?: boolean;
    'name'?: string;
    'value'?: string;
  }
  interface PText {
    /**
    * The text alignment of the component.
    */
    'align'?: 'left' | 'center' | 'right';
    /**
    * Basic text color variations.
    */
    'color'?: Components.PColor['text'];
    /**
    * Adds an ellipsis to a single line of text if it overflows.
    */
    'ellipsis'?: boolean;
    /**
    * Sets the text as display: inline.
    */
    'inline'?: boolean;
    /**
    * Set a custom HTML tag depending of the usage of the text component.
    */
    'tag'?: | 'p'
    | 'span'
    | 'div'
    | 'label'
    | 'address'
    | 'blockquote'
    | 'figcaption'
    | 'a'
    | 'cite'
    | 'time'
    | 'sup'
    | 'sub'
    | 'legend';
    /**
    * The style of the text.
    */
    'type'?: | 'copy'
    | 'small'
    | '12'
    | '16'
    | '18'
    | '20'
    | '24'
    | '28'
    | '30'
    | '32'
    | '36'
    | '42'
    | '44'
    | '48'
    | '52'
    | '60'
    | '60-thin'
    | '62'
    | '62-thin'
    | '72'
    | '72-thin'
    | '84'
    | '84-thin';
    /**
    * Wraps the text, even when it has to break a word.
    */
    'wrap'?: boolean;
  }
  interface PTextLink {
    /**
    * Special download attribute to open native Browser download dialog if target url points to a downloadable file.
    */
    'download'?: boolean;
    /**
    * Target url to where the component should link to.
    */
    'href': string;
    /**
    * The icon shown next to the label.
    */
    'icon'?: string;
    /**
    * Set a custom HTML tag depending of the usage of the component.
    */
    'tag'?: | 'span'
    | 'a';
    /**
    * Target attribute where the link should be opened.
    */
    'target'?: 'self' | 'blank' | 'parent' | 'top';
    /**
    * Adapts the color when used on dark background.
    */
    'theme'?: 'light' | 'dark';
    /**
    * The style of the text.
    */
    'type'?: Components.PText['type'];
  }
  interface PTextList {
    /**
    * The type of the list.
    */
    'listType'?: 'unordered' | 'ordered';
    /**
    * The style of the text.
    */
    'textType'?: Components.PText['type'];
  }
  interface PTextListItem {}
  interface PTextarea {
    'disabled'?: boolean;
    'error'?: boolean;
    'label'?: string;
    'name'?: string;
    'value'?: string;
  }
}

declare global {


  interface HTMLPButtonIconElement extends Components.PButtonIcon, HTMLStencilElement {}
  var HTMLPButtonIconElement: {
    prototype: HTMLPButtonIconElement;
    new (): HTMLPButtonIconElement;
  };

  interface HTMLPButtonRegularElement extends Components.PButtonRegular, HTMLStencilElement {}
  var HTMLPButtonRegularElement: {
    prototype: HTMLPButtonRegularElement;
    new (): HTMLPButtonRegularElement;
  };

  interface HTMLPCheckboxElement extends Components.PCheckbox, HTMLStencilElement {}
  var HTMLPCheckboxElement: {
    prototype: HTMLPCheckboxElement;
    new (): HTMLPCheckboxElement;
  };

  interface HTMLPColorElement extends Components.PColor, HTMLStencilElement {}
  var HTMLPColorElement: {
    prototype: HTMLPColorElement;
    new (): HTMLPColorElement;
  };

  interface HTMLPFlexElement extends Components.PFlex, HTMLStencilElement {}
  var HTMLPFlexElement: {
    prototype: HTMLPFlexElement;
    new (): HTMLPFlexElement;
  };

  interface HTMLPFlexItemElement extends Components.PFlexItem, HTMLStencilElement {}
  var HTMLPFlexItemElement: {
    prototype: HTMLPFlexItemElement;
    new (): HTMLPFlexItemElement;
  };

  interface HTMLPGridElement extends Components.PGrid, HTMLStencilElement {}
  var HTMLPGridElement: {
    prototype: HTMLPGridElement;
    new (): HTMLPGridElement;
  };

  interface HTMLPGridChildElement extends Components.PGridChild, HTMLStencilElement {}
  var HTMLPGridChildElement: {
    prototype: HTMLPGridChildElement;
    new (): HTMLPGridChildElement;
  };

  interface HTMLPHeadlineElement extends Components.PHeadline, HTMLStencilElement {}
  var HTMLPHeadlineElement: {
    prototype: HTMLPHeadlineElement;
    new (): HTMLPHeadlineElement;
  };

  interface HTMLPIconElement extends Components.PIcon, HTMLStencilElement {}
  var HTMLPIconElement: {
    prototype: HTMLPIconElement;
    new (): HTMLPIconElement;
  };

  interface HTMLPInputElement extends Components.PInput, HTMLStencilElement {}
  var HTMLPInputElement: {
    prototype: HTMLPInputElement;
    new (): HTMLPInputElement;
  };

  interface HTMLPPaginationElement extends Components.PPagination, HTMLStencilElement {}
  var HTMLPPaginationElement: {
    prototype: HTMLPPaginationElement;
    new (): HTMLPPaginationElement;
  };

  interface HTMLPRadioElement extends Components.PRadio, HTMLStencilElement {}
  var HTMLPRadioElement: {
    prototype: HTMLPRadioElement;
    new (): HTMLPRadioElement;
  };

  interface HTMLPSelectElement extends Components.PSelect, HTMLStencilElement {}
  var HTMLPSelectElement: {
    prototype: HTMLPSelectElement;
    new (): HTMLPSelectElement;
  };

  interface HTMLPSpinnerElement extends Components.PSpinner, HTMLStencilElement {}
  var HTMLPSpinnerElement: {
    prototype: HTMLPSpinnerElement;
    new (): HTMLPSpinnerElement;
  };

  interface HTMLPSwitchElement extends Components.PSwitch, HTMLStencilElement {}
  var HTMLPSwitchElement: {
    prototype: HTMLPSwitchElement;
    new (): HTMLPSwitchElement;
  };

  interface HTMLPTextElement extends Components.PText, HTMLStencilElement {}
  var HTMLPTextElement: {
    prototype: HTMLPTextElement;
    new (): HTMLPTextElement;
  };

  interface HTMLPTextLinkElement extends Components.PTextLink, HTMLStencilElement {}
  var HTMLPTextLinkElement: {
    prototype: HTMLPTextLinkElement;
    new (): HTMLPTextLinkElement;
  };

  interface HTMLPTextListElement extends Components.PTextList, HTMLStencilElement {}
  var HTMLPTextListElement: {
    prototype: HTMLPTextListElement;
    new (): HTMLPTextListElement;
  };

  interface HTMLPTextListItemElement extends Components.PTextListItem, HTMLStencilElement {}
  var HTMLPTextListItemElement: {
    prototype: HTMLPTextListItemElement;
    new (): HTMLPTextListItemElement;
  };

  interface HTMLPTextareaElement extends Components.PTextarea, HTMLStencilElement {}
  var HTMLPTextareaElement: {
    prototype: HTMLPTextareaElement;
    new (): HTMLPTextareaElement;
  };
  interface HTMLElementTagNameMap {
    'p-button-icon': HTMLPButtonIconElement;
    'p-button-regular': HTMLPButtonRegularElement;
    'p-checkbox': HTMLPCheckboxElement;
    'p-color': HTMLPColorElement;
    'p-flex': HTMLPFlexElement;
    'p-flex-item': HTMLPFlexItemElement;
    'p-grid': HTMLPGridElement;
    'p-grid-child': HTMLPGridChildElement;
    'p-headline': HTMLPHeadlineElement;
    'p-icon': HTMLPIconElement;
    'p-input': HTMLPInputElement;
    'p-pagination': HTMLPPaginationElement;
    'p-radio': HTMLPRadioElement;
    'p-select': HTMLPSelectElement;
    'p-spinner': HTMLPSpinnerElement;
    'p-switch': HTMLPSwitchElement;
    'p-text': HTMLPTextElement;
    'p-text-link': HTMLPTextLinkElement;
    'p-text-list': HTMLPTextListElement;
    'p-text-list-item': HTMLPTextListItemElement;
    'p-textarea': HTMLPTextareaElement;
  }
}

declare namespace LocalJSX {
  interface PButtonIcon extends JSXBase.HTMLAttributes<HTMLPButtonIconElement> {
    /**
    * Disables the button. No events will be triggered while disabled state is active.
    */
    'disabled'?: boolean;
    /**
    * When providing an url then the component will be rendered as `<a>` instead of `<button>` tag.
    */
    'href'?: string;
    /**
    * The icon shown.
    */
    'icon'?: string;
    /**
    * A visually hidden label text to improve accessibility which describes the function behind the button.
    */
    'label'?: string;
    /**
    * Disables the button and shows a loading indicator. No events will be triggered while loading state is active.
    */
    'loading'?: boolean;
    /**
    * Emitted when the button loses focus.
    */
    'onPBlur'?: (event: CustomEvent<void>) => void;
    /**
    * Emitted when the button is clicked.
    */
    'onPClick'?: (event: CustomEvent<void>) => void;
    /**
    * Emitted when the button has focus.
    */
    'onPFocus'?: (event: CustomEvent<void>) => void;
    /**
    * Adapts the button color when used on dark background.
    */
    'theme'?: 'light' | 'dark';
    /**
    * Specifies the type of the button when no href prop is defined.
    */
    'type'?: 'button' | 'submit' | 'reset';
    /**
    * The style variant of the button.
    */
    'variant'?: 'ghost' | 'transparent' | 'default';
  }
  interface PButtonRegular extends JSXBase.HTMLAttributes<HTMLPButtonRegularElement> {
    /**
    * Disables the button. No events will be triggered while disabled state is active.
    */
    'disabled'?: boolean;
    /**
    * When providing an url then the component will be rendered as `<a>` instead of `<button>` tag.
    */
    'href'?: string;
    /**
    * The icon shown next to the label.
    */
    'icon'?: string;
    /**
    * Disables the button and shows a loading indicator. No events will be triggered while loading state is active.
    */
    'loading'?: boolean;
    /**
    * Emitted when the button loses focus.
    */
    'onPBlur'?: (event: CustomEvent<void>) => void;
    /**
    * Emitted when the button is clicked.
    */
    'onPClick'?: (event: CustomEvent<void>) => void;
    /**
    * Emitted when the button has focus.
    */
    'onPFocus'?: (event: CustomEvent<void>) => void;
    /**
    * Displays the button smaller.
    */
    'small'?: boolean;
    /**
    * Adapts the button color when used on dark background.
    */
    'theme'?: 'light' | 'dark';
    /**
    * Specifies the type of the button when no href prop is defined.
    */
    'type'?: 'button' | 'submit' | 'reset';
    /**
    * The style variant of the button.
    */
    'variant'?: 'highlight' | 'ghost' | 'default';
  }
  interface PCheckbox extends JSXBase.HTMLAttributes<HTMLPCheckboxElement> {
    'checked'?: boolean;
    'disabled'?: boolean;
    'error'?: boolean;
    'name'?: string;
    'value'?: string;
  }
  interface PColor extends JSXBase.HTMLAttributes<HTMLPColorElement> {
    'colors'?: | 'porsche-black'
    | 'porsche-light'
    | 'porsche-dark'
    | 'porsche-red'
    | 'porsche-dark-red'
    | 'surface-light'
    | 'surface-dark'
    | 'neutral-grey-1'
    | 'neutral-grey-2'
    | 'neutral-grey-3'
    | 'neutral-grey-4'
    | 'neutral-grey-5'
    | 'neutral-grey-6'
    | 'neutral-grey-7'
    | 'neutral-grey-8'
    | 'status-red'
    | 'status-green'
    | 'status-yellow'
    | 'state-focus';
    'text'?: | 'porsche-black'
    | 'porsche-light'
    | 'porsche-red'
    | 'neutral-grey-1'
    | 'neutral-grey-2'
    | 'neutral-grey-3'
    | 'neutral-grey-4'
    | 'neutral-grey-5'
    | 'neutral-grey-6'
    | 'neutral-grey-7'
    | 'neutral-grey-8'
    | 'inherit';
  }
  interface PFlex extends JSXBase.HTMLAttributes<HTMLPFlexElement> {
    /**
    * This aligns a flex container's individual lines when there is extra space in the cross-axis, similar to how "justifyContent" aligns individual items along the main axis. Corresponds to the "alignContent" css property.
    */
    'alignContent'?: BreakpointCustomizable<
    'stretch' | 'start' | 'end' | 'center' | 'space-between' | 'space-around'
    > &
    string;
    /**
    * Defines how the flex items are aligned along the cross axis.
    */
    'alignItems'?: BreakpointCustomizable<'stretch' | 'start' | 'end' | 'center' | 'baseline'> & string;
    /**
    * Defines the direction of the main and cross axis. The default "row" defines the main axis as horizontal left to right.
    */
    'direction'?: BreakpointCustomizable<'row' | 'row-reverse' | 'column' | 'column-reverse'> & string;
    /**
    * Defines the flex containers content flow if 2 or more containers are siblings of each other.
    */
    'flow'?: BreakpointCustomizable<'block' | 'inline'> & string;
    /**
    * Defines the gap between contained children.
    */
    'gap'?: | '0'
    | '4'
    | '8'
    | '16'
    | '24'
    | '32'
    | '40'
    | '48'
    | '56'
    | '64'
    | '72'
    | '80'
    | 'a'
    | 'b'
    | 'c'
    | 'd'
    | 'e'
    | 'f'
    | 'g';
    /**
    * Defines how the flex items are aligned along the main axis.
    */
    'justifyContent'?: BreakpointCustomizable<
    'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
    > &
    string;
    /**
    * If set, overflowing elements will wrap to a new line.
    */
    'wrap'?: BreakpointCustomizable<'nowrap' | 'wrap' | 'reverse'> & string;
  }
  interface PFlexItem extends JSXBase.HTMLAttributes<HTMLPFlexItemElement> {
    /**
    * Defines how this flex item is aligned along the cross axis. This overwrites the cross axis alignment set by the container. Corresponds to the "alignSelf" css property.
    */
    'alignSelf'?: BreakpointCustomizable<'auto' | 'start' | 'end' | 'center' | 'baseline' | 'stretch'> & string;
    /**
    * The shorthand property for the combined definition of "shrink", "grow" and "basis"
    */
    'flex'?: BreakpointCustomizable<'initial' | 'auto' | 'none' | 'equal'> & string;
    /**
    * The ability to allow/disallow the flex child to grow.
    */
    'grow'?: BreakpointCustomizable<'0' | '1'> & string;
    /**
    * The offset of the column. You can also supply values for specific breakpoints, like {base: "none", l: "one-quarter"}. You always need to provide a base value when doing this.
    */
    'offset'?: BreakpointCustomizable<
    'none' | 'one-quarter' | 'one-third' | 'half' | 'two-thirds' | 'three-quarters'
    > &
    string;
    /**
    * The ability to allow/disallow the flex child to shrink.
    */
    'shrink'?: BreakpointCustomizable<'1' | '0'> & string;
    /**
    * The width of the flex item. You can also supply values for specific breakpoints, like {base: "full", l: "one-quarter"}. You always need to provide a base value when doing this.
    */
    'width'?: BreakpointCustomizable<
    'auto' | 'one-quarter' | 'one-third' | 'half' | 'two-thirds' | 'three-quarters' | 'full'
    > &
    string;
  }
  interface PGrid extends JSXBase.HTMLAttributes<HTMLPGridElement> {
    /**
    * Defines the direction of the main and cross axis. The default "row" defines the main axis as horizontal left to right. Also defines the direction for specific breakpoints, like {"base": "column", "l": "row"}. You always need to provide a base value when doing this.
    */
    'direction'?: BreakpointCustomizable<'row' | 'row-reverse' | 'column' | 'column-reverse'> & string;
    /**
    * Defines the gap between contained children. The value "normal" (default) sets responsive grid spacings that should be used together with Grid.Child. Also defines the gap for specific breakpoints, like {"base": "zero", "l": "normal"}. You always need to provide a base value when doing this.
    */
    'gap'?: BreakpointCustomizable<'normal' | 'zero'> & string;
  }
  interface PGridChild extends JSXBase.HTMLAttributes<HTMLPGridChildElement> {
    /**
    * The offset of the column. Can be between 0 and 11. Also defines the offset of the column for specific breakpoints, like {"base": 6, "l": 3}. You always need to provide a base value when doing this.
    */
    'offset'?: BreakpointCustomizable<'0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11'> &
    string;
    /**
    * The size of the column. Can be between 1 and 12. Also defines the size of the column for specific breakpoints, like {"base": 6, "l": 3}. You always need to provide a base value when doing this.
    */
    'size'?: BreakpointCustomizable<'1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'> &
    string;
  }
  interface PHeadline extends JSXBase.HTMLAttributes<HTMLPHeadlineElement> {
    /**
    * The text alignment of the component.
    */
    'align'?: 'left' | 'center' | 'right';
    /**
    * Adds an ellipsis to a single line of text if it overflows.
    */
    'ellipsis'?: boolean;
    /**
    * Headline level/hierarchy.
    */
    'level'?: '1' | '2' | '3' | '4' | '5' | '6';
    /**
    * Adapts the text color when used on dark background.
    */
    'theme'?: 'light' | 'dark';
    /**
    * The style of the text.
    */
    'type'?: | 'large-title'
    | 'headline-1'
    | 'headline-2'
    | 'headline-3'
    | 'headline-4'
    | 'headline-5'
    | 'headline-6';
    /**
    * Wraps the text, even when it has to break a word.
    */
    'wrap'?: boolean;
  }
  interface PIcon extends JSXBase.HTMLAttributes<HTMLPIconElement> {
    /**
    * Specifies the label to use for accessibility. Defaults to the icon name.
    */
    'ariaLabel'?: string;
    /**
    * Basic color variations.
    */
    'color'?: Components.PColor['text'];
    /**
    * If enabled, ion-icon will be loaded lazily when it's visible in the viewport. Default, `false`.
    */
    'lazy'?: boolean;
    /**
    * The size of the icon.
    */
    'size'?: 'small' | 'medium' | 'large' | 'inherit';
    /**
    * Specifies which icon to use.
    */
    'source'?: string;
  }
  interface PInput extends JSXBase.HTMLAttributes<HTMLPInputElement> {
    'disabled'?: boolean;
    'error'?: boolean;
    'icon'?: string;
    'label'?: string;
    'name'?: string;
    'onPInput'?: (event: CustomEvent<KeyboardEvent>) => void;
    'type'?: 'text' | 'password' | 'date' | 'time' | 'number' | string;
    'value'?: string;
  }
  interface PPagination extends JSXBase.HTMLAttributes<HTMLPPaginationElement> {
    /**
    * Index of the currently active page.
    */
    'activePage'?: number;
    /**
    * The total count of items which should be shown per page.
    */
    'itemsPerPage'?: number;
    /**
    * Aria label what the pagination is used for.
    */
    'label'?: string;
    /**
    * Aria label for next page icon.
    */
    'labelNext'?: string;
    /**
    * Aria label for page navigation.
    */
    'labelPage'?: string;
    /**
    * Aria label for previous page icon.
    */
    'labelPrev'?: string;
    /**
    * Emitted when the link is clicked.
    */
    'onPClick'?: (event: CustomEvent<any>) => void;
    /**
    * The number of pages between ellipsis. 0 = mobile | 1 = desktop
    */
    'pageRange'?: 0 | 1;
    /**
    * Adapts the color when used on dark background.
    */
    'theme'?: 'light' | 'dark';
    /**
    * The total count of items.
    */
    'totalItemsCount'?: number;
  }
  interface PRadio extends JSXBase.HTMLAttributes<HTMLPRadioElement> {
    'checked'?: boolean;
    'disabled'?: boolean;
    'error'?: boolean;
    'name'?: string;
    'value'?: string;
  }
  interface PSelect extends JSXBase.HTMLAttributes<HTMLPSelectElement> {
    'label'?: string;
    'name'?: string;
    'value'?: string;
  }
  interface PSpinner extends JSXBase.HTMLAttributes<HTMLPSpinnerElement> {
    /**
    * Predefined spinner sizes.
    */
    'size'?: 'x-small' | 'small' | 'medium' | 'large';
    /**
    * Adapts the spinner color when used on dark background.
    */
    'theme'?: 'light' | 'dark';
  }
  interface PSwitch extends JSXBase.HTMLAttributes<HTMLPSwitchElement> {
    'checked'?: boolean;
    'disabled'?: boolean;
    'name'?: string;
    'value'?: string;
  }
  interface PText extends JSXBase.HTMLAttributes<HTMLPTextElement> {
    /**
    * The text alignment of the component.
    */
    'align'?: 'left' | 'center' | 'right';
    /**
    * Basic text color variations.
    */
    'color'?: Components.PColor['text'];
    /**
    * Adds an ellipsis to a single line of text if it overflows.
    */
    'ellipsis'?: boolean;
    /**
    * Sets the text as display: inline.
    */
    'inline'?: boolean;
    /**
    * Set a custom HTML tag depending of the usage of the text component.
    */
    'tag'?: | 'p'
    | 'span'
    | 'div'
    | 'label'
    | 'address'
    | 'blockquote'
    | 'figcaption'
    | 'a'
    | 'cite'
    | 'time'
    | 'sup'
    | 'sub'
    | 'legend';
    /**
    * The style of the text.
    */
    'type'?: | 'copy'
    | 'small'
    | '12'
    | '16'
    | '18'
    | '20'
    | '24'
    | '28'
    | '30'
    | '32'
    | '36'
    | '42'
    | '44'
    | '48'
    | '52'
    | '60'
    | '60-thin'
    | '62'
    | '62-thin'
    | '72'
    | '72-thin'
    | '84'
    | '84-thin';
    /**
    * Wraps the text, even when it has to break a word.
    */
    'wrap'?: boolean;
  }
  interface PTextLink extends JSXBase.HTMLAttributes<HTMLPTextLinkElement> {
    /**
    * Special download attribute to open native Browser download dialog if target url points to a downloadable file.
    */
    'download'?: boolean;
    /**
    * Target url to where the component should link to.
    */
    'href'?: string;
    /**
    * The icon shown next to the label.
    */
    'icon'?: string;
    /**
    * Emitted when the link is clicked.
    */
    'onPClick'?: (event: CustomEvent<void>) => void;
    /**
    * Set a custom HTML tag depending of the usage of the component.
    */
    'tag'?: | 'span'
    | 'a';
    /**
    * Target attribute where the link should be opened.
    */
    'target'?: 'self' | 'blank' | 'parent' | 'top';
    /**
    * Adapts the color when used on dark background.
    */
    'theme'?: 'light' | 'dark';
    /**
    * The style of the text.
    */
    'type'?: Components.PText['type'];
  }
  interface PTextList extends JSXBase.HTMLAttributes<HTMLPTextListElement> {
    /**
    * The type of the list.
    */
    'listType'?: 'unordered' | 'ordered';
    /**
    * The style of the text.
    */
    'textType'?: Components.PText['type'];
  }
  interface PTextListItem extends JSXBase.HTMLAttributes<HTMLPTextListItemElement> {}
  interface PTextarea extends JSXBase.HTMLAttributes<HTMLPTextareaElement> {
    'disabled'?: boolean;
    'error'?: boolean;
    'label'?: string;
    'name'?: string;
    'value'?: string;
  }

  interface IntrinsicElements {
    'p-button-icon': PButtonIcon;
    'p-button-regular': PButtonRegular;
    'p-checkbox': PCheckbox;
    'p-color': PColor;
    'p-flex': PFlex;
    'p-flex-item': PFlexItem;
    'p-grid': PGrid;
    'p-grid-child': PGridChild;
    'p-headline': PHeadline;
    'p-icon': PIcon;
    'p-input': PInput;
    'p-pagination': PPagination;
    'p-radio': PRadio;
    'p-select': PSelect;
    'p-spinner': PSpinner;
    'p-switch': PSwitch;
    'p-text': PText;
    'p-text-link': PTextLink;
    'p-text-list': PTextList;
    'p-text-list-item': PTextListItem;
    'p-textarea': PTextarea;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


