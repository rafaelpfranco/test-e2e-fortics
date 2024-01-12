class CheckoutInformationFinishPage {
    //================================ Assertion ========================================//
    verifyItemTotalPrice() {
        return cy.get('.summary_subtotal_label')
    }

    verifyTax() {
        return cy.get('.summary_tax_label')
    }

    verifyTotalPrice() {
        return cy.get('.summary_total_label')
    }

    //================================ Button ========================================//
    clickFinishButton() {
        cy.contains('FINISH').click();
    }

}

export default new CheckoutInformationFinishPage;
