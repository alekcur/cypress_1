/// <reference types="Cypress" />

import { faker } from "@faker-js/faker";
import { registerPage } from "../page_objects/registerPage";

describe("register POM", () => {
  let randomUser = {
    randomEmail: faker.internet.email(),
    randomFirstName: faker.name.firstName(),
    randomLastName: faker.name.lastName(),
    randomPassword: faker.internet.password(),
    ivalidRandomEmailAdress: faker.internet.domainSuffix(),
    existingEmail : "rakijaman93@gmail.com",
  };

  beforeEach("visit register page", () => {
    cy.visit("/register");
    cy.url().should("include", "/register");
  });

  it("register with valid data", () => {
    registerPage.register(
      randomUser.randomFirstName,
      randomUser.randomLastName,
      randomUser.randomEmail,
      randomUser.randomPassword
    );
    cy.url().should("not.include", "/register");
  });

  it("register with invalid email address", () => {
    registerPage.register(
      randomUser.randomFirstName,
      randomUser.randomLastName,
      randomUser.randomFirstName,
      randomUser.randomPassword
    );
    cy.url().should("include", "/register");
  });

  it.only("register with existing email address", () => {
    registerPage.register(
      randomUser.randomFirstName,
      randomUser.randomLastName,
      randomUser.existingEmail,
      randomUser.randomPassword
     );
     registerPage.alertMessage
      .should("be.visible")      
      .and("exist")
      .and("have.length", 1)
      .and("have.text", "The email has already been taken.");
    cy.url().should("include", "/register");
  });
});












