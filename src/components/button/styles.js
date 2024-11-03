import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: #575757;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 30px;
  color: white;
  transition: all 0.3s;
  &:hover {
    filter: brightness(0.95);
  }
  &:active {
    transform: scale(0.97);
  }
`;
