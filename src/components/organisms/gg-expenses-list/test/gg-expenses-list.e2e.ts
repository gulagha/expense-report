import { newE2EPage } from '@stencil/core/testing';

describe('gg-expenses-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gg-expenses-list></gg-expenses-list>');

    const element = await page.find('gg-expenses-list');
    expect(element).toHaveClass('hydrated');
  });
});
