import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../components/styles/Container.styles';
import { H2, P } from '../../components/styles/Element.styles';
import TaskForm from '../../components/TaskForm/TaskForm';
const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <Container>
      <H2>Task Dashboard</H2>
      <P>Welcome {user && user.name}</P>
      <TaskForm />
    </Container>
  );
};

export default Dashboard;
