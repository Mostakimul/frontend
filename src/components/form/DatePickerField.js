import 'react-datepicker/dist/react-datepicker.css';
import { ErrorMessage, Field } from 'formik';
import {
  FormErrorText,
  Label,
  SingleFieldConatiner,
  StyledDatePicker,
} from '../styles/Form.styles';

const DatePickerField = (props) => {
  const { label, name, ...rest } = props;
  return (
    <SingleFieldConatiner>
      <Label htmlFor={name}>{label} :</Label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;

          return (
            <StyledDatePicker
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={FormErrorText} />
    </SingleFieldConatiner>
  );
};

export default DatePickerField;
