import { useDispatch, useSelector } from 'react-redux';
import { selectFindingContacts } from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from '../../redux/contacts/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFindingContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
