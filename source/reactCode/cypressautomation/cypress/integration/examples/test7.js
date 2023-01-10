/// <reference types="Cypress" />;

describe("My Seventh Test Case", function () {
  it("seventh test", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("#opentab").then((el) => {
      const url = el.prop("href");
      cy.log(url);
      cy.visit(url);
    });
  });
});
