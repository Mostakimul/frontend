import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../../components/form/FormikControl';
import { Container } from '../../components/styles/Container.styles';
import { H2, P } from '../../components/styles/Element.styles';
import {
  ButtonSubmit,
  FormFieldContainer,
} from '../../components/styles/Form.styles';

const Login = () => {
  // initial values
  const initialValues = {
    email: '',
    password: '',
  };
  // validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format!')
      .required('Please enter your email!'),
    password: Yup.string().required('Please enter your password!'),
  });
  // submit function
  onsubmit = (values) => {
    console.log('formData ', values);
  };
  return (
    <Container>
      <H2>Login</H2>
      <P>Please enter your information to login</P>
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

export default Login;
