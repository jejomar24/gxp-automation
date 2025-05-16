import { Page, expect } from "@playwright/test";

// Class for the Build Version page
export class BuildVersionPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto("https://uat-aus.goxproapp.com/xpro/version");
  }

  // Method to check if the build version page is visible
  async isBuildVersionPageVisible(versionNumber: string) {
    await expect(this.page.locator('body > h1')).toContainText(versionNumber);
  }
}