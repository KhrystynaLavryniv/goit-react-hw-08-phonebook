import { Item, ItemBtn, Contacts } from './ContactList.style';
import { useDeleteContactsMutation } from '../../redux/contactsSlice';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from '../../redux/contactsSlice';
import toast from 'react-hot-toast';

const ContactList = () => {
  const token = useSelector(state => state.auth.token);

  const { data: contacts } = useGetContactsQuery({
    refetchOnMountOrArgChange: token,
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
              onClick={() =>
                deleteContacts(id) && toast.success('Contact deleted')
              }
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
