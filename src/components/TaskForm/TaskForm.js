import { Form, Formik } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { createTask } from '../../features/task/taskSliece';
import FormikControl from '../form/FormikControl';
import {
  ButtonSubmit,
  FormFieldContainer,
  FormTitle,
} from '../styles/Form.styles';

const TaskForm = () => {
  const dispatch = useDispatch();
  // showing toast
  const { isError, isSuccess, message } = useSelector((state) => state.tasks);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
  }, [isError, message]);

  // initial values
  const initialValues = {
    task: '',
  };
  // validation
  const validationSchema = Yup.object({
    task: Yup.string().required('Please enter your task!'),
  });
  // after submitting
  onsubmit = (values, { resetForm, setSubmitting }) => {
    dispatch(createTask(values));

    if (isSuccess) {
      toast.success('Task created successfully!');
    }

    setSubmitting(false);
    resetForm(true);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onsubmit}
      >
        {(formik) => (
          <Form>
            <FormFieldContainer>
              <FormTitle>Task Form</FormTitle>
              <FormikControl
                control="input"
                type="text"
                name="task"
                placeholder="Enter your task"
              />
              <ButtonSubmit
                type="submit"
                disabled={!formik.isValid || formik.isSubmitting}
              >
                Add Task
              </ButtonSubmit>
            </FormFieldContainer>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default TaskForm;
