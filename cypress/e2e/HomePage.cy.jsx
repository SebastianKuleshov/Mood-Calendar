describe('HomePage', () => {
  beforeEach(() => {
    cy.visitApp('/');
  });

  it('renders the HomePage with calendar', () => {
    cy.getByDataCy('calendar').should('exist');
  });
  it('renders the HomePage with header', () => {
    cy.getByDataCy('header').should('exist');
  });
});
