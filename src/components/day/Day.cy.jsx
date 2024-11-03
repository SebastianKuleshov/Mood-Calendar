import Day from './Day';

describe('Day Component', () => {
  it('renders the Day with children', () => {
    cy.mountWithProviders(<Day>1</Day>);
    cy.getByDataCy('day-container').should('exist');
  });
});
