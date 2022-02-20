import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container } from '../../components/styles/Container.styles';
import { H2, P } from '../../components/styles/Element.styles';
import TaskForm from '../../components/TaskForm/TaskForm';
import Tasks from '../../components/Tasks/Tasks';
import { deleteTask, getTasks, reset } from '../../features/task/taskSliece';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { tasks, isError, message, isSuccess } = useSelector(
    (state) => state.tasks,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate('/login');
    }

    dispatch(getTasks());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, dispatch, message]);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
    if (isSuccess) {
      toast.warn('Task deleted successfully!');
    }
  };

  return (
    <Container>
      <H2>Task Dashboard</H2>
      <P>Welcome {user && user.name}</P>
      <TaskForm />
      {tasks.length > 0 ? (
        <>
          <Tasks tasks={tasks} handleDelete={handleDelete} />
        </>
      ) : (
        <P>You do not have any tasks!</P>
      )}
    </Container>
  );
};

export default Dashboard;
