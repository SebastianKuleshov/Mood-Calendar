import React, { useState } from 'react';

import useEmojiPalette from '../../hooks/useEmojiPalette';
import { CloseButton, ColorInput, EmoteItem, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from './styles';

const EmojiPaletteModal = ({ isOpen, onClose }) => {
  const { emotes, handleEmojiChange } = useEmojiPalette();
  const [selectedEmote, setSelectedEmote] = useState(null);
  const [newColor, setNewColor] = useState('');

  const handleColorChange = (e) => {
    setNewColor(e.target.value);
  };

  const handleSave = () => {
    if (selectedEmote && newColor) {
      handleEmojiChange({ oldColor: selectedEmote.color, newColor });
      setSelectedEmote(null);
      setNewColor('');
      onClose();
      window.location.reload();
    }
  };

  return (
    isOpen && (
      <Modal data-cy="modal-container">
        <ModalContent>
          <ModalHeader>
            <h2>Change Emoji Color</h2>
            <CloseButton onClick={onClose}>X</CloseButton>
          </ModalHeader>
          <ModalBody>
            {emotes.map((emote) => (
              <EmoteItem
                key={emote.emote}
                onClick={() => setSelectedEmote(emote)}
                style={{ backgroundColor: emote.color }}
              >
                {emote.emote}
              </EmoteItem>
            ))}
            {selectedEmote && (
              <div>
                <h3>Change color for {selectedEmote.emote}</h3>
                <ColorInput type="color" value={newColor} onChange={handleColorChange} />
              </div>
            )}
          </ModalBody>
          <ModalFooter>
            <button onClick={handleSave}>Save</button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
  );
};

export default EmojiPaletteModal;
