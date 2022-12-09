/// <reference types="Cypress" />

import { createGalleryPage } from "../page_objects/createGalleryPOM.js"

describe("create gallery test", () => {
    before("visit gallery app", () => {
        cy.visit("/");
        createGalleryPage.createGalleryButton.click();
        createGalleryPage.createGalleryHeading
          .should("be.visible")
          .and("have.text", "Create Gallery");
    });

});