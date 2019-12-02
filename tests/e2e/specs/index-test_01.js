// https://docs.cypress.io/api/introduction/api.html

describe('Index - Test', () => {
  it('Routing test', () => {
    cy.visit('/unknow');
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/');
    });
  });

  it('Routing test - With param', () => {
    cy.visit('/Robin des bois');
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/');
    });
  });

  it('Title test', () => {
    cy.visit('/');
    cy.contains('h1', 'Alloflix');
  });

  it('Input test', () => {
    cy.visit('/');
    cy.get('input');
  });
});
