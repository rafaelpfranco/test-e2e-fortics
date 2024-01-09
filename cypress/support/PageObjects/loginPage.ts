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
}

export default new LoginPage()