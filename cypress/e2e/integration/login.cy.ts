import loginPage from "../../support/PageObjects/loginPage";
import productsPage from "../../support/PageObjects/productsPage";
import * as users from "../fixtures/users.json";
import * as errors from "../fixtures/errors.json";

const user: { username: string; password: string }[] = users;
const error: { username: string; password: string }[] = errors;

// User Case - Login

describe('User Case - Login', () => {
  const baseUrl: string | null = Cypress.config().baseUrl;
  
  beforeEach(() => {
    cy.visit(`${baseUrl}/index.html`);
  })

  // Teste de login válido

  it('Login valido', () => {
    loginPage.fillUsernameField(users.standard_user.username);
    loginPage.fillPasswordField(users.standard_user.password);
    loginPage.clickLoginButton();
    cy.url().should('eq', `${baseUrl}/inventory.html`);
    productsPage.verifyProductPageTitle().should('contain', 'Products');
  });

  // Teste de login com usuário bloqueado

  it('Login com usuário bloqueado', () => {
    loginPage.fillUsernameField(users.locked_out_user.username);
    loginPage.fillPasswordField(users.locked_out_user.password);
    loginPage.clickLoginButton();
    cy.url().should('eq', `${baseUrl}/index.html`);
    loginPage.verifyErrorMessage().should('contain', errors.locked_out_user.error);
  });

  // Teste de login com username incorreto

  it('Login com username incorreto', () => {
    loginPage.fillUsernameField(users.incorrected_user.username);
    loginPage.fillPasswordField(users.incorrected_user.password);
    loginPage.clickLoginButton();
    cy.url().should('eq', `${baseUrl}/index.html`);
    loginPage.verifyErrorMessage().should('contain', errors.wrong_username.error);
  });

  // Teste de login com senha incorreta

  it('Login com senha incorreta', () => {
    loginPage.fillUsernameField(users.incorrected_password.username);
    loginPage.fillPasswordField(users.incorrected_password.password);
    loginPage.clickLoginButton();
    cy.url().should('eq', `${baseUrl}/index.html`);
    loginPage.verifyErrorMessage().should('contain', errors.wrong_password.error);
  });

  // Teste de login com username vazio

  it('Login com username vazio', () => {
    loginPage.fillPasswordField(users.empty_username.password);
    loginPage.clickLoginButton();
    cy.url().should('eq', `${baseUrl}/index.html`);
    loginPage.verifyErrorMessage().should('contain', errors.empty_username.error);
  });

  // Teste de login com senha vazia

  it.only('Login com senha vazia', () => {
    loginPage.fillUsernameField(users.empty_password.username);
    loginPage.clickLoginButton();
    cy.url().should('eq', `${baseUrl}/index.html`);
    loginPage.verifyErrorMessage().should('contain', errors.empty_password.error);
  });

});