import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice';
import ContactsFilterStyled from './ContactsFilter.styled';
import { selectFilter } from 'redux/selectors';

const ContactsFilter = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectFilter);
  return (
    <ContactsFilterStyled>
      Find contacts by name:
      <input
        type="text"
        value={name}
        onChange={evt => dispatch(changeFilter(evt.target.value))}
      />
    </ContactsFilterStyled>
  );
};

export default ContactsFilter;
