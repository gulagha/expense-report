import { newE2EPage } from '@stencil/core/testing';

describe('gg-stacked-chart', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gg-stacked-chart></gg-stacked-chart>');

    const element = await page.find('gg-stacked-chart');
    expect(element).toHaveClass('hydrated');
  });
});
