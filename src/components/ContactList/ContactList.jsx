import { useDispatch, useSelector } from 'react-redux';
import { BsTelephoneFill } from 'react-icons/bs';

import { selectFindingContacts } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFindingContacts);

  return (
    <ul className={css.contactsList}>
      {contacts.map(contact => (
        <li className={css.contactsItem} key={contact.id}>
          <div className={css.boxIcon}>
            <span>
              <BsTelephoneFill className={css.iconContact} />
            </span>
            {contact.name}: {contact.number}
          </div>
          <button
            className={css.btnDelete}
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
