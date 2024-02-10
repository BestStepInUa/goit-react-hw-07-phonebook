// import { useDispatch } from 'react-redux';
// import { delContact } from '../../../redux/contactsSlice';
import ContactItemStyled from './ContactItem.styled';

const ContactItem = ({ contact: { id, name, number } }) => {
  // const dispatch = useDispatch();
  return (
    <ContactItemStyled>
      <p>
        {name}: <span>{number}</span>
      </p>
      <button>Delete</button>
      {/* <button onClick={() => dispatch(delContact(id))}>Delete</button> */}
    </ContactItemStyled>
  );
};

export default ContactItem;
