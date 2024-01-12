class CheckoutCompletePage {
    //================================ Assertion ========================================//
    verifySuccessMessageTitle() {
        return cy.get('.complete-header')
    }

    verifySuccessMessageBody() {
        return cy.get('.complete-text')
    }

}   

export default new CheckoutCompletePage;
