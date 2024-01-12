// Importação dos módulos necessários
import productsPage from "../../support/PageObjects/productsPage";
import helpTests from "../../support/PageObjects/helpTests";
import cartPage from "../../support/PageObjects/cartPage";
import checkoutInformationPage from "../../support/PageObjects/checkoutInformationPage";
import checkoutOverviewPage from "../../support/PageObjects/checkoutOverview";
import checkoutOverviewFinishPage from "../../support/PageObjects/checkoutOverviewFinishPage";
import checkoutCompletePage from "../../support/PageObjects/checkoutCompletePage";
import * as users from "../fixtures/users.json";
import * as products from "../fixtures/products.json";
import * as successMessages from "../fixtures/successMessage.json";
import * as errors from "../fixtures/errors.json";

import { faker } from '@faker-js/faker';

// Definição dos tipos de dados para os produtos e mensagens de sucesso
const product: { description: string; name: string; price: string }[] = products;
const successMessage: { message_title: string; message_body: string }[] = successMessages;

// Descrição dos casos de teste
describe('User Case - Comprar produtos', () => {
    const baseUrl: string | null = Cypress.config().baseUrl;
    
    beforeEach(() => {
        // Visitar a página inicial e fazer login
        cy.visit(`${baseUrl}/index.html`);
        helpTests.login(users.performance_glitch_user.username, users.performance_glitch_user.password);
    })

    it('Cenario: Comprar produtos - Happy Day', () => {
        // Adicionar produtos ao carrinho
        productsPage.addToCartButton(products["Sauce Labs Backpack"].productName);
        productsPage.addToCartButton(products["Sauce Labs Bike Light"].productName);
        productsPage.addToCartButton(products["Sauce Labs Bolt T-Shirt"].productName);
        productsPage.addToCartButton(products["Sauce Labs Fleece Jacket"].productName);
        productsPage.addToCartButton(products["Sauce Labs Onesie"].productName);
        productsPage.addToCartButton(products["Test.allTheThings() T-Shirt (Red)"].productName);
        
        // Calcular o preço total dos itens
        const totalItemPrice: number = (
            parseFloat(products["Sauce Labs Backpack"].price) + 
            parseFloat(products["Sauce Labs Bike Light"].price) + 
            parseFloat(products["Sauce Labs Bolt T-Shirt"].price) + 
            parseFloat(products["Sauce Labs Fleece Jacket"].price) + 
            parseFloat(products["Sauce Labs Onesie"].price) + 
            parseFloat(products["Test.allTheThings() T-Shirt (Red)"].price)
        );
        
        // Acessar o carrinho e prosseguir para o checkout
        productsPage.cartButton();
        cartPage.checkoutButton();
        
        // Preencher informações de checkout
        checkoutOverviewPage.fillFirstNameField(faker.name.firstName());    
        checkoutOverviewPage.fillLastNameField(faker.name.lastName());
        checkoutOverviewPage.fillPostalCodeField(faker.address.zipCode());
        checkoutInformationPage.continueButton();
        
        // Verificar o preço total dos itens e finalizar a compra
        checkoutOverviewFinishPage.verifyItemTotalPrice().contains(totalItemPrice);
        checkoutOverviewFinishPage.clickFinishButton();
        
        // Verificar mensagem de sucesso
        checkoutCompletePage.verifySuccessMessageTitle().contains(successMessages["purchase made successfully"].message_title);
        checkoutCompletePage.verifySuccessMessageBody().contains(successMessages["purchase made successfully"].message_body);
    });

    it('Cenario: Comprar produtos sem inserir itens no carrinho', () => {
        // Acessar o carrinho sem adicionar itens
        productsPage.cartButton();
        cartPage.checkoutButton();
        
        // Verificar mensagem de erro
        // espera-se que falhe pois não há tratamento de erro para essa situação
        cartPage.verifyErrorMessage().should('contain', errors.empty_cart.error).then(() => {
            cy.url().should('eq', `${baseUrl}/cart.html`);
        });
    });

    it('Cenario: Comprar produtos sem inserir nome', () => {
        // Adicionar produtos ao carrinho
        productsPage.addToCartButton(products["Sauce Labs Backpack"].productName);
        productsPage.addToCartButton(products["Sauce Labs Bike Light"].productName);
        productsPage.addToCartButton(products["Sauce Labs Bolt T-Shirt"].productName);
        productsPage.addToCartButton(products["Sauce Labs Fleece Jacket"].productName);
        productsPage.addToCartButton(products["Sauce Labs Onesie"].productName);
        productsPage.addToCartButton(products["Test.allTheThings() T-Shirt (Red)"].productName);
        
        // Calcular o preço total dos itens
        const totalItemPrice: number = (
            parseFloat(products["Sauce Labs Backpack"].price) + 
            parseFloat(products["Sauce Labs Bike Light"].price) + 
            parseFloat(products["Sauce Labs Bolt T-Shirt"].price) + 
            parseFloat(products["Sauce Labs Fleece Jacket"].price) + 
            parseFloat(products["Sauce Labs Onesie"].price) + 
            parseFloat(products["Test.allTheThings() T-Shirt (Red)"].price)
        );
        
        // Acessar o carrinho e prosseguir para o checkout
        productsPage.cartButton();
        cartPage.checkoutButton();
        
        // Preencher informações de checkout sem inserir o nome
        checkoutOverviewPage.fillLastNameField(faker.name.lastName());
        checkoutOverviewPage.fillPostalCodeField(faker.address.zipCode());
        checkoutInformationPage.continueButton();
        
        // Verificar mensagem de erro
        checkoutOverviewPage.verifyErrorMessage().should('contain', errors.empty_first_name.error).then(() => {
            cy.url().should('eq', `${baseUrl}/checkout-step-one.html`);
        });
    });

    it('Cenario: comprar produtos sem inserir sobrenome', () => {
        // Adicionar produtos ao carrinho
        productsPage.addToCartButton(products["Sauce Labs Backpack"].productName);
        productsPage.addToCartButton(products["Sauce Labs Bike Light"].productName);
        productsPage.addToCartButton(products["Sauce Labs Bolt T-Shirt"].productName);
        productsPage.addToCartButton(products["Sauce Labs Fleece Jacket"].productName);
        productsPage.addToCartButton(products["Sauce Labs Onesie"].productName);
        productsPage.addToCartButton(products["Test.allTheThings() T-Shirt (Red)"].productName);
        
        // Calcular o preço total dos itens
        const totalItemPrice: number = (
            parseFloat(products["Sauce Labs Backpack"].price) + 
            parseFloat(products["Sauce Labs Bike Light"].price) + 
            parseFloat(products["Sauce Labs Bolt T-Shirt"].price) + 
            parseFloat(products["Sauce Labs Fleece Jacket"].price) + 
            parseFloat(products["Sauce Labs Onesie"].price) + 
            parseFloat(products["Test.allTheThings() T-Shirt (Red)"].price)
        );
        
        // Acessar o carrinho e prosseguir para o checkout
        productsPage.cartButton();
        cartPage.checkoutButton();
        
        // Preencher informações de checkout sem inserir o sobrenome
        checkoutOverviewPage.fillFirstNameField(faker.name.firstName());
        checkoutOverviewPage.fillPostalCodeField(faker.address.zipCode());
        checkoutInformationPage.continueButton();
        
        // Verificar mensagem de erro
        checkoutOverviewPage.verifyErrorMessage().should('contain', errors.empty_last_name.error).then(() => {
            cy.url().should('eq', `${baseUrl}/checkout-step-one.html`);
        });
    });

    it('Cenario: comprar produtos sem inserir zipcode', () => {
        // Adicionar produtos ao carrinho
        productsPage.addToCartButton(products["Sauce Labs Backpack"].productName);
        productsPage.addToCartButton(products["Sauce Labs Bike Light"].productName);
        productsPage.addToCartButton(products["Sauce Labs Bolt T-Shirt"].productName);
        productsPage.addToCartButton(products["Sauce Labs Fleece Jacket"].productName);
        productsPage.addToCartButton(products["Sauce Labs Onesie"].productName);
        productsPage.addToCartButton(products["Test.allTheThings() T-Shirt (Red)"].productName);
        
        // Calcular o preço total dos itens
        const totalItemPrice: number = (
            parseFloat(products["Sauce Labs Backpack"].price) + 
            parseFloat(products["Sauce Labs Bike Light"].price) + 
            parseFloat(products["Sauce Labs Bolt T-Shirt"].price) + 
            parseFloat(products["Sauce Labs Fleece Jacket"].price) + 
            parseFloat(products["Sauce Labs Onesie"].price) + 
            parseFloat(products["Test.allTheThings() T-Shirt (Red)"].price)
        );
        
        // Acessar o carrinho e prosseguir para o checkout
        productsPage.cartButton();
        cartPage.checkoutButton();
        
        // Preencher informações de checkout sem inserir o zipcode
        checkoutOverviewPage.fillFirstNameField(faker.name.firstName());    
        checkoutOverviewPage.fillLastNameField(faker.name.lastName());
        checkoutInformationPage.continueButton();
        
        // Verificar mensagem de erro
        checkoutOverviewPage.verifyErrorMessage().should('contain', errors.empty_zip_code.error).then(() => {
            cy.url().should('eq', `${baseUrl}/checkout-step-one.html`);
        });
    });

    it('Cenario: comprar produtos com zipcode invalido', () => {
        // Adicionar produtos ao carrinho
        productsPage.addToCartButton(products["Sauce Labs Backpack"].productName);
        productsPage.addToCartButton(products["Sauce Labs Bike Light"].productName);
        productsPage.addToCartButton(products["Sauce Labs Bolt T-Shirt"].productName);
        productsPage.addToCartButton(products["Sauce Labs Fleece Jacket"].productName);
        productsPage.addToCartButton(products["Sauce Labs Onesie"].productName);
        productsPage.addToCartButton(products["Test.allTheThings() T-Shirt (Red)"].productName);
        
        // Calcular o preço total dos itens
        const totalItemPrice: number = (
            parseFloat(products["Sauce Labs Backpack"].price) + 
            parseFloat(products["Sauce Labs Bike Light"].price) + 
            parseFloat(products["Sauce Labs Bolt T-Shirt"].price) + 
            parseFloat(products["Sauce Labs Fleece Jacket"].price) + 
            parseFloat(products["Sauce Labs Onesie"].price) + 
            parseFloat(products["Test.allTheThings() T-Shirt (Red)"].price)
        );
        
        // Acessar o carrinho e prosseguir para o checkout
        productsPage.cartButton();
        cartPage.checkoutButton();
        
        // Preencher informações de checkout com um zipcode inválido
        checkoutOverviewPage.fillFirstNameField(faker.name.firstName());    
        checkoutOverviewPage.fillLastNameField(faker.name.lastName());
        checkoutOverviewPage.fillPostalCodeField(faker.name.lastName());
        checkoutInformationPage.continueButton();
        
        // Verificar mensagem de erro
        // espera-se que falhe pois não há tratamento de erro para essa situação
        checkoutOverviewPage.verifyErrorMessage().should('contain', errors.invalid_zip_code.error).then(() => {
            cy.url().should('eq', `${baseUrl}/checkout-step-one.html`);
        });
    });
});