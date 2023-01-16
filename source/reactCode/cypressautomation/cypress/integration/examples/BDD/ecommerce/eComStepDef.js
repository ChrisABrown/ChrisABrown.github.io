import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I open Ecommerce Page", () => {
  cy.visit(Cypress.env("url") + "/angularpractice/");
});
