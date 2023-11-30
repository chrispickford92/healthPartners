import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import '../../support/commands.js'
import AmazonHomepage from "../pages/amazonHomepage.js";
import AmazonItemPage from "../pages/amazonItemPage.js";
import AmazonBasketPage from "../pages/amazonBasketPage.js";
import amazonHamBurgerMenu from "../pages/amazonHamburgerMenu.js";
import amazonItemPage from "../pages/amazonItemPage.js";
import amazonHomepage from "../pages/amazonHomepage.js";
import amazonTodaysDeals from "../pages/amazonTodaysDeals.js";

//Scenario: Add Item to cart
// Scenario: Search and interact with the cart
Given(/^the user is on the amazon homepage$/, () => {
  // Visit the Amazon homepage using a custom method (AmazonHomepage.visit())
  AmazonHomepage.visit();
});

When(/^the user searches for an item$/, () => {
  // Search for an item using a custom method (AmazonHomepage.searchForItem)
  AmazonHomepage.searchForItem("Occupational Health{enter}");
});

When(/^selects an items from the results$/, () => {
  // Select the first item from the search results using a custom method (AmazonItemPage.selectFirstItem)
  AmazonItemPage.selectFirstItem();
});

Then(/^the user can add the item to their cart$/, () => {
  // Add the selected item to the cart, navigate to the cart, and assert the basket count
  AmazonItemPage.addItemToBasket();
  AmazonItemPage.navigateToBasket();
  AmazonBasketPage.assertBasketCount("1");
});

Then(/^the user can remove an item from their cart$/, () => {
  // Delete an item from the cart and assert the updated basket count
  AmazonBasketPage.deleteBasketItem();
  AmazonBasketPage.assertBasketCount("0");
});

// Scenario: Search from the sandwich icon on the left-hand side of the screen
// Given the user is on the amazon homepage
When(/^the user selects the hamburger menu$/, () => {
  // Select the hamburger menu using a custom method (AmazonHomepage.selectHamburger)
  AmazonHomepage.selectHamburger();
});

When(/^selects the 'Books' option$/, () => {
  // Select the 'New Releases' option from the hamburger menu
  amazonHamBurgerMenu.selectMenuItem("New Releases");
});

Then(/^the user should see a list of New Releases$/, () => {
  // Assert that the user sees a list of new releases
  amazonItemPage.assertItem();
});

// Scenario: Proceed to checkout with today's deals item
// Given the user is on the amazon homepage
When(/^selects 'Today's Deals'$/, () => {
  // Select 'Today's Deals' from the homepage
  amazonHomepage.selectTodaysDeals();
});

When(/^the user adds an Item to their cart from todays deals$/, () => {
  // Select an item from Today's Deals, add it to the basket, and adjust the viewport size
  cy.viewport(1200, 1000);
  amazonTodaysDeals.selectItem();
  amazonItemPage.addItemToBasket();
});

Then(/^the user can proceed to checkout$/, () => {
  // Proceed to checkout after adding the item from Today's Deals
  amazonItemPage.proceedToCheckout();
});

