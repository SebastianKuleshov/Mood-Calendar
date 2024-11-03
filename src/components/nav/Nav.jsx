import { AiOutlineContacts, AiOutlineHome } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

import { NavContainer, NavItem } from './styles';

const Nav = () => {
  return (
    <NavContainer data-cy="nav">
      <NavItem>
        <NavLink to="/" data-cy="home">
          <AiOutlineHome size={20} color="#fff" />
          <span>Home</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/contact-us" data-cy="contact-us">
          <AiOutlineContacts size={20} color="#fff" />
          <span>Contact Us</span>
        </NavLink>
      </NavItem>
    </NavContainer>
  );
};

export default Nav;
