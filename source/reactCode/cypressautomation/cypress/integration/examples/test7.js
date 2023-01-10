/// <reference types="Cypress" />;

describe("My Seventh Test Case", function () {
  it("seventh test", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.visit("https://www.rahulshettyacademy.com/").prop("href");
  });
});
