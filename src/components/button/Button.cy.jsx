import Button from './Button';

describe('Button Component', () => {
  it('renders the button with children', () => {
    cy.mount(<Button>text</Button>);
    cy.getByDataCy('button').should('contain', 'text');
  });
});
