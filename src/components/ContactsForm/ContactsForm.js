import { useState } from 'react';
import {
  useGetContactsQuery,
  useAddContactsMutation,
} from '../../redux/contactsSlice';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function ContactsForm() {
  let navigate = useNavigate();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data: contacts } = useGetContactsQuery();
  const [addContact] = useAddContactsMutation();

  const handlerInputChange = e => {
    switch (e.target.name) {
      case 'name':
        return setName(e.target.value);
      case 'number':
        return setNumber(e.target.value);
      default:
        throw new Error();
    }
  };

  const handlerSubmitUser = e => {
    e.preventDefault();
    const contact = {
      name,
      number,
    };
    handlerSubmitUserForm(contact);
    reset();
    console.log(contact);
    navigate('/contacts');
  };

  const handlerSubmitUserForm = contact => {
    contacts.some(
      contactItem =>
        contactItem.name.toLocaleLowerCase() ===
        contact.name.toLocaleLowerCase()
    )
      ? alert(`${contact.name} is already in contacts`)
      : addContact({ name, number });
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <Container
        component="main"
        sx={{
          marginTop: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h2" variant="h6">
          New contact
        </Typography>
        <Box
          component="form"
          onSubmit={handlerSubmitUser}
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Form onSubmit={handlerSubmitUser}> */}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="off"
                name="name"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                type="text"
                value={name}
                onChange={handlerInputChange}
                // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="number"
                label="Phone"
                name="number"
                autoComplete="off"
                type="tel"
                value={number}
                onChange={handlerInputChange}
                // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add contact
          </Button>
          {/* </Form> */}
        </Box>
      </Container>
    </>
  );
}
