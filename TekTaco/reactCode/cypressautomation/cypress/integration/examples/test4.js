/// <reference types="Cypress" />;

describe("My Fourth Test Case", function () {
  it("fourth test", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#alertbtn").click();
    cy.get('[value="Confirm"]').click();

    //window:alert pop up handling by cypress
    cy.on("window:alert", (str) => {
      //Mocha code
      expect(str).to.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });

    //cypress handling of confirmation popup message.
    cy.on("window:confirm", (str) => {
      //Mocha code
      expect(str).to.equal("Hello , Are you sure you want to confirm?");
    });
    cy.get("#opentab").invoke("removeAttr", "target").click();

    cy.url().should("include", "rahulshetty");

    cy.go("back");
  });
});
