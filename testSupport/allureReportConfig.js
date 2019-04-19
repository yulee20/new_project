const allureReporter = require('cucumberjs-allure-reporter');

allureReporter.config(
  {
    targetDir: './allure-results/',
    labels: {
    },
  },
);
module.exports = allureReporter;