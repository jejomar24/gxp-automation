/**
 * Step definitions for the admin login feature
 */

import { Given, When, Then } from '@cucumber/cucumber';
import { AdminPage } from '../pages/AdminPage';
import { CustomWorld } from '../support/world';

Given('I navigate to GoXPro Website', async function (this: CustomWorld) {
  this.pageObject = new AdminPage(this.page);             // Initialize the page object
  await this.pageObject.goto();                           // Navigate to the login page
});

/**
 * Select the authentication option
 * @param {string} authOption - The authentication option to select
 */
Given('select {string} as authentication', async function (this: CustomWorld, authOption: string) {
  await this.pageObject.selectAuthentication(authOption); // Select the authentication option
});

/**
 * Log in with the provided credentials
 * @param {string} username - The username to log in with
 * @param {string} password - The password to log in with
 */
When('I log in with username {string} and password {string}',
  async function (
    this: CustomWorld,
    username: string,
    password: string) {
  await this.pageObject.login(username, password);      // Perform the login action
});

When('I click the MAD button', async function (this: CustomWorld) {
  await this.pageObject.clickMAD();                     // Click the MAD button
});

Then('I should be on the admin dashboard', async function (this: CustomWorld) {
  await this.pageObject.isDashboardVisible();           // Verify that the dashboard is visible
});
