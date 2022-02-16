import CheckboxField from './CheckboxField';
import DatePickerField from './DatePickerField';
import InputField from './InputField';
import RadioField from './RadioField';
import SelectField from './SelectField';
import TextareField from './TextareField';

const FormikControl = (props) => {
  const { control, ...rest } = props;

  switch (control) {
    case 'input':
      return <InputField {...rest} />;
    case 'textarea':
      return <TextareField {...rest} />;
    case 'select':
      return <SelectField {...rest} />;
    case 'radio':
      return <RadioField {...rest} />;
    case 'checkbox':
      return <CheckboxField {...rest} />;
    case 'date':
      return <DatePickerField {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
