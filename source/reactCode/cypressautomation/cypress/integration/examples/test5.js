/// <reference types="Cypress" />;

describe("My Fifth Test Case", function () {
  it("fifth test", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //Handling web table elements
    cy.get("tr td:nth-child(2)").each(($el, index, $list) => {
      const text = $el.text();
      if (text.includes("Python")) {
        cy.get("tr td:nth-child(2)")
          .eq(index)
          .next()
          .then((price) => {
            const priceOf = price.text();
            expect(priceOf).to.equal("25");
          });
      }
    });
  });
});
