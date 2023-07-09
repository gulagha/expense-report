import { newE2EPage } from '@stencil/core/testing';

describe('gg-edit-expense-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gg-edit-expense-modal></gg-edit-expense-modal>');

    const element = await page.find('gg-edit-expense-modal');
    expect(element).toHaveClass('hydrated');
  });
});
