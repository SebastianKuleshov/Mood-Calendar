import { FooterContainer } from './styles';

const Footer = () => {
  return (
    <FooterContainer data-cy="footer">
      <span>
        {'© 2024 by Skoogi'}
        <br />
        {'All rights reserved'}
      </span>
    </FooterContainer>
  );
};

export default Footer;
