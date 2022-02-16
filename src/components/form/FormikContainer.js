import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { ButtonSubmit, FormFieldContainer } from '../styles/Form.styles';
import FormikControl from './FormikControl';

const FormikContainer = () => {
  const dropdwonOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Male', value: 'male' },
    { key: 'Female', value: 'female' },
    { key: 'Other', value: 'other' },
  ];
  const radioOptions = [
    { key: 'Male', value: 'male' },
    { key: 'Female', value: 'female' },
    { key: 'Other', value: 'other' },
  ];
  const checkboxOptions = [
    { key: 'Select 1', value: 's1' },
    { key: 'Select 2', value: 's2' },
    { key: 'Select 3', value: 's3' },
  ];
  const initialValues = {
    name: '',
    email: '',
    password: '',
    gender: '',
    radioGender: '',
    checkboxOption: [],
    birthDate: new Date(),
    description: '',
  };
  const validationSchema = Yup.object({
    name: Yup.string().required('Please enter your name!'),
    email: Yup.string()
      .email('Invalid email format!')
      .required('Please enter your email!'),
    password: Yup.string().required('Please enter your password!'),
    gender: Yup.string().required('Please select your gender!'),
    radioGender: Yup.string().required('Please select your radio gender!'),
    checkboxOption: Yup.array().min(1, 'Please select any!'),
    birthDate: Yup.date().required('Please enter your birth date!'),
    description: Yup.string().required('Please enter your description!'),
  });
  onsubmit = (values) => {
    const { birthDate, ...others } = values;
    let stringBirth = birthDate.toLocaleString();
    const formData = {
      stringBirth,
      ...others,
    };
    console.log('formData ', formData);
  };

  return (
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
              control="select"
              label="Gender"
              name="gender"
              options={dropdwonOptions}
            />
            <FormikControl
              control="radio"
              label="Radio Gender"
              name="radioGender"
              options={radioOptions}
            />
            <FormikControl
              control="checkbox"
              label="Select any check"
              name="checkboxOption"
              options={checkboxOptions}
            />
            <FormikControl control="date" label="Birth Date" name="birthDate" />

            <FormikControl
              control="textarea"
              label="Description"
              name="description"
              rows="8"
              placeholder="Enter your description"
            />
            <ButtonSubmit type="submit" disabled={!formik.isValid}>
              Submit
            </ButtonSubmit>
          </FormFieldContainer>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
