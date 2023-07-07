import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'gg-button',
  styleUrl: 'gg-button.css',
  shadow: true,

})
export class GgButton {
  /**
   * A prop that determines it the button is secondary
   */
  @Prop() secondary: boolean = false;

  render() {
    return (
      <Host role="button" data-secondary={this.secondary ? "secondary" : null}>
        <slot></slot>
      </Host>
    );
  }
}
