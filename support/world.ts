// Import necessary modules from Cucumber and Playwright
import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { Page } from 'playwright/test';

/**
 * Custom World object for Cucumber step definitions.
 * Provides access to the Playwright Page and page objects.
 */
export class CustomWorld extends World {
  page!: Page;            // The page object from Playwright
  pageObject: any;        // The page object for the application under test

  constructor(options: IWorldOptions) {
    super(options);       // Initialize base World
  }
}

// Register CustomWorld with Cucumber
setWorldConstructor(CustomWorld);
