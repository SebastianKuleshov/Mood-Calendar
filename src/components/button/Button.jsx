import { StyledButton } from './styles';

const Button = ({ children, ...props }) => {
  return (
    <StyledButton {...props} data-cy="button">
      {children}
    </StyledButton>
  );
};

export default Button;
