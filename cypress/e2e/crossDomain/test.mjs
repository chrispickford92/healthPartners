import { Given } from "@badeball/cypress-cucumber-preprocessor";
import { bydatatestid, byClass } from "../../support/helpers.js";




// Define a Cypress Cucumber step with the Given keyword
Given(/^OneScript$/, () => {
    // Visit the commitquality.com website
    cy.visit('https://commitquality.com');
  
    // Click on an element with the data-testid attribute equal to 'navbar-practice'
    cy.get(bydatatestid('navbar-practice')).click();
  
    // Use cy.origin() to execute commands on a different origin (www.demoblaze.com)
    cy.origin('https://www.demoblaze.com/index.html', () => {
      // Within the context of www.demoblaze.com, visit the specified URL
      cy.visit('https://www.demoblaze.com/index.html');
  
      // Find an element with the class 'nav-link' that contains the text 'Contact' and click on it
      cy.get('[class="nav-link"]').contains('Contact').click();
    });
  });
  