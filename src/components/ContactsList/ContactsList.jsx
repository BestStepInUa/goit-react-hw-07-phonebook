import { useDispatch, useSelector } from 'react-redux';
import ContactItem from './ContactItem';
import ContactsListSteled from './ContactsList.styled';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/operations';

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const normalizedFilter = filter.toLocaleLowerCase();
  // const visibleContacts = contacts.filter(({ name }) =>
  //   name.toLocaleLowerCase().includes(normalizedFilter)
  // );

  return (
    <ContactsListSteled>
      <h2>Contacts</h2>
      {isLoading && !error && <b>Request in progress...</b>}
      <ul>
        {contacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </ContactsListSteled>
  );
};

export default ContactsList;
