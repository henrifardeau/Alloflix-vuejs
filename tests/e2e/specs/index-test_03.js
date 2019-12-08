// https://docs.cypress.io/api/introduction/api.html

describe('Index - Input test', () => {
  it('Input test - With search', () => {
    cy.visit('/');
    cy.get('input')
      .clear()
      .type('Robin des bois la veritable');
    cy.get('button').click();
  });

  it('Movie Detail result test', () => {
    cy.get('figure button').click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/movie/tt4032428');
    });
  });

  it('Movie Detail check', () => {
    cy.contains('h2', 'Robin des Bois, la véritable histoire');
    cy.contains('p');
  });

  it('Movie Detail Like', () => {
    cy.contains('button', 'Like!').click();
    cy.contains('button', 'Dislike!').click();
    cy.contains('button', 'Like!').click();
  });

  it('Movie Detail Localstorage', () => {
    cy.contains('button', '<').click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/');
    });
    cy.get('figure button').click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/movie/tt4032428');
    });
    cy.contains('button', 'Dislike!');
  });
});
