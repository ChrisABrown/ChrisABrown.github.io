class HomePage {
  getEditBox() {
    return cy.get("div[class*='form-group'] input[name='name']");
  }

  getEditBoxBottom() {
    return cy.get("input[name='bday']");
  }

  getEditBoxGender() {
    return cy.get("#exampleFormControlSelect1");
  }

  getEntrepreneurCheckBox() {
    return cy.get("#inlineRadio3");
  }

  getShopButton() {
    return cy.get(":nth-child(2) > .nav-link");
  }
}

export default HomePage;
