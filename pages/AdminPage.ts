import { Page, expect } from '@playwright/test';

// Class for the Admin page
export class AdminPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://uat-aus.goxproapp.com/xpro/en/login');
  }
  // Method to select the authentication option
  async selectAuthentication(authOption: string): Promise<void> {
    await this.page.locator('#select_0').selectOption(authOption); // Select option "GoXPro"
    await this.page.waitForLoadState('domcontentloaded'); // Wait for the page to load
  }

  // Method to log in with provided credentials
  async login(username: string, password: string) {
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('#submit_0');
  }

  // Method to check if the dashboard is visible
  async isDashboardVisible() {
    await expect(this.page.locator('h1')).toContainText('Clients');
  }

  // Method to click the MAD button
  async clickMAD() {
    await this.page.click('#eventlinkplus_0');
  }
}
