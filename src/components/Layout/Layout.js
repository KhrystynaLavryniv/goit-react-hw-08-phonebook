import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Container } from '../ContactsForm/ContactsForm.style';

const Layout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
};
export default Layout;
