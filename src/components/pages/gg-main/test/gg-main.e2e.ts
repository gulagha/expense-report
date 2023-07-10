import { newE2EPage } from '@stencil/core/testing';

describe('gg-main', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gg-main></gg-main>');

    const element = await page.find('gg-main');
    expect(element).toHaveClass('hydrated');
  });
});
