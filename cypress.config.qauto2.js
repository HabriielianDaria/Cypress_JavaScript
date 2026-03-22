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
    baseUrl: "https://qauto2.forstudy.space",
    specPattern: "cypress/e2e/**/*.cy.js",

    env: {
      email: "dashagabrielian@gmail.com",
      password: "e4VHtDtQuPpQ0C9",
    },

    setupNodeEvents(on, config) {
      return config;
    },
  },
});
