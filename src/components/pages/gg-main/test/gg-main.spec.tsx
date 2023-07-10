import { newSpecPage } from '@stencil/core/testing';
import { GgMain } from '../gg-main';

describe('gg-main', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GgMain],
      html: `<gg-main></gg-main>`,
    });
    expect(page.root).toEqualHtml(`
      <gg-main>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gg-main>
    `);
  });
});
