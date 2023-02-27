/* Auto Generated File */
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'page-modal-slotted-heading',
  styles: [
    `
      .playground {
        height: 500px;
        padding: 0;
        transform: translate3d(0, 0, 0);
      }
    `,
  ],
  template: `
    <div class="playground light" title="should display slotted heading">
      <p-content-wrapper [width]="'basic'">
        <div style="background: deeppink; height: 100vh"></div>
      </p-content-wrapper>
      <p-modal [open]="true" [aria]="{ 'aria-label': 'Slotted Headline' }">
        <div slot="heading">
          <p-text [tag]="'div'" [role]="'doc-subtitle'">Slotted Subtitle</p-text>
          <p-heading [tag]="'h2'">Slotted Headline</p-heading>
        </div>
        Some Content
      </p-modal>
    </div>

    <div class="visualize-grid">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalSlottedHeadingComponent {}
