class CreateGalleryPage {

    get createGalleryButton() {
        return cy.get("a[href='/create']")
    }

    get createGalleryTitle() {
        return cy.get("title")
    }

    get descriptionsInput() {
        return cy.get("description");
    }

    get imageInput() {
        return cy.get("image url");
    }

    get addImageButton() {
        return cy.get("button");
    }

    get submitButton() {
        return cy.get("submit");
    }

}

export const createGalleryPage = new CreateGalleryPage();