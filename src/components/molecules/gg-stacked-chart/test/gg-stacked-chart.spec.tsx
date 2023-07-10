import { newSpecPage } from '@stencil/core/testing';
import { GgStackedChart } from '../gg-stacked-chart';

describe('gg-stacked-chart', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GgStackedChart],
      html: `<gg-stacked-chart></gg-stacked-chart>`,
    });
    expect(page.root).toEqualHtml(`
      <gg-stacked-chart>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gg-stacked-chart>
    `);
  });
});
