import type { Page } from 'puppeteer';
import { goto, selectNode, waitForComponentsReady } from '../helpers';

let page: Page;

beforeEach(async () => (page = await browser.newPage()));
afterEach(async () => await page.close());

it('should not cause new lifecycle when nothing on the component changes', async () => {
  await goto(page, 'modal-example-change-content');
  expect(await waitForComponentsReady(page)).toBe(9); // p-modal, p-button (close), p-text (3x), p-checkbox-wrapper, p-button-group, p-button (save and close)

  const host = await selectNode(page, 'p-modal');

  await (await selectNode(page, 'p-button')).click();

  expect(await host.evaluate((el) => el.shadowRoot.activeElement.className)).toBe('root');
  expect(await host.evaluate((el) => el.scrollTop)).toBe(0);

  await host.evaluate((el) => (el.scrollTop = 200));
  await (await selectNode(page, 'p-checkbox-wrapper input[type="checkbox"]')).click();

  expect(await page.evaluate(() => document.activeElement.tagName)).toBe('INPUT');
  expect(await host.evaluate((el) => el.scrollTop)).toBe(200);
});
