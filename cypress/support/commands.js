// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands

import { byClass } from "./helpers.js";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

Cypress.Commands.add("checkAndAcceptInsurance", () => {
  cy.get("body") // Adjust the selector based on your application's structure
    .then(($body) => {
      // Check if the insurance text exists within the body
      if ($body.text().includes("Accidental Damage")) {
        cy.wait(800);
        cy.log("Insurance text found. Accepting it.");
        cy.get('[id="attach-warranty-pane"]').within(() => {
          cy.get('[id="attachSiNoCoverage"]')
            .contains("No thanks")
            .scrollIntoView({ force: true }).click({ force: true });
         
        });
      } else {
        // If the insurance text does not exist, log a message (optional)
        cy.log("Insurance text not found. Moving on.");
        // Add your additional actions here for when there's no insurance text
      }
    });
});

Cypress.Commands.add("checkAndAcceptCare", () => {
  cy.get("body") // Adjust the selector based on your application's structure
    .then(($body) => {
      // Check if the insurance text exists within the body
      if ($body.text().includes("year product care")) {
        cy.wait(800);
        cy.log("Insurance text found. Accepting it.");
        cy.get('[id="attach-warranty-pane"]').within(() => {
          cy.get('[id="attachSiNoCoverage"]')
            .contains("No thanks")
            .scrollIntoView({ force: true }).click({ force: true });
         
        });
      } else {
        // If the insurance text does not exist, log a message (optional)
        cy.log("Insurance text not found. Moving on.");
        // Add your additional actions here for when there's no insurance text
      }
    });
});

//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// This element <span#attachSiNoCoverage-announce.a-button-text> is not visible because it has CSS property: position: fixed and it's being covered by another element:

// <input class="a-button-input" type="submit" aria-labelledby="attachSiNoCoverage-announce">
