class menuPage {
    //================================ Button ========================================//
    openMenuButton() {
        cy.get('.bm-burger-button > button').click();
    }

    logoutButton() {
        cy.get('#logout_sidebar_link').click();
    }
}

export default new menuPage();