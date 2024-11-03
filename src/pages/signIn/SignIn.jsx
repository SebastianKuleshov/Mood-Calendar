import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import Button from '../../components/button/Button';
import { useAuthContext } from '../../providers/AuthProvider';
import { ButtonContainer, Container, FormContainer, ImageContainer, Input } from './styles';

const SignIn = () => {
  const { signIn, isAuth } = useAuthContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  if (isAuth) {
    return <Navigate to="/" replace={true} />;
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    signIn({ email, password });
  };
  const handleRegister = () => {
    navigate('/sign-up');
  };

  return (
    <Container data-cy="sign-in-page">
      <FormContainer>
        <h1>Login</h1>
        <Input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <ButtonContainer>
          <Button onClick={handleRegister}>Register</Button>

          <Button onClick={handleSubmit}>Login</Button>
        </ButtonContainer>
      </FormContainer>
      <ImageContainer>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type
        </p>
      </ImageContainer>
    </Container>
  );
};

export default SignIn;
