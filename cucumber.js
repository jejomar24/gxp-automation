module.exports = {
  default: [
    '--require-module', 'ts-node/register',
    '--require', 'step-definitions/**/*.ts',
    '--require', 'support/**/*.ts',
    '--format', 'json:reports/cucumber-report.json'
  ].join(' '),

  admin: [
    'features/admin',
    '--require-module', 'ts-node/register',
    '--require', 'step-definitions/**/*.ts',
    '--require', 'support/**/*.ts'
  ].join(' '),

  buildverify: [
  'features/commons',
  '--require-module', 'ts-node/register',
  '--require', 'step-definitions/**/*.ts',
  '--require', 'support/*'
].join(' ')
};
// This file is used to configure the Cucumber.js test runner.