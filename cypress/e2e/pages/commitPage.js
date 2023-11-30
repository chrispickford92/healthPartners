class AmazonItemPage {
    elements = {
   
    };
  
    selectFirstItem() {
      this.elements.firstResult().click();
    }
  
    addItemToBasket() {
      this.elements.addToBasket().click();
      cy.checkAndAcceptInsurance()
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
  
  