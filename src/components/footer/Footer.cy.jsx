import Footer from './Footer';

describe('Footer Component', () => {
  it('renders the Footer with children', () => {
    cy.mount(<Footer />);
    cy.getByDataCy('footer').should('exist');
  });
});
