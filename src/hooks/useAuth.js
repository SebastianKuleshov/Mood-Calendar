import useLocalStorage from './useLocalStorage';

const useAuth = () => {
  const { value: users, setLocalStorage } = useLocalStorage('users', []);
  const { value: isAuth, setLocalStorage: setIsAuth } = useLocalStorage('isAuth', false);
  const signIn = ({ email, password }) => {
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      setIsAuth(true);
      alert('You are logged in');
      return user;
    }
    alert('Invalid username or password');
    return null;
  };

  const signUp = ({ email, password }) => {
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      alert('User already exists');
      return null;
    }
    const newUser = { email, password };
    setLocalStorage([...users, newUser]);
    setIsAuth(true);
    alert('You are signed up');
    return newUser;
  };

  const signOut = () => {
    alert('You are logged out');
    setIsAuth(false);
  };

  return { users, signIn, signOut, signUp, isAuth };
};

export default useAuth;
