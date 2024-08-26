import { useDispatch, useSelector } from 'react-redux';
import { selectFindingContacts } from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from '../../redux/contacts/operations';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFindingContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={css.contactsList}>
      {contacts.map(contact => (
        <li className={css.contactsItem} key={contact.id}>
          {contact.name}: {contact.number}
          <button className={ css.btnDelete} onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
