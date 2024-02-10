import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/operations';
import ContactItemStyled from './ContactItem.styled';

const ContactItem = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();
  return (
    <ContactItemStyled>
      <p>
        {name}: <span>{phone}</span>
      </p>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </ContactItemStyled>
  );
};

export default ContactItem;
