import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #a1a1aa;
  border-radius: 8px;
  margin: 16px auto;
  padding: 20px 32px;
  width: fit-content;
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  h1 {
    font-size: 48px;
  }
  p {
    font-size: 30px;
  }
  cursor: pointer;
`;

export const CalendarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  text-align: center;
`;
