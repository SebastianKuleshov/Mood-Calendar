import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #a1a1aa;
  margin: 5px 16px 25px 5px;
  border-radius: 8px;
  color: white;
  padding-inline: 12px;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  svg {
    color: black;
    cursor: pointer;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
