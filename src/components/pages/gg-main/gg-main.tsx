import { Component, Host, h } from '@stencil/core';
import { fetchExpenses } from '../../../utils/utils';
import { set, state } from '../../../store/store';

@Component({
  tag: 'gg-main',
  styleUrl: 'gg-main.css',
  shadow: true,
})
export class GgMain {
  componentDidLoad() {
    set("loading", true);
    fetchExpenses()
      .then(data => {
        // do something with the data
        set("loading", false);
        set("data", data);
        console.log(data);
      })
      .catch(err => {
        // handle any errors
        console.error(err);
      });
  };
  render() {
    return (
      <Host data-theme={state.isDarkMode ? "dark" : null}>
        {state.loading ? "Loading" : null}
        <gg-main-template
          switchDarkMode={() => set("isDarkMode", !state.isDarkMode)}
          isDarkMode={state.isDarkMode}
          data={state.data}
        />
      </Host>
    );
  }
}
