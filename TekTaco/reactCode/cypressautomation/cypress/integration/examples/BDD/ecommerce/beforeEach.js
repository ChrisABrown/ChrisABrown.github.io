beforeEach(() => {
  cy.visit(Cypress.env("url") + "/menu");
  cy.fixture("example").then(function (data) {
    this.data = data;
  });
});
