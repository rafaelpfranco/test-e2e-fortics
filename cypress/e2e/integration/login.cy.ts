import loginPage from "../../support/PageObjects/loginPage";
import * as users from "../fixtures/users.json";

const user: { username: string; password: string }[] = users;

describe('Teste com Cypress e TypeScript', () => {
  const baseUrl: string | null = Cypress.config().baseUrl;
  
  beforeEach(() => {
    console.log(baseUrl)
    cy.visit(baseUrl)
    })

    it('Deve visitar uma página e verificar o título', () => {
      cy.title().should('include', 'Example Domain');
    });
  });