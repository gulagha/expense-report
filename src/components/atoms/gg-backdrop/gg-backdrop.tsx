import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'gg-backdrop',
  styleUrl: 'gg-backdrop.css',
})
export class GgBackdrop {
  /**
   * A prop to make the backdrop visible
   */
  @Prop() open: boolean = false;

  render() {
    return <div class={`backdrop ${this.open ? 'open' : ''}`}></div>;
  }

}
