import { Given, When, Then } from '@cucumber/cucumber';
import type { TestWorld } from '../support/world';

Given('I am on the biBerk Home page', async function (this: TestWorld) {
  const { page } = this;
  const url = process.env.BIBERK_URL || 'https://www.biberk.com/';
  await page.goto(url);
  await page.waitForLoadState('networkidle');
});

When('I start a {word} quote with:', async function (this: TestWorld, lob: string, table) {
  const { page } = this;
  const rows = table.hashes();
  const data: Record<string, string> = {};
  for (const row of rows) data[row.field] = row.value;

  // Simplified flow: click Get a Quote and fill minimal fields
  await page.click('text=Get a Quote');
  await page.waitForLoadState('networkidle');
  if (data['BusinessName']) await page.fill('[data-qa="business-name"]', data['BusinessName']);
  if (data['EmployeesCount']) await page.fill('[data-qa="employees-count"]', data['EmployeesCount']);
  if (data['AnnualRevenue']) await page.fill('[data-qa="annual-revenue"]', data['AnnualRevenue']);
  // Select LOB if applicable
  await page.click(`[data-qa="lob-${lob.toLowerCase()}"]`);
  await page.click('[data-qa="start-quote"]');
});

When('I go to Your Quote', async function (this: TestWorld) {
  const { page } = this;
  await page.click('[data-qa="goto-your-quote"]');
  await page.waitForSelector('text=Your Quote');
});

When('I proceed to Purchase', async function (this: TestWorld) {
  const { page } = this;
  await page.click('[data-qa="proceed-to-purchase"]');
  await page.waitForSelector('[data-qa="purchase-page"]');
});

When('I fill the biBerk purchase form with:', async function (this: TestWorld, table) {
  const { page } = this;
  const rows = table.hashes();
  const data: Record<string, string> = {};
  for (const row of rows) data[row.field] = row.value;

  if (data['Payment Option']) {
    await page.selectOption('[data-qa="payment-option"]', { label: data['Payment Option'] });
  }
  if (data['CC Name']) await page.fill('[data-qa="cc-name"]', data['CC Name']);
  if (data['CC Number']) await page.fill('[data-qa="cc-number"]', data['CC Number']);
  if (data['CC Expiration MMYY']) await page.fill('[data-qa="cc-exp"]', data['CC Expiration MMYY']);

  await page.click('[data-qa="purchase-submit"]');
  await page.waitForLoadState('networkidle');
});

Then('I should see the biBerk {string} confirmation', async function (this: TestWorld, title: string) {
  const { page } = this;
  await page.waitForSelector(`text=${title}`, { timeout: 30000 });
});
