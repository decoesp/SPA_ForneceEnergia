// cypress/integration/app_spec.js

describe('Aplicação Clarke Energia', () => {
    it('Deve preencher o formulário e consultar fornecedores com sucesso', () => {
      cy.visit('/'); // Certifique-se de ajustar a rota se necessário
  
      // Preencher o campo de consumo mensal
      cy.get('input[type="number"]').type('30000');
  
      // Clicar no botão de consultar fornecedores
      cy.get('button').click();
  
      // Verificar se a lista de fornecedores é exibida corretamente
      cy.get('.flex.items-center.flex-col').should('be.visible');
      cy.get('.bg-white.p-4.rounded-md.shadow-md').should('have.length.greaterThan', 0);
    });
  
    it('Deve exibir mensagem de erro para consumo mensal inválido', () => {
      cy.visit('/'); // Certifique-se de ajustar a rota se necessário
  
      // Preencher o campo de consumo mensal com valor inválido
      cy.get('input[type="number"]').type('0');
  
      // Clicar no botão de consultar fornecedores
      cy.get('button').click();
  
      // Verificar se a mensagem de erro é exibida corretamente
      cy.get('p').should('contain.text', 'O consumo mensal deve ser maior que 0.');
    });
  });
  