//cypress - Spec
/// <reference types="Cypress" />
describe("My Second Test Case", function () {
  it("second test", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    cy.get(".products").as("productLocator");
    //Parent child chaining
    cy.get("@productLocator")
      .find(".product")
      .each(($el, index, $list) => {
        const textVeg = $el.find("h4.product-name").text();
        if (textVeg.includes("Cashews")) {
          cy.wrap($el).find("button").click();
        }
      });
    cy.get(".cart-icon > img").click();
    cy.contains("PROCEED TO CHECKOUT").click();
    cy.contains("Place Order").click();
    // cy.get(".brand").should("have.text", "GREENKART");
    // cy.get(".brand").then((logoElement) => {
    //   cy.log(logoElement.text());
    // });
  });
});
