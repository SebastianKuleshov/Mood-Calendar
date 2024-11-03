import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #a1a1aa;
  gap: 20px;
  padding: 30px;
  border-radius: 8px;
  width: 600px;
  height: 500px;
  margin: 0 auto;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  p {
    font-size: 20px;
    text-align: center;
    color: #f6f6f6;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  background-color: #d3d3d3;
  font-size: 16px;
  color: #555;
  outline: none;
  &::placeholder {
    color: #aaa;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  background-color: #d3d3d3;

  font-family: inherit;
  font-size: 16px;
  color: #555;
  resize: vertical;
  outline: none;
  height: 100%;
  &::placeholder {
    color: #aaa;
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  gap: 10px;
  padding: 12px 24px;
  align-items: center;
  border: none;
  border-radius: 20px;
  background-color: #d3d3d3;
  font-size: 16px;
  color: #333;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    filter: brightness(0.95);
  }
  &:active {
    transform: scale(0.97);
  }
`;
