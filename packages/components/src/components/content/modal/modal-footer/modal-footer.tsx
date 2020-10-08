import { Component, Element, h, Host, JSX } from '@stencil/core';

@Component({
  tag: 'p-modal-footer'
})
export class ModalFooter {
  @Element() public host!: HTMLElement;

  public render(): JSX.Element {
    return (
      <Host slot="footer">
        <slot />
      </Host>
    );
  }
}
