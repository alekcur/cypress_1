/// <reference types="Cypress" />

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
        cy.get("a[href='/register']").click();
        cy.get("#first-name").type("Aleksandar");
        cy.get("#last-name").type("Curic");
        cy.get("#email").type(email);
        cy.get("#password").type("Qwerty123!");
        cy.get("#password-confirmation").type("Qwerty123!");
        cy.get('[type="checkbox"]').check();
        cy.get("button").click();
        cy.url().should("not.include", "/register");
    });
});