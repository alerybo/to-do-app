import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import { BsPlusLg } from "react-icons/bs";
import TaskList from "../components/TaskList";
import {
  DashboardHeader,
  Container,
  TextButton,
  GridContainer,
} from "../design-system";

const Collection = () => {
  const { state, filterTasks, sortTasksByLists } = useGlobalContext();
  const { id } = useParams();
  const tasks = sortTasksByLists(filterTasks(state.tasks, id));

  return (
    <div>
      <DashboardHeader>
        <h2>{id}</h2>
        <Container>
          <TextButton>
            <BsPlusLg />
            <p>New list</p>
          </TextButton>
        </Container>
      </DashboardHeader>
      <GridContainer>
        {tasks.map((list) => (
          <TaskList key={list[0].list_id} list={list} />
        ))}
      </GridContainer>
    </div>
  );
};

export default Collection;
