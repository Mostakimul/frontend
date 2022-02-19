import { Form, Formik } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import FormikControl from '../../components/form/FormikControl';
import { Container } from '../../components/styles/Container.styles';
import { H2, P, Spinner } from '../../components/styles/Element.styles';
import {
  ButtonSubmit,
  FormFieldContainer,
} from '../../components/styles/Form.styles';
import { register, reset } from '../../features/auth/authSlice';

const Register = () => {
  // initial values
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  // validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required('Please enter your name!'),
    email: Yup.string()
      .email('Invalid email format!')
      .required('Please enter your email!'),
    password: Yup.string().required('Please enter your password!'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Password must match!')
      .required('Please enter confirm password!'),
  });

  // navigate and dispatch
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth,
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate('/');
    }

    return () => {
      dispatch(reset());
    };
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  // submit function
  onsubmit = (values) => {
    const userData = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    dispatch(register(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Container>
      <H2>Register</H2>
      <P>Please create an account</P>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onsubmit}
      >
        {(formik) => (
          <Form>
            <FormFieldContainer>
              <FormikControl
                control="input"
                type="text"
                label="Name"
                name="name"
                placeholder="Enter your name"
              />
              <FormikControl
                control="input"
                type="email"
                label="Email"
                name="email"
                placeholder="Enter your email"
              />
              <FormikControl
                control="input"
                type="password"
                label="Password"
                name="password"
                placeholder="Enter your password"
              />
              <FormikControl
                control="input"
                type="password"
                label="Confirm password"
                name="confirmPassword"
                placeholder="Confirm your password"
              />
            </FormFieldContainer>
            <ButtonSubmit type="submit" disabled={!formik.isValid}>
              Submit
            </ButtonSubmit>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Register;
