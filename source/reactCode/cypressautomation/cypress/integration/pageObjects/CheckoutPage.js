class CheckoutPage {
  getProductRemoveButton() {
    return cy.get("button.btn.btn-danger");
  }

  getContinueShoppingButton() {
    return cy.get("button.btn.btn-default");
  }

  getCheckoutButton() {
    return cy.get("button.btn.btn-success");
  }
  getProductPrices() {
    return cy.get("");
  }
}

export default CheckoutPage;
