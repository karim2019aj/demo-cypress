const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportHeight: 900,
    viewportWidth: 1440,
    experimentalStudio: true,
    setupNodeEvents(on, config) {
    },
  },
});
