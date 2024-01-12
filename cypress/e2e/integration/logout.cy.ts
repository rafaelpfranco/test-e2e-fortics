// Importação dos módulos necessários
import helpTests from "../../support/PageObjects/helpTests";
import * as users from "../fixtures/users.json";
import * as products from "../fixtures/products.json";
import productDetailsPage from "../../support/PageObjects/productDetailsPage";
import menuPage from "../../support/PageObjects/menuPage";

// Definição dos tipos de dados para os usuários e produtos
const user: { username: string; password: string }[] = users;

// Descrição do caso de teste
describe('User Case - logout', () => {
    const baseUrl: string | null = Cypress.config().baseUrl;
    
    // Configuração antes de cada teste
    beforeEach(() => {
        cy.visit(`${baseUrl}/index.html`);
        helpTests.login(users.performance_glitch_user.username, users.performance_glitch_user.password);
    })

    // Teste para verificar se logout está funcionando
    it('Logout - Happy day', () => {
        menuPage.openMenuButton();
        menuPage.logoutButton();
        cy.url().should('eq', `${baseUrl}/index.html`);
    });
});