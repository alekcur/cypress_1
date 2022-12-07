/// <reference types="Cypress" />

import { loginPage } from "../page_objects/loginPOM"
import { allGalleriesPage } from "../page_objects/allGalleriesPage"

describe("all galleries test", () => {
    let existingUser = {
        validEmail: "zutirahatlic@gmail.com",
        validPass: "terminator007",
    };

    let searchTerm = "novi sad 3 slike";

    before("log into the app", () => {
        cy.visit("/login");

        cy.url().should("include", "/login");
        loginPage.loginHeading
           .should("be.visible")
           .and("have.text", "Please login");

    loginPage.login(existingUser.validEmail, existingUser.validPass);
    
    cy.url().should("include", "/login");
    allGalleriesPage.allGalleriesHeading
       .should("be.visible")
       .and("have.text", "All Galleries");
    });

    it("test pagination", () => {
        allGalleriesPage.singleGallery.should("have.length", 10);
        allGalleriesPage.loadMoreButton.click();
        allGalleriesPage.singleGallery.should("have.length", 20);
    });

    it("all galleries loaded", () => {
        allGalleriesPage.singleGallery.should("have.length", 10);
        allGalleriesPage.galleryImage.should("have.length", 10);
    });

    it("redirect to single gallery", () => {
        allGalleriesPage.singleGallery.first().find("a").click();
        allGalleriesPage.allGalleriesHeading.should(
            "not.have.text,
            "All Galleries"
        );
        cy.url().should("include", "/galleries");
    });


    it.skip("search for existing gallery", () => {
        allGalleriesPage.search(searchTerm);
        allGalleriesPage.singleGallery.should("have.length", 1);
        //allGalleriesPage.singleGallery
        //.invoke("val").then((val)) => {
        //  console.log("val", val);
        //expect(val).to.have.text(searchTerm);
        // });
        cy.contains(searchTerm);
        });
    });
    