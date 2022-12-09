class CreateGalleryPage {

    get titleInput() {
        return cy.get("input").first();
    }

    get descriptionInput() {
        return cy.get("input").eq(1);
    }

    get imageUrlInput() {
        return cy.get("input").last();
    }

    get addImageButton() {
        return cy.get("input").first();
    }

    get titleInput() {
        return cy.get("input").first();
    }
}