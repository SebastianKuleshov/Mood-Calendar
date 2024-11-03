describe('ContactUsPage', () => {
  beforeEach(() => {
    cy.visitApp('/');
    cy.getByDataCy('contact-us').click();
  });

  it('renders the contac-us-form ', () => {
    cy.getByDataCy('contact-us-form').should('exist');
  });
});
