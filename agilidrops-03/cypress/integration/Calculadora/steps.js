
When(/^desejo realizar uma "([^"]*)"$/, (operacaoDesejada) => {
  let operador;
  switch(operacaoDesejada){
    case 'soma':
      operador = '+';
      break;
    case 'subtração':
      operador = '-';
      break;
    case 'multiplicação':
      operador = 'x';
      break;
    case 'divisão':
      operador = '÷';
      break;
    default:
      break;
  }
	Cypress.env('operador',operador)
});

When(/^informar os valores "([^"]*)" e "([^"]*)"$/, (primeiroValor, segundoValor) => {
  cy.get('div[class="button"], .button.zero').as('valores');
  cy.get('.operator').as('operadores');
  // informar valor1
  // clicar na operacao desejada (soma)
  // informar o valor 2
  cy.get('@valores').contains(primeiroValor).click()
  cy.get('@operadores').contains(`${Cypress.env('operador')}`).click()
  cy.get('@valores').contains(segundoValor).click()
});

When(/^finalizar a conta$/, () => {
	cy.get('@operadores').contains('=').click()
});

Then(/^devo obter o resultado "([^"]*)"$/, (resultadoEsperado) => {
	cy.get('.display').as('resultado')

  cy.get('@resultado')
    .invoke('text')
    .should('be.equal', String(resultadoEsperado))
});

