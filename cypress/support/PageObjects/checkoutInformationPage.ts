class CheckoutInformationPage {
    //================================ Button ========================================//
    continueButton(){
        cy.contains('CONTINUE').click();
    }
}

export default new CheckoutInformationPage;
