import { byClass, bydatacomponenttype } from "../../support/helpers.js";
import "../../support/commands.js"

//
class AmazonItemPage {
  elements = {
    firstResult: () => cy.get(bydatacomponenttype("s-product-image")).first(),
    addToBasket: () => cy.get("#add-to-cart-button"),
    clickBasketButton: () => cy.get('[id="nav-cart"]'),
    numberOfItemsInCart: () => cy.get('[id="sc-subtotal-label-activecart"]'),
    carouselItemExists: () => cy.get(byClass('a-carousel-card')),
    proceedToCheckout: () => cy.get('[data-feature-id="proceed-to-checkout-action"]')
  };

  selectFirstItem() {
    this.elements.firstResult().click();
  }

  addItemToBasket() {
    this.elements.addToBasket().click();
    cy.checkAndAcceptInsurance()
    cy.checkAndAcceptCare()
  }

  navigateToBasket() {
    this.elements.clickBasketButton().click();
  }

  assertItem() {
      this.elements.carouselItemExists().first().should('exist')
  } 

  proceedToCheckout() {
    this.elements.proceedToCheckout().click()
  }




}
export default new AmazonItemPage();











