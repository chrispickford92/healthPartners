import { byClass} from "../../support/helpers.js";

class AmazonTodaysDeals{
    elements = {
        carouselItem: () => cy.get('[data-csa-c-type="item"]')

    };
  
    selectItem() {
     this.elements.carouselItem().first().click()
    }
  

  }
  export default new AmazonTodaysDeals();
  
  
  