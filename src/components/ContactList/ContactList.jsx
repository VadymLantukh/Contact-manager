import { useDispatch, useSelector } from 'react-redux';
import { BsTelephoneFill } from 'react-icons/bs';

import {
  selectContacts,
  selectFindingContacts,
} from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const contactsFilter = useSelector(selectFindingContacts);

  return contacts.length > 0 ? (
    <ul className={css.contactsList}>
      {contactsFilter.map(contact => (
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
  ) : (
    <p className={css.warningList}>
      You havent added anything to the list of conacts yet
    </p>
  );
};

export default ContactList;
