Feature: Health Partners

Background: 

Scenario: Add Item to cart
Given the user is on the amazon homepage 
When the user searches for an item
And selects an items from the results 
Then the user can add the item to their cart 
And the user can remove an item from their cart

Scenario: Search from the sandwich icon on the left-hand side of the screen
Given the user is on the amazon homepage
When the user selects the hamburger menu
And selects the 'Books' option
Then the user should see a list of New Releases


Scenario: Proceed to checkout with today's deals item
Given the user is on the amazon homepage 
When selects 'Today's Deals'
And the user adds an Item to their cart from todays deals
Then the user can proceed to checkout 
