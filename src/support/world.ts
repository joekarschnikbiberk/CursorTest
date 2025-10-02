import { IWorldOptions, setWorldConstructor, World } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import * as dotenv from 'dotenv';

dotenv.config();

export interface TestWorld extends World {
  browser: Browser;
  page: Page;
  apolloUrl: string;
  username?: string;
  password?: string;
}

class CustomWorld extends World implements TestWorld {
  browser!: Browser;
  page!: Page;
  apolloUrl = process.env.APOLLO_URL || '';
  username = process.env.APOLLO_USERNAME;
  password = process.env.APOLLO_PASSWORD;

  constructor(opts: IWorldOptions) {
    super(opts);
  }
}

setWorldConstructor(CustomWorld);
