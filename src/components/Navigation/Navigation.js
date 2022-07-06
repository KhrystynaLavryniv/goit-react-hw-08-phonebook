// import { Container } from './Navigation.styled';
import { Link } from './Navigation.styled';
import Container from '@mui/material/Container';
import UserMenu from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';

export const Navigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottom: '1px black solid',
        alignItems: 'center',
      }}
    >
      <Link to="/">Home</Link>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        {isLoggedIn && <Link to="/contacts">Contacts</Link>}
        {isLoggedIn ? <UserMenu /> : <Link to="/login">Login</Link>}
      </Container>
    </Container>
  );
};
