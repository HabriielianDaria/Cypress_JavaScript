import { defineConfig } from "cypress";

export default defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
  },

  e2e: {
    baseUrl: "https://qauto.forstudy.space",
    specPattern: "cypress/e2e/**/*.cy.js",

    env: {
      email: "lmvm4@ukr.net",
      password: "Test!123",
    },

    setupNodeEvents(on, config) {
      return config;
    },
  },
});
