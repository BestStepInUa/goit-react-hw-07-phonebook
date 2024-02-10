import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selectors';
import ContactsFilterStyled from './ContactsFilter.styled';

const ContactsFilter = () => {
  const name = useSelector(selectFilter);

  const dispatch = useDispatch();

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
