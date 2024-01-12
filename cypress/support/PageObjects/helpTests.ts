class HelpTests {
    //================================ Login ========================================//
   login(username: string, password: string) {
        cy.get('[data-test="username"]').type(username);
        cy.get('[data-test="password"]').type(password);
        cy.get('#login-button').click();
    }

}

export default new HelpTests();