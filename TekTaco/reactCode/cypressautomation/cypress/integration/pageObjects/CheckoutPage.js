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
  getProductTotalPrice() {
    return cy.get("tbody > :nth-child(1) > :nth-child(4)");
  }
}

export default CheckoutPage;
