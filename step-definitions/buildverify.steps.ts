/**
 * Step definitions for the build version page feature
 */

import { Given, When, Then } from '@cucumber/cucumber';
import { BuildVersionPage } from '../pages/BuildVersionPage';
import { CustomWorld } from '../support/world';

Given('I navigate to GoXPro Website version checker', async function (this: CustomWorld) {
  this.pageObject = new BuildVersionPage(this.page);             // Initialize the page object
  await this.pageObject.goto();                           // Navigate to the login page
});

Then('I should be able to see the correct version number {string}', async function (this: CustomWorld, versionNumber: string) {
  await this.pageObject.isBuildVersionPageVisible(versionNumber); // Verify that the build version page is visible
});