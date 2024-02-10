import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { addContact } from '../../redux/operations';
import { selectContacts } from '../../redux/selectors';
import AddContactFormStyled from './Addcontactform.styled.';

const INITIAL_STATE = {
  name: '',
  phone: '',
};

const AddContactForm = () => {
  const [state, setState] = useState(INITIAL_STATE);
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handelChange = evt => {
    const { name, value } = evt.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handelFormSubmit = evt => {
    evt.preventDefault();
    const { name, phone } = state;
    const isDublicated = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isDublicated) {
      toast.error(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ name, phone }));
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
        Phone
        <input
          type="tel"
          name="phone"
          value={state.phone}
          required
          onChange={handelChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </AddContactFormStyled>
  );
};

export default AddContactForm;
