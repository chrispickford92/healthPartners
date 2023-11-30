import { byClass, bydatacomponenttype } from "../../support/helpers.js";

//
class AmazonHamburgerMenu {
  elements = {
    acceptCookieButton: () => cy.get('[id="sp-cc-accept"]'),
    searchBar: () => cy.get('[id="twotabsearchtextbox"]'),
    searchButton: () => cy.get('[id="nav-search-submit-button"]'),
    hamburgerMenu: () => cy.get('[id="nav-hamburger-menu"]'),
    menuItem: () => cy.get(byClass("hmenu-item")),
  };

  selectMenuItem(itemName) {
    this.elements.menuItem().contains(itemName).should("exist");
    this.elements.menuItem().contains(itemName).click();
    cy.wait(1500)
  }
}
export default new AmazonHamburgerMenu();
