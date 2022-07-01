import { Item, ItemBtn, Contacts } from './ContactList.style';
import { useDeleteContactsMutation } from '../../redux/contactsSlice';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from '../../redux/contactsSlice';

const ContactList = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const { data: contacts } = useGetContactsQuery({
    refetchOnMountOrArgChange: isLoggedIn,
  });

  const [deleteContacts, { isLoading: isDeleting }] =
    useDeleteContactsMutation();

  const filter = useSelector(state => state.filter);
  const normalizedFilter = filter.toLowerCase();

  let filterVisibleContacts = [];

  if (contacts) {
    filterVisibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  return (
    <>
      <Contacts>
        {filterVisibleContacts < 1 && (
          <p>Phonebook does not contain any saved contacts</p>
        )}
        {filterVisibleContacts.map(({ id, name, number }) => (
          <Item key={id}>
            {name}: {number}
            <ItemBtn
              type="button"
              onClick={() => deleteContacts(id)}
              disabled={isDeleting}
            >
              Delete
            </ItemBtn>
          </Item>
        ))}
      </Contacts>
    </>
  );
};

export default ContactList;
