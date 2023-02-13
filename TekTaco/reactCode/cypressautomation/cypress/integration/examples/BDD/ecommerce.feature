 Feature: End to End Ecommerce validation
 
     application Regression
    @Regression
     Scenario: Ecommerce products delivery
     Given I open Ecommerce Page
     When I add items to Cart
     When Validate the total prices
     Then select the country submit and verify Success message

    @Smoke
     Scenario: Filling in the form to shop
     Given I open Ecommerce Page
     When I fill in the form details
    |name | gender |
    |Joe  | Male   |
     Then Validate the form behavior
     Then Select the Shop Page
