import { filterContacts } from '../../redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

const Filter = () => {
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const handlerFilterChange = event => {
    dispatch(filterContacts(event.currentTarget.value));
  };

  return (
    <>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          type="text"
          name="filter"
          label="Find contacts by name"
          value={filter}
          autoComplete="off"
          onChange={handlerFilterChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </Grid>
    </>
  );
};

export default Filter;
