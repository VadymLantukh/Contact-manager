import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import { selectIsLoading } from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import css from './Contacts.module.css';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.boxContacts}>
      <h2 className={css.titleCon}>PhoneBook</h2>
      <ContactForm />
      <h2 className={css.titleConList}>Contacts</h2>
      <Filter />
      {isLoading && <p>Loading contacts</p>}
      <ContactList />
    </div>
  );
};

export default Contacts;
