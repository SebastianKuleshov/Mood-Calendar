import { useState } from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import { useAuthContext } from '../../providers/AuthProvider';
import Button from '../button/Button';
import Nav from '../nav/Nav';
import EmojiPaletteModal from '../palette-modal/PaletteModal';
import { ButtonsContainer, HeaderContainer } from './styles';

const Header = () => {
  const { signOut, isAuth } = useAuthContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClose = () => {
    setIsModalOpen(false);
  };
  const onOpen = () => {
    setIsModalOpen(true);
  };
  const authButton = isAuth ? (
    <Button data-cy="logout-button" onClick={signOut}>
      Logout
    </Button>
  ) : (
    <Link to={'/sign-in'} data-cy="login-button">
      <Button>Login</Button>
    </Link>
  );

  return (
    <HeaderContainer data-cy="header">
      <EmojiPaletteModal isOpen={isModalOpen} onClose={onClose} />
      <Link to={'/'}>Mood Calendar</Link>
      <Nav />
      <ButtonsContainer>
        <IoSettingsOutline size={30} onClick={onOpen} />
        {authButton}
      </ButtonsContainer>
    </HeaderContainer>
  );
};

export default Header;
