class GaragePage {
  addCarButton() {
    return cy.contains('button', 'Add car');
  }

  brandSelect() {
    return cy.get("#addCarBrand");
  }

  modelSelect() {
    return cy.get("#addCarModel");
  }

  mileageInput() {
    return cy.get("#addCarMileage");
  }

  submitButton() {
    return cy.get('ngb-modal-window').contains('button', 'Add');

  }

  addCar(brand, model, mileage) {
    this.addCarButton().click();
    this.brandSelect().select(brand);
    this.modelSelect().select(model);
    this.mileageInput().type(mileage);
    this.submitButton().click();
  }
}

export default new GaragePage();