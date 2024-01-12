const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.saucedemo.com/v1",
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports/mocha',
      quiet: true,
      overwrite: false,
      html: true,
      json: true
    }
  },
});