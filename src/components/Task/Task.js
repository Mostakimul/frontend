import { FaTrashAlt } from 'react-icons/fa';
import { SingleTaskContainer } from '../styles/Container.styles';
import { Button, H4, P } from '../styles/Element.styles';

const Task = ({ task }) => {
  return (
    <SingleTaskContainer>
      <H4 fontSize={'1.5rem'} color={'rgba(0,0,0,0.8)'}>
        {task.task}
      </H4>
      <P fontSize={'1.4rem'} color={'rgba(0,0,0,0.8)'}>
        {new Date(task.createdAt).toLocaleString()}
      </P>
      <Button>
        <FaTrashAlt size={14} />
      </Button>
    </SingleTaskContainer>
  );
};

export default Task;
