import { newSpecPage } from '@stencil/core/testing';
import { GgEditExpenseModal } from '../gg-edit-expense-modal';

describe('gg-edit-expense-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GgEditExpenseModal],
      html: `<gg-edit-expense-modal></gg-edit-expense-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <gg-edit-expense-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gg-edit-expense-modal>
    `);
  });
});
