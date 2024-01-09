import loginPage from "../../support/PageObjects/loginPage";
import productsPage from "../../support/PageObjects/productsPage";
import * as users from "../fixtures/users.json";

const user: { username: string; password: string }[] = users;

describe('Teste com Cypress e TypeScript', () => {
  const baseUrl: string | null = Cypress.config().baseUrl;
  
  beforeEach(() => {
    cy.visit(`${baseUrl}/index.html`);
  })

    it('Login valido', () => {
      loginPage.fillUsernameField(users.standard_user.username);
      loginPage.fillPasswordField(users.standard_user.password);
      loginPage.clickLoginButton();
      cy.url().should('eq', `${baseUrl}/inventory.html`);
      productsPage.verifyProductPageTitle().should('contain', 'Products');
    });
  });