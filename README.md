# GXP Automation Framework

This is a Playwright automation framework using Cucumber.js for BDD, written in TypeScript. It supports modular feature files, page object model, and generates clean HTML reports for test runs.

---

## 🔗 Repository

Clone this repository:

```bash
git clone https://github.com/jejomar24/gxp-automation.git
cd gxp-automation
```
---
## 📦 Prerequisites
Make sure you have the following installed:
- Node.js (v16+ recommended)
- Git
- Playwright dependencies (installed via npx playwright install)
---
## 🚀 Setup Instructions
### 1. Install project dependencies
```bash
npm install
```
### 2. Install Playwright browsers
```bash
npx playwright install
```
### 3. First test run (all tests)
```bash
npm test
```
Or run a specific group
```bash
npm run test:admin
```
## 🧪 Available Scripts
```bash
// package.json
"scripts": {
  "full-test": "cucumber-js || exit 1; ts-node report-generator.ts",
  "test:admin": "cucumber-js -p admin",
  "test:buildverify": "cucumber-js -p buildverify"
}
```
## 📁 Project Structure
```graphql
gxp-automation/
├── features/                 # Feature files (BDD scenarios)
├── step-definitions/        # Step definitions
├── pages/                   # Page Object Model (POM) classes
├── support/                 # Hooks and CustomWorld setup
├── reports/                 # Output folder for reports
├── cucumber.js              # Cucumber config
├── tsconfig.json            # TypeScript config
├── package.json             # NPM scripts
└── report-generator.ts      # Generates HTML report
```
## 📊 Generate HTML Report
After running tests:
```bash
npm run report
```
Open the report in your browser:
```bash
open reports/cucumber-report.html
```
## 📌 Notes
- Update URLs, selectors, and credentials in your Page Objects or step definitions as needed.
- For headful mode during debugging, modify playwright.config.ts and set headless: false.



