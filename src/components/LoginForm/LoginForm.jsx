import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { logIn } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('⚠️'),
    password: Yup.string().required('⚠️'),
  });

  const handleSubmit = (values, action) => {
    dispatch(logIn(values));
    action.resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.boxLogForm}>
        <div className={css.divField}>
          <label className={css.labelLogForm}>
            Email:
            <Field className={css.fieldLogForm} type="email" name="email" />
            <ErrorMessage className={css.errorLoginForm} name="email" component="div" />
          </label>
          <label className={css.labelLogForm}>
            Password:
            <Field
              className={css.fieldLogForm}
              type="password"
              name="password"
            />
            <ErrorMessage className={css.errorLoginForm} name="password" component="div" />
          </label>
        </div>

        <button className={css.btnLogIn} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
