import styled from 'styled-components';

export const StyledDay = styled.div`
  display: flex;
  justify-content: end;
  align-items: flex-start;
  cursor: pointer;
  min-width: 130px;
  min-height: 70px;
  background-color: #d3d3d3;
  background-color: ${({ $background }) => $background || '#d3d3d3'};

  padding: 5px 8px;
  border-radius: 5px;
  &:hover {
    border: 1px solid black;
  }
  &.disabled {
    filter: brightness(0.7);
    cursor: not-allowed;
    pointer-events: none;
    &:hover {
      border: none;
    }
  }
`;
