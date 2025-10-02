import { Then, When } from '@cucumber/cucumber';
import type { TestWorld } from '../support/world';

When('I create a driver with:', async function (this: TestWorld, table) {
  const { page } = this;
  const rows = table.hashes();
  const data: Record<string, string> = {};
  for (const row of rows) data[row.field] = row.value;

  if (data['DL State']) {
    await page.click('[data-qa="quote-driver-form-info-dl-state-select"]');
    await page.click(`mat-option >> text=${data['DL State']}`);
  }
  if (data['DL Number']) {
    await page.fill('[data-qa="quote-driver-form-info-dl-input"]', data['DL Number']);
  }
  // Save/confirm driver
  await page.click('[data-qa="quote-driver-form-save-button"]');
  await page.waitForLoadState('networkidle');
});

Then('I should see the driver saved with license {string}', async function (this: TestWorld, license: string) {
  const { page } = this;
  await page.waitForSelector('[data-qa="quote-driver-license-text"]');
  const text = await page.textContent('[data-qa="quote-driver-license-text"]');
  if (!text?.includes(license)) {
    throw new Error(`Expected saved license to include '${license}', got '${text}'`);
  }
});

Then('I should see a validation error {string}', async function (this: TestWorld, message: string) {
  const { page } = this;
  // Generic mat-error near DL input
  const errorSelector = 'mat-error:has-text("Invalid drivers license number")';
  await page.waitForSelector(errorSelector, { timeout: 5000 });
  const full = await page.textContent(errorSelector);
  if (!full?.includes(message)) {
    throw new Error(`Expected validation message to include '${message}', got '${full}'`);
  }
});
