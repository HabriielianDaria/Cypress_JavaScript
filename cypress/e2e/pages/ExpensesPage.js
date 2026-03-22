class ExpensesPage {
  addExpenseButton() {
    return cy.contains("Add an expense");
  }

  mileageInput() {
    return cy.get("#addExpenseMileage");
  }

  litersInput() {
    return cy.get("#addExpenseLiters");
  }

  totalCostInput() {
    return cy.get("#addExpenseTotalCost");
  }

  submitButton() {
    return cy.get('ngb-modal-window').contains('button', 'Add');
  }

  addExpense(mileage, liters, cost) {
    this.addExpenseButton().click();
    this.mileageInput().clear().type(mileage);
    this.litersInput().type(liters);
    this.totalCostInput().type(cost);
    this.submitButton().click();
  }
}

export default new ExpensesPage();
