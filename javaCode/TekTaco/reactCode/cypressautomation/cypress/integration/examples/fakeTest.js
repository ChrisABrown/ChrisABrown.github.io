/// <reference types="Cypress"/>
const url = Cypress.env("url");
///cy.request(method, url, body).then((response)=>{"validation", response.body....etc})
///Cypress.env('token', response.body.token) for JWT session

describe("Testing Mock HTTP requests", () => {
  it("generating Stub Data", () => {
    cy.visit(url);

    cy.intercept(
      {
        method: "GET",
        url: url,
      },

      {
        statusCode: 200,
        body: [{}],
      }
    ).as("httpRequests");
    cy.get("").click();
    cy.wait("@httpRequests").should(({ request, response }) => {
      cy.get("tr").should("have.length", response.body.length + 1);
    });
    cy.get("p").should("have.text", "Sorry we have only one book available");
  });
});
