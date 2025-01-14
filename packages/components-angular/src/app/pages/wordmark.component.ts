/* Auto Generated File */
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'page-wordmark',
  styles: [
    `
      @media only screen and (min-width: 760px) {
        #app,
        :host {
          display: grid;
          grid-template-columns: repeat(2, 50%);
        }
      }
    `,
  ],
  template: `
    <div class="playground light" title="should render default on light background">
      <p-wordmark></p-wordmark>
    </div>

    <div class="playground dark" title="should render default on dark background">
      <p-wordmark [theme]="'dark'"></p-wordmark>
    </div>

    <div class="playground light" title="should render size inherit on light background">
      <p-wordmark [size]="'inherit'" style="height: 20px"></p-wordmark>
    </div>

    <div class="playground dark" title="should render size inherit on dark background">
      <p-wordmark [theme]="'dark'" [size]="'inherit'" style="height: 20px"></p-wordmark>
    </div>

    <div class="playground light" title="should render default with custom click area on light background">
      <p-wordmark style="padding: 1.5rem"></p-wordmark>
    </div>

    <div class="playground dark" title="should render default with custom clickarea on dark background">
      <p-wordmark [theme]="'dark'" style="padding: 1.5rem"></p-wordmark>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordmarkComponent {}
