import styled from 'styled-components';

export const NavContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  gap: 10px;
`;

export const NavItem = styled.li`
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffffff;
    cursor: pointer;
    border-radius: 10px;
    transition: background-color 0.3s;
    width: 85px;
    padding: 10px 0;
    gap: 3px;

    &:hover {
      background-color: #4a4a4a;
    }

    &.active {
      background-color: #4a4a4a;
    }
    span {
      font-size: 14px;
      font-weight: 400;
    }
  }
`;
