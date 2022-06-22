# Redmine. Testing website with Cypress

This is a learning project to study Cypress framework.
Website for tests: https://redmine.org/

- Description of test-cases: TestCases.ods
- Run Cypress with the following command: npm run cypress:open
- Testing script: cypress/e2e/redmine.testing.cy.js
- Pageobjects: cypress/pageobjects/*.page.js

In this project I'm using  cypress-xpath  as an additional package.
For redirection to other site was used the next option in cypress.config.js - chromeWebSecurity: false