class LoginPage {
    //================================ Input ========================================//
    fillUsernameField(username: string) {
        cy.get('[data-test="username"]').type(username);
    }

    fillPasswordField(password: string) {
        cy.get('[data-test="password"]').type(password);
    }

    //================================ Button ========================================//
    clickLoginButton() {
        cy.get('#login-button').click();
    }

    //================================ Error ========================================//
    verifyErrorMessage() {
        return cy.get('[data-test="error"]');
    }
}

export default new LoginPage()