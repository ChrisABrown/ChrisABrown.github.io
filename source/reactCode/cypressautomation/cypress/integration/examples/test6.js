/// <reference types="Cypress" />;

describe("My Sixth Test Case", function () {
  it("sixth test", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //handling mouse over popups
    cy.get("div.mouse-hover-content").invoke("show");
    cy.contains("Top").click({ force: true });
    cy.url().should("include", "top");
  });
});
