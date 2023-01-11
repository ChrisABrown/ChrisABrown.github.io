class PurchasePage {
  getDeliveryLocationEditBox() {
    return cy.get("#country");
  }
  chooseDeliveryLocation() {
    return cy.get(".suggestions > ul > li > a");
  }
  termsAndConditionsCheckBox() {
    return cy.get("#checkbox2");
  }
  completePurchaseButton() {
    return cy.get("input.btn.btn-success.btn-lg");
  }
}

export default PurchasePage;
