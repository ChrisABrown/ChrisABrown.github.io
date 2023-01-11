/// <reference types="Cypress" />

import HomePage from "../pageObjects/HomePage";

const homePage = new HomePage();

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
  });
});
