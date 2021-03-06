import { TasksContainer } from '../styles/Container.styles';
import { H2 } from '../styles/Element.styles';
import Task from '../Task/Task';

const Tasks = ({ tasks, handleDelete }) => {
  return (
    <TasksContainer>
      <H2 color={'rgba(0,0,0,0.8)'}>Your Tasks</H2>
      {tasks.map((task) => (
        <Task key={task._id} task={task} handleDelete={handleDelete} />
      ))}
    </TasksContainer>
  );
};

export default Tasks;
