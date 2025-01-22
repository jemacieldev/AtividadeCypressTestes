/// <reference types="cypress" />

describe("Teste", () => {
    beforeEach(() => {
      cy.visit("https://agenda-contatos-react.vercel.app/");
      cy.get("form > input").should("have.length", 3);
    });
  
    it("Adicionar contato", () => {
      cy.get('form > input[type="text"]').type("Matheus");
      cy.get('form > input[type="email"]').type("matheus@teste.com");
      cy.get('form > input[type="tel"]').type("31 991580230");
      cy.get(".adicionar").click();
    });
  
    it("Editar contato", () => {
        cy.get(".edit").first().click();
        cy.get('form > input[type="text"]').clear().type("Roger");
        cy.get('form > input[type="email"]').clear().type("roger@teste.com");
        cy.get('form > input[type="tel"]').clear().type("11 991942570");
        cy.get(".alterar").click();
      });
      

    it("Deletar contato", () => {
      cy.get(".delete").first().click();
    });
  });
  