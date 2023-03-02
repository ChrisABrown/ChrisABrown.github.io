// /<reference types="Cypress"/>
context("Setup test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
});

describe("UI testing", () => {
  it("NavBar is loaded and working", () => {
    cy.visit("http://localhost:3000");
    cy.get("#nav-bar").contains("Home").click();
    cy.get("#nav-bar").contains("Menu").click();
    cy.get("#nav-bar").contains("Login").click();
    cy.get("#nav-bar").contains("Cart").click();
  });
});

describe("Database testing", () => {
  it("Menu page products load on page", () => {
    cy.visit("http://localhost:3000");
    cy.get("#nav-bar").contains("Menu").click();
  });
});
