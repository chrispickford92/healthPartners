import { byClass, bydatacomponenttype } from "../../support/helpers.js";


// Define a class for Amazon homepage interactions
class AmazonHomepage {
  // Define elements related to the Amazon homepage
  elements = {
    acceptCookieButton: () => cy.get('[id="sp-cc-accept"]'),
    searchBar: () => cy.get('[id="twotabsearchtextbox"]'),
    searchButton: () => cy.get('[id="nav-search-submit-button"]'),
    hamburgerMenu: () => cy.get('[id="nav-hamburger-menu"]'),
    navBar: () => cy.get('[id="nav-xshop-container"]'),
    todaysDealsButton: () => cy.get(byClass('nav-a  ')).contains(`Today's Deals`)
  };

  // Method to visit the Amazon homepage and accept cookies
  visit() {
    // Navigate to the Amazon homepage
    cy.visit("https://www.amazon.co.uk");
    // Click the accept cookie button
    this.elements.acceptCookieButton().click();
  }

  // Method to search for an item on the Amazon homepage
  searchForItem(itemSearch) {
    // Type the specified item in the search bar
    this.elements.searchBar().type(itemSearch);
  }

  // Method to select the hamburger menu on the Amazon homepage
  selectHamburger() {
    // Click on the hamburger menu
    this.elements.hamburgerMenu().click();
  }

  // Method to select 'Today's Deals' from the navigation bar on the Amazon homepage
  selectTodaysDeals() {
    // Within the navigation bar, click on the 'Today's Deals' button
    this.elements.navBar().within(() => {
      this.elements.todaysDealsButton().click();
    });
  }
}

// Export the AmazonHomepage class for use in other modules
export default new AmazonHomepage();


