import styled from 'styled-components';

export const ContentContainer = styled.div`
  background-color: #a1a1aa;
  padding: 20px;
  width: 400px;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: fit-content;
  height: fit-content;
`;

export const Table = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  tbody {
    max-height: 350px;
    overflow-y: auto;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
  height: 55px;
  input {
    flex: 2;
    padding: 8px 30px;
    background-color: #d3d3d3;
    color: #575757;
    border: none;
    font-size: 20px;
    height: 100%;
    width: 700px;
  }
`;

export const EventButton = styled.button`
  padding: 8px;
  border: none;
  color: #575757;
  width: 240px;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    filter: brightness(0.95);
  }
  height: 100%;
`;

export const EmoteMenu = styled.div`
  position: absolute;
  background-color: #a1a1aa;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: ${(props) => (props.visible ? 'block' : 'none')};
`;

export const EmoteOption = styled.div`
  padding: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }
`;

export const DeleteButton = styled.button`
  border: none;
  cursor: pointer;
  background: none;
  height: fit-content;
  width: fit-content;
  &:hover {
    filter: brightness(0.95);
  }
`;

export const TableHeader = styled.th`
  background-color: #4a4a4a;
  color: white;
  padding: 15px;
  font-weight: bold;
  font-size: 16px;
  width: 100%;
  padding-right: 95px;
`;
