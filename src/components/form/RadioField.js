import { ErrorMessage, Field } from 'formik';
import {
  FormErrorText,
  Label,
  RadioGroup,
  Radio,
  RadioLabel,
  SingleFieldConatiner,
} from '../styles/Form.styles';

const RadioField = (props) => {
  const { name, label, options, ...rest } = props;
  return (
    <SingleFieldConatiner>
      <Label htmlFor={name}>{label} :</Label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <RadioGroup key={option.key}>
                <Radio
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <RadioLabel htmlFor={option.value}>{option.key}</RadioLabel>
              </RadioGroup>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={FormErrorText} />
    </SingleFieldConatiner>
  );
};

export default RadioField;
