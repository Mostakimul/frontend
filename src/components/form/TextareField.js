import { ErrorMessage, Field } from 'formik';
import {
  FormErrorText,
  Textarea,
  Label,
  SingleFieldConatiner,
} from '../styles/Form.styles';

const TextareField = (props) => {
  const { label, name, ...rest } = props;

  return (
    <SingleFieldConatiner>
      <Label htmlFor={name}>{label} :</Label>
      <Field as={Textarea} name={name} {...rest}></Field>
      <ErrorMessage name={name} component={FormErrorText} />
    </SingleFieldConatiner>
  );
};

export default TextareField;
