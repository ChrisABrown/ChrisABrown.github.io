 Feature: End to End Ecommerce validation
 
     application Regression

     Scenario: Ecommerce products delivery
     Given I open Ecommerce Page
     When I add items to Cart
     And Validate the total prices
     Then selcect the country, submit and verify Success message
