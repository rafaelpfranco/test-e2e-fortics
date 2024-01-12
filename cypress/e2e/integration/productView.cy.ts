// Importação dos módulos necessários
import productsPage from "../../support/PageObjects/productsPage";
import helpTests from "../../support/PageObjects/helpTests";
import * as users from "../fixtures/users.json";
import * as products from "../fixtures/products.json";

// Definição dos tipos de dados para os usuários e produtos
const user: { username: string; password: string }[] = users;
const product: { description: string; name: string }[] = products;

// Variável para contar a quantidade de produtos adicionados ao carrinho
var count: number = 0;

// Descrição dos casos de teste
describe('User Case - Visualizar produtos', () => {
    // Obtenção da URL base do Cypress
    const baseUrl: string | null = Cypress.config().baseUrl;
    
    beforeEach(() => {
        // Visitar a página inicial antes de cada teste
        cy.visit(`${baseUrl}/index.html`);
        helpTests.login(users.performance_glitch_user.username, users.performance_glitch_user.password);
    })

    it('Listar todos os produtos - Happy Day', () => {
        // Obter a quantidade de produtos no arquivo JSON
        const productCount: number = Object.keys(products).length;
        // Verificar se a quantidade de nomes de produtos exibidos é a mesma quantidade de produtos no arquivo JSON
        productsPage.verifyProductNames().should('have.length', productCount);
    });

    it('Inserir produtos no carrinho', () => {
        // Adicionar produtos ao carrinho e atualizar a contagem
        productsPage.addToCartButton(products["Sauce Labs Backpack"].productName);
        count++;
        productsPage.addToCartButton(products["Sauce Labs Bike Light"].productName);
        count++;
        // Verificar se a quantidade de itens no carrinho é igual à contagem atualizada
        productsPage.verifyItemQuantity().should('contain', count);
    });

    it('Remover produtos no carrinho', () => {
        // Adicionar produtos ao carrinho e atualizar a contagem
        productsPage.addToCartButton(products["Sauce Labs Backpack"].productName);
        count++;
        productsPage.addToCartButton(products["Sauce Labs Bike Light"].productName);
        count++;
        // Remover um produto do carrinho e atualizar a contagem
        productsPage.removeItemButton(products["Sauce Labs Backpack"].productName);
        count--;
        // Verificar se a quantidade de itens no carrinho é igual à contagem atualizada
        productsPage.verifyItemQuantity().should('contain', count);
    });

    it('Filtro A to Z', () => {
        // Verificar se o primeiro produto exibido é o esperado
        productsPage.verifyFirstProduct().should('have.text', products["Sauce Labs Backpack"].productName);
        // Verificar se o último produto exibido é o esperado
        productsPage.verifyLastProduct().should('have.text', products["Test.allTheThings() T-Shirt (Red)"].productName);
    });

    it('Filtro Z to A', () => {
        // Aplicar o filtro Z to A
        productsPage.zToAButton();
        // Verificar se o primeiro produto exibido é o esperado
        productsPage.verifyFirstProduct().should('have.text', products["Test.allTheThings() T-Shirt (Red)"].productName);
        // Verificar se o último produto exibido é o esperado
        productsPage.verifyLastProduct().should('have.text', products["Sauce Labs Backpack"].productName);
    });

    it('Filtro price low', () => {
        // Aplicar o filtro price low
        productsPage.priceLowButton();
        // Verificar se o primeiro produto exibido é o esperado
        productsPage.verifyFirstProduct().should('have.text', products["Sauce Labs Onesie"].productName);
        // Verificar se o último produto exibido é o esperado
        productsPage.verifyLastProduct().should('have.text', products["Sauce Labs Fleece Jacket"].productName);
    });

    it('Filtro price high', () => {
        // Aplicar o filtro price high
        productsPage.priceHighButton();
        // Verificar se o primeiro produto exibido é o esperado
        productsPage.verifyFirstProduct().should('have.text', products["Sauce Labs Fleece Jacket"].productName);
        // Verificar se o último produto exibido é o esperado
        productsPage.verifyLastProduct().should('have.text', products["Sauce Labs Onesie"].productName);
    });
});