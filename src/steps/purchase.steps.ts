import { Given, Then, When } from '@cucumber/cucumber';
import type { TestWorld } from '../support/world';

Given('I navigate to the purchase page for a prepared quote', async function (this: TestWorld) {
  const { page } = this;
  // Placeholder navigation; modify to reach purchase page from prepared quote
  await page.click('[data-qa="left-nav-purchase"]');
  await page.waitForSelector('[data-qa="purchase-page"]');
});

When('I fill the purchase form with:', async function (this: TestWorld, table) {
  const { page } = this;
  const rows = table.hashes();
  const data: Record<string, string> = {};
  for (const row of rows) data[row.field] = row.value;

  if (data['Payment Option']) {
    await page.selectOption('[data-qa="payment-option"]', { label: data['Payment Option'] });
  }
  if (data['CC Name']) {
    await page.fill('[data-qa="cc-name"]', data['CC Name']);
  }
  if (data['CC Number']) {
    await page.fill('[data-qa="cc-number"]', data['CC Number']);
  }
  if (data['CC Expiration Month']) {
    await page.fill('[data-qa="cc-exp-month"]', data['CC Expiration Month']);
  }
  if (data['CC Expiration Year']) {
    await page.fill('[data-qa="cc-exp-year"]', data['CC Expiration Year']);
  }

  await page.click('[data-qa="purchase-submit"]');
  await page.waitForLoadState('networkidle');
});

Then('I should see the {string} page', async function (this: TestWorld, title: string) {
  const { page } = this;
  await page.waitForSelector(`text=${title}`, { timeout: 15000 });
});
