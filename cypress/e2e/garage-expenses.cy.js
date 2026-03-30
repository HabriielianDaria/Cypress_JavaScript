import garagePage from "./pages/GaragePage";
import expensesPage from "./pages/ExpensesPage";

describe("Car + API flow", () => {
  it("Create car, validate via API and UI", () => {
    cy.login();

    cy.intercept("POST", "/api/cars").as("createCar");

    //створення авто
    garagePage.addCar("Audi", "A6", "100");

    cy.wait("@createCar").then((interception) => {
      expect(interception.response.statusCode).to.eq(201);

      const carId = interception.response.body.data?.id 
                 || interception.response.body.id;

      //перевірка через API (cars list)
      cy.request({
        method: "GET",
        url: "/api/cars",
      }).then((response) => {
        expect(response.status).to.eq(200);

        const cars = response.body.data;
        const createdCar = cars.find((car) => car.id === carId);

        expect(createdCar).to.exist;
        expect(createdCar.brand).to.eq("Audi");
        expect(createdCar.model).to.eq("A6");
        expect(createdCar.mileage).to.eq(100);
      });

      //створення expense через API
      cy.createExpense(carId, 20, 500, 120).then((response) => {
        expect(response.status).to.eq(200);

        expect(response.body.data.carId).to.eq(carId);
        expect(response.body.data.liters).to.eq(20);
        expect(response.body.data.totalCost).to.eq(500);
      });

      //перевірка через UI
      cy.contains("Fuel expenses").click();

      cy.contains("20").should("be.visible");
      cy.contains("500").should("be.visible");
    });
  });
});