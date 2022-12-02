/// <reference types="Cypress" />

import { faker } from '@faker-js/faker';
const Locators = require("../fixtures/{} Locators.json");


describe("registration test", () => {
  let randomUser = {
    randomEmail: faker.internet.email(),
    randomFirstName: faker.name.firstName(),
    randomLastName: faker.name.lastName(),
    randomPassword: faker.internet.password()
  }

    before("visit gallery app", () => {
      cy.visit("/");
      cy.get("a[href='/register']").click();
    });

    it("register with valid data", () => {
        cy.visit("/")
        cy.get(Locators.Register.registerButton).click();
        cy.get(Locators.Register.firstNameInputField).type(randomUser.randomFirstName);
        cy.get(Locators.Register.lastNameInputField).type(randomUser.randomLastName);
        cy.get(Locators.SharedElements.emailInput).type(randomUser.randomEmail);
        cy.get(Locators.SharedElements.passwordInput).type(randomUser.randomPassword);
        cy.get(Locators.Register.confirmedPasswordInputField).type(randomUser.randomPassword);
        cy.get(Locators.Register.checkbox).check();
        cy.get(Locators.SharedElements.submitButton).click();

        cy.url().should("not.include", "/register");
    });
});