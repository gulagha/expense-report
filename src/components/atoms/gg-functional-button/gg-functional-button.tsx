import { Component, h } from '@stencil/core';

@Component({
  tag: 'gg-functional-button',
  styleUrl: 'gg-functional-button.css'
})
export class GgFunctionalButton {
  render() {
    return (
      <div class="button-wrapper">
        <slot></slot>
      </div>
    );
  }
}
