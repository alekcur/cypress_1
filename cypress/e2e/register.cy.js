/// <reference types="Cypress" />

const Locators = require("../fixtures/{} Locators.json");


describe("registration test", () => {
    function makeId(length) {
        var result = "";
        var characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
          );
        }
        return result;
      }
      let email = `${makeId(5)}@test.com`;

    it("register with valid data", () => {
        cy.visit("/")
        cy.get(Locators.Register.registerButton).click();
        cy.get(Locators.Register.firstNameInputField).type("Aleksandar");
        cy.get(Locators.Register.lastNameInputField).type("Curic");
        cy.get(Locators.SharedElements.emailInput).type(email);
        cy.get(Locators.SharedElements.passwordInput).type("Qwerty123!");
        cy.get(Locators.Register.confirmedPasswordInputField).type("Qwerty123!");
        cy.get(Locators.Register.checkbox).check();
        cy.get(Locators.SharedElements.submitButton).click();

        cy.url().should("not.include", "/register");
    });
});