import { ErrorMessage, Field } from 'formik';
import {
  FormErrorText,
  Label,
  CheckGroup,
  Checkbox,
  CheckboxLabel,
  SingleFieldConatiner,
} from '../styles/Form.styles';

const CheckboxField = (props) => {
  const { name, label, options, ...rest } = props;
  return (
    <SingleFieldConatiner>
      <Label htmlFor={name}>{label} :</Label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <CheckGroup key={option.key}>
                <Checkbox
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <CheckboxLabel htmlFor={option.value}>
                  {option.key}
                </CheckboxLabel>
              </CheckGroup>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={FormErrorText} />
    </SingleFieldConatiner>
  );
};

export default CheckboxField;
