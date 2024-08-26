import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { addContact } from '../../redux/contacts/operations';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    number: Yup.string().required('Required'),
  });

  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    dispatch(addContact(values));
    action.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.boxContactForm}>
        <label className={css.labelContactForm}>
          Name
          <Field className={css.fieldContactForm} type="text" name="name" />
          <ErrorMessage name="name" component="div" />
        </label>
        <label className={css.labelContactForm}>
          Number
          <Field className={css.fieldContactForm} type="tel" name="number" />
          <ErrorMessage name="number" component="div" />
        </label>

        <button className={css.btnConForm} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
