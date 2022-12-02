/// <reference types="Cypress"/>

import { loginPage } from "../page_objects/loginPOM";

describe("login test", () => {
    before("visit gallery app", () => {
        cy.visit("/");
        loginPage.Page.loginButton.click();
    });

    it("login with invalid credentials", () => {
        loginPage.login("pogresan@mejl.com", "123");
        cy.url().should("include", "/login");
    });
});