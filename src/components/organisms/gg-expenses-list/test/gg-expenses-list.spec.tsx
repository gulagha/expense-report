import { newSpecPage } from '@stencil/core/testing';
import { GgExpensesList } from '../gg-expenses-list';

describe('gg-expenses-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GgExpensesList],
      html: `<gg-expenses-list></gg-expenses-list>`,
    });
    expect(page.root).toEqualHtml(`
      <gg-expenses-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gg-expenses-list>
    `);
  });
});
