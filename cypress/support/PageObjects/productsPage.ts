class ProductPage {

    //================================ Buttons ========================================//
    addToCartButton(productName: string) {
        cy.contains('.inventory_item', productName).contains('ADD TO CART').click();
    }

    detailsButton(productName: string) {
        cy.contains('.inventory_item', productName).contains(productName).click();
    }

    removeItemButton(productName: string) {
        cy.contains('.inventory_item', productName).contains('REMOVE').click();
    }
    
    cartButton() {
        cy.get('#shopping_cart_container').click();
    }

    zToAButton() {
        cy.get('.product_sort_container').select('za');
    }

    priceLowButton() {
        cy.get('.product_sort_container').select('lohi');
    }

    priceHighButton() {
        cy.get('.product_sort_container').select('hilo');
    }

    //================================ Assertion ========================================//
    verifyProductPageTitle() {
        return cy.get('.product_label');
    }

    verifyProductNames() { 
        return cy.get('.inventory_item_name');
    }

    verifyItemQuantity() { 
        return cy.get('.fa-layers-counter');
    }

    verifyFirstProduct() {
        return cy.get('.inventory_item_name').first();
    }

    verifyLastProduct() {
        return cy.get('.inventory_item_name').last();
    }

    
}
export default new ProductPage();