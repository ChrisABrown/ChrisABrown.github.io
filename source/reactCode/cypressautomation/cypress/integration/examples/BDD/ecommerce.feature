 Feature: End to End Ecommerce validation
 
     application Regression
     @Regression
     Scenario: Ecommerce products delivery
     Given I open Ecommerce Page
     When I add items to Cart
     When Validate the total prices
     Then selcect the country, submit and verify Success message
