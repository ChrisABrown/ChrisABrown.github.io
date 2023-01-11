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
  productPrice() {
    return cy.get("td:nth-of-type(4)>strong");
  }
}
export default ProductPage;
