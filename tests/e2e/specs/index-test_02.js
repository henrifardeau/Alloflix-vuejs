// https://docs.cypress.io/api/introduction/api.html

describe('Index - Input test', () => {
  it('Input test', () => {
    cy.visit('/');
    cy.get('input')
      .type('Robin des bois')
      .should('have.value', 'Robin des bois');
  });

  it('Input test - With search', () => {
    cy.visit('/');
    cy.get('input')
      .clear()
      .type('Robin des bois');
    cy.get('button').click();
  });

  it('Movie list result test', () => {
    cy.get('ul')
      .find('figure')
      .should('have.length', 2);
  });
});
