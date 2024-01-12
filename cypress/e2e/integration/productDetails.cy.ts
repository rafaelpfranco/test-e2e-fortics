// Importação dos módulos necessários
import productsPage from "../../support/PageObjects/productsPage";
import helpTests from "../../support/PageObjects/helpTests";
import * as users from "../fixtures/users.json";
import * as products from "../fixtures/products.json";
import productDetailsPage from "../../support/PageObjects/productDetailsPage";

// Definição dos tipos de dados para os usuários e produtos
const user: { username: string; password: string }[] = users;
const product: { description: string; name: string }[] = products;

// Descrição do caso de teste
describe('User Case - Visualizar detalhes dos produtos', () => {
    const baseUrl: string | null = Cypress.config().baseUrl;

    // Configuração antes de cada teste
    beforeEach(() => {
        cy.visit(`${baseUrl}/index.html`);
        helpTests.login(users.performance_glitch_user.username, users.performance_glitch_user.password);
    })

    // Teste para verificar se os detalhes dos produtos estão corretos
    it('Verificar detalhes - Happy day', () => {
        productsPage.detailsButton(products["Sauce Labs Backpack"].productName);
        productDetailsPage.verifyProductName().should('have.text', products["Sauce Labs Backpack"].productName);
        productDetailsPage.verifyProductDescription().should('have.text', products["Sauce Labs Backpack"].description);
        productDetailsPage.verifyProductPrice().should('have.text', `$`+ products["Sauce Labs Backpack"].price);
        productDetailsPage.backButton();
        productsPage.detailsButton(products["Sauce Labs Bike Light"].productName);
        productDetailsPage.verifyProductName().should('have.text', products["Sauce Labs Bike Light"].productName);
        productDetailsPage.verifyProductDescription().should('have.text', products["Sauce Labs Bike Light"].description);
        productDetailsPage.verifyProductPrice().should('have.text', `$`+ products["Sauce Labs Bike Light"].price);
        productDetailsPage.backButton();
        productsPage.detailsButton(products["Sauce Labs Bolt T-Shirt"].productName);
        productDetailsPage.verifyProductName().should('have.text', products["Sauce Labs Bolt T-Shirt"].productName);
        productDetailsPage.verifyProductDescription().should('have.text', products["Sauce Labs Bolt T-Shirt"].description);
        productDetailsPage.verifyProductPrice().should('have.text', `$`+ products["Sauce Labs Bolt T-Shirt"].price);
        productDetailsPage.backButton();
        productsPage.detailsButton(products["Sauce Labs Fleece Jacket"].productName);
        productDetailsPage.verifyProductName().should('have.text', products["Sauce Labs Fleece Jacket"].productName);
        productDetailsPage.verifyProductDescription().should('have.text', products["Sauce Labs Fleece Jacket"].description);
        productDetailsPage.verifyProductPrice().should('have.text', `$`+ products["Sauce Labs Fleece Jacket"].price);
        productDetailsPage.backButton();
        productsPage.detailsButton(products["Sauce Labs Onesie"].productName);
        productDetailsPage.verifyProductName().should('have.text', products["Sauce Labs Onesie"].productName);
        productDetailsPage.verifyProductDescription().should('have.text', products["Sauce Labs Onesie"].description);
        productDetailsPage.verifyProductPrice().should('have.text', `$`+ products["Sauce Labs Onesie"].price);
        productDetailsPage.backButton();
        productsPage.detailsButton(products["Test.allTheThings() T-Shirt (Red)"].productName);
        productDetailsPage.verifyProductName().should('have.text', products["Test.allTheThings() T-Shirt (Red)"].productName);
        productDetailsPage.verifyProductDescription().should('have.text', products["Test.allTheThings() T-Shirt (Red)"].description);
        productDetailsPage.verifyProductPrice().should('have.text', `$`+ products["Test.allTheThings() T-Shirt (Red)"].price);
        productDetailsPage.backButton();
    });


    
});