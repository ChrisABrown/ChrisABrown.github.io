/// <reference types="Cypress" />;

describe("My Seventh Test Case", function () {
  it("seventh test", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    /// Pulling the property of an element through resolving the promise
    cy.get("#opentab").then((el) => {
      const url = el.prop("href");
      cy.log(url);
      cy.visit(url);
    });
  });
});
