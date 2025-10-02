import { Before, After, setDefaultTimeout, Status } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import type { TestWorld } from './world';

setDefaultTimeout(60 * 1000);

Before(async function (this: TestWorld) {
  this.browser = await chromium.launch({ headless: true });
  const context = await this.browser.newContext();
  this.page = await context.newPage();
});

After(async function (this: TestWorld, scenario) {
  if (scenario.result?.status === Status.FAILED) {
    const shot = await this.page.screenshot();
    await this.attach(shot, 'image/png');
  }
  await this.page.context().close();
  await this.browser.close();
});
