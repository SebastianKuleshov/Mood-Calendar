import EmojiPaletteModal from './PaletteModal';

describe('EmojiPaletteModal Component', () => {
  it('renders the EmojiPaletteModal with children', () => {
    cy.mountWithProviders(<EmojiPaletteModal isOpen onClose={() => {}} />);
    cy.getByDataCy('modal-container').should('exist');
  });
});
