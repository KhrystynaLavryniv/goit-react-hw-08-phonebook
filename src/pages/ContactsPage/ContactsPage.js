import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
import Button from '@mui/material/Button';
import { Link } from './ContactsPage.styled';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const ContactsPage = () => {
  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Filter />
          <ContactList />
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            <Link to="/contacts/create">Add contact</Link>
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default ContactsPage;
