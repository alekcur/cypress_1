class AllGalleriesPage {

    get allGalleriesHeading() {
        return cy.get("h1")
    }

    get searchInput() {
        return cy.get("input");
    } 

    get filterButton() {
        return cy.get("button").first();
    }

    get loadMoreButton() {
        return cy.get("button").last();
    }

    get singleGallery() {
        return cy.get(".cell");
    }

    get galleryImage() {
        return cy.get("img");
    }

    get galleryHeading() {
        return this.singleGallery.find("h2");
    }

    get galleryAuthor() {
        return this.singleGallery.find("p");
    }

    get galleryCreationDate() {
        return this.singleGallery.find("small");
    }

    get galleriesGrid() {
        return cy.get(".grid");
    }

    search(searchTerm) {
        this.searchInput.type(searchTerm);
        this.filterButton.click();
    }

}

export const allGalleriesPage = new AllGalleriesPage();