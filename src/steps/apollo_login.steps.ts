import { Given } from '@cucumber/cucumber';
import type { TestWorld } from '../support/world';

Given('I am logged into Apollo', async function (this: TestWorld) {
  const { page, apolloUrl, username, password } = this;
  if (!apolloUrl || !username || !password) {
    throw new Error('APOLLO_URL, APOLLO_USERNAME, APOLLO_PASSWORD must be set');
    }
  await page.goto(apolloUrl);
  // Basic login flow; selectors should be adapted to actual app
  await page.fill('input[name="username"]', username);
  await page.fill('input[name="password"]', password);
  await page.click('button[type="submit"]');
  await page.waitForLoadState('networkidle');
});

Given('I am on the Drivers page', async function (this: TestWorld) {
  const { page } = this;
  // Navigate to drivers module; adjust selectors/paths as needed
  await page.click('[data-qa="left-nav-drivers"]');
  await page.waitForSelector('[data-qa="quote-driver-form-info-dl-header"]');
});
