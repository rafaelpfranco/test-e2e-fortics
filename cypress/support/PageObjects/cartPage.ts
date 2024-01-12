class CartPage {
    //================================ Buttons ========================================//

    productRemoveButton(productName: string) { 
        cy.contains('.cart_item', productName).contains('REMOVE').click();
    }

    checkoutButton() {
        cy.contains('CHECKOUT').click();
    }

    coninueShoppingButton() {
        cy.contains('CONTINUE SHOPPING').click();
    }

    productPrice(productName: string) { 
        return cy.contains('.inventory_item',productName).get(".inventory_item_price")
    }

    productDescription(productName: string) { 
        return cy.contains('.inventory_item',productName).get(".inventory_item_desc")
    }

    //================================ Error ========================================//
    verifyErrorMessage() {
        return cy.get('#cart_contents_container');
    }
}

export default new CartPage;
