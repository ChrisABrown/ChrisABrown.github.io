/// <reference types="Cypress" />;

describe("My Third Test Case", function () {
  it("third test", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#alertbtn").click();
    cy.get('[value="Confirm"]').click();
  });
});
