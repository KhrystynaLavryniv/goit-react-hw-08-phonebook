import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
import { useGetContactsQuery } from '../../redux/contactsSlice';
import Button from '@mui/material/Button';
import { Link } from './ContactsPage.styled';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useEffect } from 'react';

const ContactsPage = () => {
  const { data = [], refetch } = useGetContactsQuery();

  useEffect(() => {
    refetch();
  });
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
          {data.length > 0 ? (
            <Filter />
          ) : (
            <p>Phonebook does not contain any saved contacts</p>
          )}

          <ContactList contacts={data} />

          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            <Link to="/contacts/create">Add contact</Link>
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default ContactsPage;
