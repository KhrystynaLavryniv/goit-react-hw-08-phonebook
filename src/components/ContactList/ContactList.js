import { Item, ItemBtn, Contacts } from './ContactList.style';
import { useDeleteContactsMutation } from '../../redux/contactsSlice';
import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { useGetContactsQuery } from '../../redux/contactsSlice';

const ContactList = ({ contacts }) => {
  const [deleteContacts, { isLoading: isDeleting }] =
    useDeleteContactsMutation();

  const filter = useSelector(state => state.filter);

  const filterVisibleContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  return (
    <>
      <Contacts>
        {filterVisibleContacts().map(({ id, name, number }) => (
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
