import garagePage from "./pages/GaragePage";
import expensesPage from "./pages/ExpensesPage";

describe("Garage + Expenses flow", () => {
  it("Add car and fuel expense", () => {
    cy.login();

if (Cypress.config("baseUrl").includes("qauto2")) {
  cy.intercept('POST', '/api/cars', {
    statusCode: 201,
    body: {
      id: 1,
      carBrandId: 1,
      carModelId: 4,
      brandName: "Audi",
      modelName: "A6",
      mileage: 150,
      userId: 1
    }
  }).as('addCar');
}

    // Add car
    garagePage.addCar("Audi", "A6", "150");

    cy.contains("Audi A6").should("be.visible");

    // Go to expenses
    cy.contains("Fuel expenses").click();

    // Add expense
    expensesPage.addExpense("200", "20", "500");

 
cy.contains("Mileage").should("be.visible");
cy.contains("Liters used").should("be.visible");
cy.contains("Total cost").should("be.visible");

cy.contains("200").should("be.visible");
cy.contains("20").should("be.visible");
cy.contains("500").should("be.visible");

});
});