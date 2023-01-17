/// <reference types="Cypress"/>
describe("Testing Mock HTTP requests", () => {
  it("generating Stub Data", () => {
    cy.intercept(
      {
        //request body
        methods: "GET",
        url: "",
      },
      {
        //response body
      }
    ).as("httpRequest");
  });
});
