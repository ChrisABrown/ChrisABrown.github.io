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
    return cy.get("input[type='submit']");
  }
  successfulPurchaseMessage() {
    return cy.get(".alert");
  }
}

export default PurchasePage;
