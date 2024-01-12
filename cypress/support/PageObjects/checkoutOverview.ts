class CheckoutOverviewPage {
    //================================ Input ========================================//
    fillFirstNameField(firstName: string) {
        cy.get('[data-test="firstName"]').type(firstName);
    }

    fillLastNameField(lastName: string) {
        cy.get('[data-test="lastName"]').type(lastName);    
    }

    fillPostalCodeField(postalCode: string) {
        cy.get('[data-test="postalCode"]').type(postalCode);
    }

    //================================ Error ========================================//
    verifyErrorMessage() {
        return cy.get('[data-test="error"]');
    }
}

export default new CheckoutOverviewPage;
