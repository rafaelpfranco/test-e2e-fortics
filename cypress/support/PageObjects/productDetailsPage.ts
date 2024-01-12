class ProductDetailsPage {

    //================================ Buttons ========================================//
    
    backButton(){
        cy.window().then((win) => {
            win.history.back();
        });
    }

    //================================ Assertion ========================================//

    verifyProductName(){
        return cy.get('.inventory_details_name');
    }

    verifyProductDescription(){
        return cy.get('.inventory_details_desc');
    }

    verifyProductPrice(){
        return cy.get('.inventory_details_price');
    }
    
}
export default new ProductDetailsPage();