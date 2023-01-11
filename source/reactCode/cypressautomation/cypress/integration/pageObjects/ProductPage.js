class ProductPage {
  getCheckoutButton() {
    return cy.get("a.nav-link.btn.btn-primary");
  }
  getAddToCartButton() {
    return cy.get("button.btn.btn-info");
  }
  getProductNames() {
    return cy.get("h4.card-title");
  }
}
export default ProductPage;
