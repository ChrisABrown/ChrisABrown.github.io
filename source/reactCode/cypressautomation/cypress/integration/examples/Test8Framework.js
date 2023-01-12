/// <reference types="Cypress" />

import HomePage from "../pageObjects/HomePage";
import PurchasePage from "../pageObjects/PurchasePage";
import ProductPage from "../pageObjects/ProductPage";
import CheckoutPage from "../pageObjects/CheckoutPage";

const homePage = new HomePage();
const productPage = new ProductPage();
const checkoutPage = new CheckoutPage();
const purchasePage = new PurchasePage();
var sum = 0;

describe("Hook testing", () => {
  beforeEach(function () {
    ///Setting up variables to use and setting up the data
    cy.visit("https://rahulshettyacademy.com/angularpractice/");

    ///uses path of fixture folder can be "nested"ex: 'fixtures/example/data'
    cy.fixture("example").then((data) => {
      this.data = data;
    });
  });
  it("first test case", function () {
    // const homePage = new HomePage();

    homePage.getEditBox().type("Annie");
    homePage.getEditBox().should("have.attr", "minlength", "2");
    homePage.getEditBoxGender().select(this.data.gender);
    homePage.getEditBox().should("have.value", this.data.name);
    homePage.getEntrepreneurCheckBox().should("not.be.enabled");
  });

  it("second test case", function () {
    // const homePage = new HomePage();
    homePage.getShopButton().click();

    ///parameterized version of grabbing data from an array within the examples JSON
    this.data.productName.forEach((element) => {
      cy.selectProduct(element);
    });
    productPage.getCheckoutButton().click();
    checkoutPage.getContinueShoppingButton().should("be.enabled");
  });

  it("third test case", function () {
    homePage.getShopButton().click();

    ///parameterized version of grabbing data from an array within the examples JSON
    this.data.productName.forEach((element) => {
      cy.selectProduct(element);
    });
    productPage.getCheckoutButton().click();
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
});
