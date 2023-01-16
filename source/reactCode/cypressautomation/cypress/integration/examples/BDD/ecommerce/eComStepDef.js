///<reference types= "Cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../pageObjects/HomePage";
import ProductPage from "../../../pageObjects/ProductPage";
import CheckoutPage from "../../../pageObjects/CheckoutPage";
import PurchasePage from "../../../pageObjects/PurchasePage";

const homePage = new HomePage();
const productPage = new ProductPage();
const checkoutPage = new CheckoutPage();
const purchasePage = new PurchasePage();
var sum = 0;

Given("I open Ecommerce Page", () => {
  cy.visit(Cypress.env("url") + "/angularpractice/");
});

//When I add items to the cart
When("I add items to Cart", function () {
  homePage.getShopButton().click();

  ///parameterized version of grabbing data from an array within the examples JSON
  this.data.productName.forEach((element) => {
    cy.selectProduct(element);
  });
  productPage.getCheckoutButton().click();
});

//And Validate the total prices
When("Validate the total prices", () => {
  productPage
    .productPrice()
    .each(($el, index, $list) => {
      const price = $el.text();
      var result = price.split(" ");
      result = result[1].trim();
      cy.log(result);
      sum = Number(sum) + Number(result);
    })
    .then(() => {
      productPage.productTotalPrice().then((element) => {
        const totalPrice = element.text().split(" ");
        var total = Number(totalPrice[1]);
        expect(sum).to.equal(total);
      });
    });
});

//Then select the country, submit and verify Success
Then("select the country, submit and verify Success", () => {
  checkoutPage.getCheckoutButton().click();
  purchasePage.getDeliveryLocationEditBox().type("India");
  ///Timeout targeting for specific
  Cypress.config("defaultCommandTimeout: 8000");
  purchasePage.chooseDeliveryLocation().click();
  purchasePage.termsAndConditionsCheckBox().check({ force: true });
  purchasePage.completePurchaseButton().click();
  purchasePage.successfulPurchaseMessage().then((element) => {
    const successMessage = element.text();
    expect(successMessage.includes("Success!")).to.be.true;
  });
});
