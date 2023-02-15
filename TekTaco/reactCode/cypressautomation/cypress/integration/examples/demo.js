///<reference types ="Cypress"/>
///<reference types ="Cypress-iframe"/>
import "cypress-iframe";

describe("Demo", () => {
  it("Frames Test", () => {
    cy.visit(Cypress.env("url"));
    cy.frameLoaded("#courses-iframe");

    cy.iframe().find("a[href*='mentorship']").eq(0).click();

    //Doesn't find properly
    cy.iframe().find("h1.pricing-title text-white ls-1").as("pricing-title");

    cy.iframe().get("@pricing-title").should("have.length", 2);
  });
});
