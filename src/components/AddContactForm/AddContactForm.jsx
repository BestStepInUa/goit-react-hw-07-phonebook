import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { addContact } from '../../redux/contactsSlice';
import AddContactFormStyled from './Addcontactform.styled.';
import { selectContacts } from 'redux/selectors';

const INITIAL_STATE = {
  name: '',
  number: '',
};

const AddContactForm = () => {
  const contacts = useSelector(selectContacts);
  const [state, setState] = useState(INITIAL_STATE);
  const dispatch = useDispatch();

  const handelChange = evt => {
    const { name, value } = evt.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handelFormSubmit = evt => {
    evt.preventDefault();
    const { name, number } = state;
    const isDublicated = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isDublicated) {
      toast.error(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setState(INITIAL_STATE);
  };

  return (
    <AddContactFormStyled onSubmit={handelFormSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={state.name}
          required
          onChange={handelChange}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          value={state.number}
          required
          onChange={handelChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </AddContactFormStyled>
  );
};

export default AddContactForm;
