import { ErrorMessage, Field } from 'formik';
import {
  FormErrorText,
  Label,
  Option,
  SingleFieldConatiner,
  Select,
} from '../styles/Form.styles';

const SelectField = (props) => {
  const { label, name, options, ...rest } = props;

  return (
    <SingleFieldConatiner>
      <Label htmlFor={name}>{label} :</Label>
      <Field as={Select} id={name} name={name} {...rest}>
        {options.map((option) => {
          return (
            <Option key={option.value} value={option.value}>
              {option.key}
            </Option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={FormErrorText} />
    </SingleFieldConatiner>
  );
};

export default SelectField;
