import { byClass, bydatacomponenttype } from "../../support/helpers.js";

//
class AmazonBasketPage {
  elements = {
    numberOfItemsInCart: () => cy.get('[id="sc-subtotal-label-activecart"]'),
    items: () => cy.get('[data-name="Active Items"]'),
    itemLinks: () => cy.get(byClass("a-row sc-action-links")),
    deleteItem: () => cy.get('.sc-action-delete > .a-declarative > .a-color-link'),
  };

  deleteBasketItem() {
    this.elements
      .items()
      .first()
      .within(() => {
        this.elements.itemLinks().within(() => {
          this.elements.deleteItem().first().click();
        });
      });
  }

  assertBasketCount(items) {
    this.elements.numberOfItemsInCart().should('exist')
    this.elements
      .numberOfItemsInCart()
      .invoke("text")
      .should("match", new RegExp("Subtotal \\(" + items + " (.*)\\):"));
  }
}
export default new AmazonBasketPage();


