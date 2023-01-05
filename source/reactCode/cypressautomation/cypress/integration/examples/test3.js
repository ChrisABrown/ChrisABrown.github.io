//cypress - Spec
/// <reference types="Cypress" />

describe("My Third Test Case", function () {
  it("third test", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");
    cy.get("#checkBoxOption1").uncheck().should("not.be.checked");

    cy.get('input[type="checkbox"]').check(["option2", "option3"]);

    //static dropdown
    cy.get("select").select("option2").should("have.value", "option2");
  });
});
