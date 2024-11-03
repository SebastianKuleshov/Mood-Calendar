import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
`;

export const ModalBody = styled.div`
  padding: 20px 0;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid #ccc;
  padding-top: 10px;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const ColorInput = styled.input`
  margin-top: 10px;
`;

export const EmoteItem = styled.div`
  padding: 10px;
  margin: 5px 0;
  cursor: pointer;
  border-radius: 4px;
  color: white;
  text-align: center;
`;
