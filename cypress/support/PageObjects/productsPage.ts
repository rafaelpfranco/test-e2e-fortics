class ProductPage {
    //================================ Assertion ========================================//
    verifyProductPageTitle() {
        return cy.get('.product_label')
    }
    
}
export default new ProductPage()