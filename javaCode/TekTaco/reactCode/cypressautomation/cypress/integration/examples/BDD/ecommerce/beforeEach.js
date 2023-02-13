beforeEach(() => {
  cy.visit(Cypress.env("url") + "/angularpractice/");
  cy.fixture("example").then(function (data) {
    this.data = data;
  });
});
