import styled from 'styled-components';
import DatePicker from 'react-datepicker';

export const FormFieldContainer = styled.div`
  background: rgba(255, 255, 255, 0.8);
  padding: 15px 10px;
  border-radius: 10px;
  width: 70%;
  margin: 0 auto;
  text-align: left;
`;

export const SingleFieldConatiner = styled.div`
  margin: 10px 0;
`;

export const Label = styled.label`
  color: rgba(0, 0, 0, 0.75);
  margin: 0 5px;
  display: inline-block;
`;

export const StyledDatePicker = styled(DatePicker)`
  border-radius: 10px;
  border: 0;
  padding: 8px;
`;

export const Input = styled.input`
  width: 100%;
  border: 0;
  border-radius: 10px;
  padding: 8px;

  &[type='radio'] {
    padding: 5px;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  border: 0;
  border-radius: 10px;
  padding: 8px;
`;
export const Select = styled.select`
  width: 100%;
  border: 0;
  border-radius: 10px;
  padding: 8px;
  background: #fff;
`;

export const Option = styled.option`
  color: rgba(0, 0, 0, 0.7);
`;

export const RadioGroup = styled.span`
  display: inline-flex;
  align-items: center;
  margin: 0 5px;
`;

export const Radio = styled.input.attrs({
  type: 'radio',
})`
  &:checked {
    border: 2px solid red;
  }
`;

export const RadioLabel = styled.label`
  color: rgba(0, 0, 0, 0.7);
  margin: 0 5px;
`;

export const CheckGroup = styled.span`
  display: inline-flex;
  align-items: center;
  margin: 0 5px;
`;

export const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  &:checked {
    border: 2px solid red;
  }
`;

export const CheckboxLabel = styled.label`
  color: rgba(0, 0, 0, 0.7);
  margin: 0 5px;
`;

export const FormErrorText = styled.p`
  color: red;
  margin-left: 5px;
  font-size: 13px;
`;

export const ButtonSubmit = styled.button`
  border: 0;
  border-radius: 10px;
  box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.8);
  background-color: aliceblue;
  padding: 7px 25px;
  margin: 10px 0;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.9);
  }
`;