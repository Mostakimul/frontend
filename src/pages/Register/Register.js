import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../../components/form/FormikControl';
import { Container } from '../../components/styles/Container.styles';
import { H2, P } from '../../components/styles/Element.styles';
import {
  ButtonSubmit,
  FormFieldContainer,
} from '../../components/styles/Form.styles';

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
  // submit function
  onsubmit = (values) => {
    console.log('formData ', values);
  };
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
