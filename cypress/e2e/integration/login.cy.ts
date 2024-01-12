// Importação dos módulos necessários
import loginPage from "../../support/PageObjects/loginPage";
import productsPage from "../../support/PageObjects/productsPage";
import * as users from "../fixtures/users.json";
import * as errors from "../fixtures/errors.json";

// Definindo os dados de usuário e erro a partir dos arquivos JSON
const user: { username: string; password: string }[] = users;
const error: { username: string; password: string }[] = errors;

// Descrição dos casos de teste
describe('Caso de Uso do Usuário - Login', () => {
  const baseUrl: string | null = Cypress.config().baseUrl;
  
  beforeEach(() => {
    // Visitar a página inicial antes de cada teste
    cy.visit(`${baseUrl}/index.html`);
  })

  it('Login - Happy Day', () => {
    // Preencher os campos para login
    loginPage.fillUsernameField(users.standard_user.username);
    loginPage.fillPasswordField(users.standard_user.password);
    loginPage.clickLoginButton();
    // Verificar se a URL é igual à página de produtos
    cy.url().should('eq', `${baseUrl}/inventory.html`);
    // Verificar se o título da página contém "Products"
    productsPage.verifyProductPageTitle().should('contain', 'Products');
  });

  it('Login com usuário bloqueado', () => {
    // Preencher os campos para login
    loginPage.fillUsernameField(users.locked_out_user.username);
    loginPage.fillPasswordField(users.locked_out_user.password);
    loginPage.clickLoginButton();
    // Verificar se a URL é igual à página inicial
    cy.url().should('eq', `${baseUrl}/index.html`);
    // Verificar se a mensagem de erro contém o erro do usuário bloqueado
    loginPage.verifyErrorMessage().should('contain', errors.locked_out_user.error);
  });


  it('Login com nome de usuário incorreto', () => {
    // Preencher os campos para login incorretamente
    loginPage.fillUsernameField(users.incorrected_user.username);
    loginPage.fillPasswordField(users.incorrected_user.password);
    loginPage.clickLoginButton();
    // Verificar se a URL é igual à página inicial
    cy.url().should('eq', `${baseUrl}/index.html`);
    // Verificar se a mensagem de erro contém o erro de nome de usuário incorreto
    loginPage.verifyErrorMessage().should('contain', errors.wrong_username.error);
  });


  it('Login com senha incorreta', () => {
    // Preencher o campo de nome de usuário com o nome de usuário do usuário com senha incorreta
    loginPage.fillUsernameField(users.incorrected_password.username);
    loginPage.fillPasswordField(users.incorrected_password.password);
    loginPage.clickLoginButton();
    // Verificar se a URL é igual à página inicial
    cy.url().should('eq', `${baseUrl}/index.html`);
    // Verificar se a mensagem de erro contém o erro de senha incorreta
    loginPage.verifyErrorMessage().should('contain', errors.wrong_password.error);
  });

  it('Login com nome de usuário vazio', () => {
    // Preencher o campo de senha com a senha do usuário com nome de usuário vazio
    loginPage.fillPasswordField(users.empty_username.password);
    loginPage.clickLoginButton();
    // Verificar se a URL é igual à página inicial
    cy.url().should('eq', `${baseUrl}/index.html`);
    // Verificar se a mensagem de erro contém o erro de nome de usuário vazio
    loginPage.verifyErrorMessage().should('contain', errors.empty_username.error);
  });

  it('Login com senha vazia', () => {
    // Preencher o campo de nome de usuário com o nome de usuário do usuário com senha vazia
    loginPage.fillUsernameField(users.empty_password.username);
    loginPage.clickLoginButton();
    // Verificar se a URL é igual à página inicial
    cy.url().should('eq', `${baseUrl}/index.html`);
    // Verificar se a mensagem de erro contém o erro de senha vazia
    loginPage.verifyErrorMessage().should('contain', errors.empty_password.error);
  });

});