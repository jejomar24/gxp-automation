import { Before, After } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import { CustomWorld } from './world';

let browser: Browser;           // Declare the browser variable

// Initialize the browser and page before running tests
Before(async function (this: CustomWorld) {
  browser = await chromium.launch({ headless: false, slowMo: 100 });    // Launch a visible browser with a slight delay for debugging
  const context = await browser.newContext();                           // Create a new isolated browser context
  this.page = await context.newPage();                                  // Open a new page and assign it to the test context
});

// Clean up the browser after each test
After(async function () {
  await browser?.close();                                               // Close the browser if it exists
});
