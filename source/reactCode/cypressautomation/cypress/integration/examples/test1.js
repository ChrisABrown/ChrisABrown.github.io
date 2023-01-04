//cypress - Spec
/// <reference types="Cypress" />
describe("My First Test Case", function () {
  it("first test", function () {
    cy.visit("www.google.com");
    cy.get(".gLFyf").type("bubble");
    cy.wait(2000);
    cy.get(".erkvQe").should("have.length.at.least", 1);
  });
});
