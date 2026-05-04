FROM cypress/included:14.5.4

WORKDIR /e2e

COPY . .

RUN npm install

CMD ["npx", "cypress", "run", "--browser", "firefox", "--config-file", "cypress.config.qauto.js", "--spec", "cypress/e2e/**/habriielian_*.cy.js"]