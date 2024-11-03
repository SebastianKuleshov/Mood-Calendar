import Header from './Header';

describe('Nav Component', () => {
  it('renders the Header with children', () => {
    cy.mountWithProviders(<Header />);
    cy.getByDataCy('header').should('exist');
  });
});
