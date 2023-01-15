const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  env: {
    url: "https://rahulshettyacademy.com",
  },
  retries: {
    runMode: 1,
  },
  projectId: "jm4rui",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      await.preprocessor.addCucumberPreprocessorPlugin(on, config);

      on("file:preprocessor", browserify.default(config));
    },
    specPattern: "cypress/integration/examples/*.js",
  },
});
