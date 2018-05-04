import { Component, ViewEncapsulation, Input, ElementRef } from '@angular/core';

@Component({
  selector: `pui-icon`,
  exportAs: 'puiIcon',
  templateUrl: 'icon.html',
  styleUrls: [
    '../../../../node_modules/@porsche/ui-kit-core/src/modules/icon/icon.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class PuiIconComponent {
  @Input() icon = '';
  @Input() styleModifier = '';
}
