import Nav from './Nav';

describe('Nav Component', () => {
  it('renders the Nav with children', () => {
    cy.mountWithProviders(<Nav />);
    cy.getByDataCy('nav').should('exist');
  });
});
