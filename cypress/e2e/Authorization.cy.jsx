describe('Authorization', () => {
  beforeEach(() => {
    cy.visitApp('/');
    cy.getByDataCy('login-button').click();
  });

  it('renders login form ', () => {
    cy.getByDataCy('sign-in-page').should('exist');
  });
});
