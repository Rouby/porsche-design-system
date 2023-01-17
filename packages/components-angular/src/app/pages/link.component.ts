/* Auto Generated File */
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'page-link',
  styles: [
    `
      p-link:not(:last-child) {
        margin-right: 0.5rem;
      }
    `,
  ],
  template: `
    <div class="playground light" title="should render primary with label only">
      <p-link [variant]="'primary'" [href]="'https://www.porsche.com'">Some label</p-link>
      <p-link [variant]="'primary'"><a [href]="'https://www.porsche.com'">Some label</a></p-link>
    </div>
    <div class="playground dark" title="should render primary with label only on dark theme">
      <p-link [variant]="'primary'" [href]="'https://www.porsche.com'" [theme]="'dark'">Some label</p-link>
      <p-link [variant]="'primary'" [theme]="'dark'"><a [href]="'https://www.porsche.com'">Some label</a></p-link>
    </div>
    <div class="playground light" title="should render primary with label and icon">
      <p-link [variant]="'primary'" [href]="'https://www.porsche.com'" [icon]="'arrow-right'">Some label</p-link>
      <p-link [variant]="'primary'" [icon]="'arrow-right'"><a [href]="'https://www.porsche.com'">Some label</a></p-link>
    </div>
    <div class="playground dark" title="should render primary with label and icon on dark theme">
      <p-link [variant]="'primary'" [href]="'https://www.porsche.com'" [icon]="'arrow-right'" [theme]="'dark'">Some label</p-link>
      <p-link [variant]="'primary'" [icon]="'arrow-right'" [theme]="'dark'"><a [href]="'https://www.porsche.com'">Some label</a></p-link>
    </div>
    <div class="playground light" title="should render primary without label">
      <p-link [variant]="'primary'" [href]="'https://www.porsche.com'" [hideLabel]="true">Some label</p-link>
      <p-link [variant]="'primary'" [hideLabel]="true"><a [href]="'https://www.porsche.com'">Some label</a></p-link>
    </div>
    <div class="playground dark" title="should render primary without label on dark theme">
      <p-link [variant]="'primary'" [href]="'https://www.porsche.com'" [hideLabel]="true" [theme]="'dark'">Some label</p-link>
      <p-link [variant]="'primary'" [hideLabel]="true" [theme]="'dark'"><a [href]="'https://www.porsche.com'">Some label</a></p-link>
    </div>

    <div class="playground light" title="should render primary as default with label only">
      <p-link [href]="'https://www.porsche.com'">Some label</p-link>
      <p-link><a [href]="'https://www.porsche.com'">Some label</a></p-link>
    </div>
    <div class="playground dark" title="should render primary as default with label only on dark theme">
      <p-link [href]="'https://www.porsche.com'" [theme]="'dark'">Some label</p-link>
      <p-link [theme]="'dark'"><a [href]="'https://www.porsche.com'">Some label</a></p-link>
    </div>
    <div class="playground light" title="should render primary as default with label and icon">
      <p-link [href]="'https://www.porsche.com'" [icon]="'arrow-right'">Some label</p-link>
      <p-link [icon]="'arrow-right'"><a [href]="'https://www.porsche.com'">Some label</a></p-link>
    </div>
    <div class="playground dark" title="should render primary as default with label and icon on dark theme">
      <p-link [href]="'https://www.porsche.com'" [icon]="'arrow-right'" [theme]="'dark'">Some label</p-link>
      <p-link [icon]="'arrow-right'" [theme]="'dark'"><a [href]="'https://www.porsche.com'">Some label</a></p-link>
    </div>
    <div class="playground light" title="should render primary as default without label">
      <p-link [href]="'https://www.porsche.com'" [hideLabel]="true">Some label</p-link>
      <p-link [hideLabel]="true"><a [href]="'https://www.porsche.com'">Some label</a></p-link>
    </div>
    <div class="playground dark" title="should render primary as default without label on dark theme">
      <p-link [theme]="'dark'" [href]="'https://www.porsche.com'" [hideLabel]="true">Some label</p-link>
      <p-link [hideLabel]="true" [theme]="'dark'"><a [href]="'https://www.porsche.com'">Some label</a></p-link>
    </div>

    <div class="playground light" title="should render secondary with label only">
      <p-link [variant]="'secondary'" [href]="'https://www.porsche.com'">Some label</p-link>
      <p-link [variant]="'secondary'"><a [href]="'https://www.porsche.com'">Some label</a></p-link>
    </div>
    <div class="playground dark" title="should render secondary with label only on dark theme">
      <p-link [variant]="'secondary'" [href]="'https://www.porsche.com'" [theme]="'dark'">Some label</p-link>
      <p-link [variant]="'secondary'" [theme]="'dark'"><a [href]="'https://www.porsche.com'">Some label</a></p-link>
    </div>
    <div class="playground light" title="should render secondary with label and icon">
      <p-link [variant]="'secondary'" [href]="'https://www.porsche.com'" [icon]="'arrow-right'">Some label</p-link>
      <p-link [variant]="'secondary'" [icon]="'arrow-right'"><a [href]="'https://www.porsche.com'">Some label</a></p-link>
    </div>
    <div class="playground dark" title="should render secondary with label and icon on dark theme">
      <p-link [variant]="'secondary'" [href]="'https://www.porsche.com'" [icon]="'arrow-right'" [theme]="'dark'">Some label</p-link>
      <p-link [variant]="'secondary'" [icon]="'arrow-right'" [theme]="'dark'"><a [href]="'https://www.porsche.com'">Some label</a></p-link>
    </div>
    <div class="playground light" title="should render secondary without label">
      <p-link [variant]="'secondary'" [href]="'https://www.porsche.com'" [hideLabel]="true">Some label</p-link>
      <p-link [variant]="'secondary'" [hideLabel]="true"><a [href]="'https://www.porsche.com'">Some label</a></p-link>
    </div>
    <div class="playground dark" title="should render secondary without label on dark theme">
      <p-link [variant]="'secondary'" [href]="'https://www.porsche.com'" [hideLabel]="true" [theme]="'dark'">Some label</p-link>
      <p-link [variant]="'secondary'" [hideLabel]="true" [theme]="'dark'"><a [href]="'https://www.porsche.com'">Some label</a></p-link>
    </div>

    <div class="playground light" title="should render secondary if tertiary prop is set (deprecated) with label only">
      <p-link [variant]="'tertiary'" [href]="'https://www.porsche.com'">Some label</p-link>
      <p-link [variant]="'tertiary'"><a [href]="'https://www.porsche.com'">Some label</a></p-link>
    </div>
    <div class="playground dark" title="should render secondary if tertiary prop is set (deprecated) with label only on dark theme">
      <p-link [variant]="'tertiary'" [href]="'https://www.porsche.com'" [theme]="'dark'">Some label</p-link>
      <p-link [variant]="'tertiary'" [theme]="'dark'"><a [href]="'https://www.porsche.com'">Some label</a></p-link>
    </div>
    <div class="playground light" title="should render secondary if tertiary prop is set (deprecated) with label and icon">
      <p-link [variant]="'tertiary'" [href]="'https://www.porsche.com'" [icon]="'arrow-right'">Some label</p-link>
      <p-link [variant]="'tertiary'" [icon]="'arrow-right'"><a [href]="'https://www.porsche.com'">Some label</a></p-link>
    </div>
    <div class="playground dark" title="should render secondary if tertiary prop is set (deprecated) with label and icon on dark theme">
      <p-link [variant]="'tertiary'" [href]="'https://www.porsche.com'" [icon]="'arrow-right'" [theme]="'dark'">Some label</p-link>
      <p-link [variant]="'tertiary'" [icon]="'arrow-right'" [theme]="'dark'"><a [href]="'https://www.porsche.com'">Some label</a></p-link>
    </div>
    <div class="playground light" title="should render secondary if tertiary prop is set (deprecated) without label">
      <p-link [variant]="'tertiary'" [href]="'https://www.porsche.com'" [hideLabel]="true">Some label</p-link>
      <p-link [variant]="'tertiary'" [hideLabel]="true"><a [href]="'https://www.porsche.com'">Some label</a></p-link>
    </div>
    <div class="playground dark" title="should render secondary if tertiary prop is set (deprecated) without label on dark theme">
      <p-link [variant]="'tertiary'" [href]="'https://www.porsche.com'" [hideLabel]="true" [theme]="'dark'">Some label</p-link>
      <p-link [variant]="'tertiary'" [hideLabel]="true" [theme]="'dark'"><a [href]="'https://www.porsche.com'">Some label</a></p-link>
    </div>

    <div class="playground light" title="should render primary with responsive label">
      <p-link [variant]="'primary'" [hideLabel]="{ base: true, xs: false, s: true, m: false, l: true, xl: false }" [href]="'https://www.porsche.com'">
        Some label
      </p-link>
    </div>

    <div class="playground light" title="should render link with specific icon">
      <p-link [icon]="'phone'" [href]="'https://www.porsche.com'">Some label</p-link>
      <p-link [iconSource]="'./assets/icon-custom-kaixin.svg'" [href]="'https://www.porsche.com'">Some label</p-link>
      <p-link [icon]="'phone'" [href]="'https://www.porsche.com'">Some label</p-link>
      <p-link [iconSource]="'./assets/icon-custom-kaixin.svg'" [href]="'https://www.porsche.com'">Some label</p-link>
      <p-link [icon]="'phone'" [variant]="'secondary'" [href]="'https://www.porsche.com'">Some label</p-link>
      <p-link [iconSource]="'./assets/icon-custom-kaixin.svg'" [variant]="'secondary'" [href]="'https://www.porsche.com'">Some label</p-link>
    </div>

    <div class="playground dark" title="should render link with specific icon on dark theme">
      <p-link [theme]="'dark'" [icon]="'phone'" [href]="'https://www.porsche.com'">Some label</p-link>
      <p-link [theme]="'dark'" [iconSource]="'./assets/icon-custom-kaixin.svg'" [href]="'https://www.porsche.com'">Some label</p-link>
      <p-link [theme]="'dark'" [icon]="'phone'" [href]="'https://www.porsche.com'">Some label</p-link>
      <p-link [theme]="'dark'" [iconSource]="'./assets/icon-custom-kaixin.svg'" [href]="'https://www.porsche.com'">Some label</p-link>
      <p-link [theme]="'dark'" [icon]="'phone'" [variant]="'secondary'" [href]="'https://www.porsche.com'">Some label</p-link>
      <p-link [theme]="'dark'" [iconSource]="'./assets/icon-custom-kaixin.svg'" [variant]="'secondary'" [href]="'https://www.porsche.com'">Some label</p-link>
    </div>

    <div class="playground light" title="should render with multiline label with icon">
      <p-link style="width: 240px" [icon]="'arrow-right'" [href]="'https://www.porsche.com'">Lorem ipsum dolor sit amet, consetetur sadipscing</p-link>
      <p-link style="width: 240px" [icon]="'arrow-right'">
        <a [href]="'https://www.porsche.com'">Lorem ipsum dolor sit amet, consetetur sadipscing</a>
      </p-link>
    </div>

    <div class="playground light" title="should render with multiline label without icon">
      <p-link style="width: 240px" [href]="'https://www.porsche.com'">Lorem ipsum dolor sit amet, consetetur sadipscing</p-link>
      <p-link style="width: 240px">
        <a [href]="'https://www.porsche.com'">Lorem ipsum dolor sit amet, consetetur sadipscing</a>
      </p-link>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkComponent {}
