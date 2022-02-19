import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../components/styles/Container.styles';
import { H2, P } from '../../components/styles/Element.styles';
import TaskForm from '../../components/TaskForm/TaskForm';
import { getTasks, reset } from '../../features/task/taskSliece';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { tasks, isLoading, isError, message } = useSelector(
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

  return (
    <Container>
      <H2>Task Dashboard</H2>
      <P>Welcome {user && user.name}</P>
      <TaskForm />
    </Container>
  );
};

export default Dashboard;
