import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactItem from './ContactItem';
import { fetchContacts } from '../../redux/operations';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from '../../redux/selectors';
import ContactsListSteled from './ContactsList.styled';

const ContactsList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ContactsListSteled>
      <h2>Contacts</h2>
      {isLoading && !error && <b>Request in progress...</b>}
      <ul>
        {visibleContacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </ContactsListSteled>
  );
};

export default ContactsList;
