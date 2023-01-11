/// <reference types="Cypress" />

describe("Hook testing", () => {
  beforeEach(function () {
    ///Setting up variables to use and setting up the data
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.get("div[class*='form-group'] input[name='name']").as("editboxName");
    cy.get("#exampleFormControlSelect1").as("editboxGender");
    cy.get("#inlineRadio1").as("checkbox1");
    cy.get("#inlineRadio2").as("checkbox2");
    cy.get("#inlineRadio3").as("checkbox3");
    cy.get("input[name='bday']").as("editboxBottom");
    cy.get(":nth-child(2) > .nav-link").as("shopButton");

    ///uses path of fixture folder can be "nested"
    cy.fixture("example").then((data) => {
      this.data = data;
    });
  });
  it("first test case", function () {
    cy.get("@editboxName").type(this.data.name);
    cy.get("@editboxName").should("have.attr", "minlength", "2");
    cy.get("@editboxGender").select(this.data.gender);
    cy.get("@editboxName").should("have.value", this.data.name);
    cy.get("@checkbox3").should("not.be.enabled");
  });

  it("second test case", function () {
    cy.get("@shopButton").click();
    cy.selectProduct("Samsung");
  });
});
