import styled from 'styled-components';

import loginImage from '../../assets/login-bg.png';

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  background-color: #a1a1aa;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  width: 1024px;
  overflow: hidden;
`;

export const FormContainer = styled.div`
  color: #f6f6f6;
  font-size: 48px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 40px;
  width: 50%;
`;

export const ImageContainer = styled.div`
  background: url(${loginImage}) no-repeat center center/cover;
  flex-grow: 1;
  color: #d3d3d3;
  backdrop-filter: blur(5px);
  position: relative;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  flex-basis: 50%;

  &::before {
    content: '';
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }

  p {
    position: relative;
    z-index: 3;
    font-size: 32px;
    padding: 35px 50px 100px 50px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 320px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    height: 60px;
    width: 50%;
  }
`;

export const Input = styled.input`
  width: 320px;
  padding: 20px;
  margin: 5px 0;
  border: none;
  border-radius: 4px;
  background-color: #d3d3d3;
  font-size: 16px;
  color: #555;
  outline: none;

  &::placeholder {
    color: #575757;
  }
`;
