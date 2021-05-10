import { Component, Element, Event, EventEmitter, h, JSX, Prop } from '@stencil/core';
import { insertSlottedStyles, throwIfElementHasAttribute } from '../../../utils';
import { TableHead } from './table-head';
import { getSlottedCss, HeadItem } from '../table-generics/table-utils';

@Component({
  tag: 'p-table-wrapper-body',
  styleUrl: '../table/table.scss',
  shadow: true,
})
export class TableWrapperBody {
  @Element() public host!: HTMLElement;
  @Prop() public head?: HeadItem[] = [];

  @Event({ bubbles: false }) public headClick: EventEmitter<HeadItem>;

  public connectedCallback(): void {
    this.addSlottedStyles();
  }

  public componentWillRender(): void {
    throwIfElementHasAttribute(this.host, 'head');
  }

  public render(): JSX.Element {
    return (
      <table>
        <TableHead head={this.head} onHeadClick={this.headClick.emit} />
        <tbody>
          <slot />
        </tbody>
      </table>
    );
  }

  private addSlottedStyles(): void {
    insertSlottedStyles(this.host, getSlottedCss(this.host));
  }
}
