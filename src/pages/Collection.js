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
  const { state, filterTasks, sortTasksByLists, addList } = useGlobalContext();
  const { collectionId } = useParams();

  //All tasks in this collection
  const tasks = sortTasksByLists(filterTasks(state.tasks, collectionId));

  return (
    <div>
      <DashboardHeader>
        <h2>{collectionId}</h2>
        <Container>
          <TextButton onClick={() => addList(collectionId)}>
            <BsPlusLg />
            <p>New list</p>
          </TextButton>
        </Container>
      </DashboardHeader>
      <GridContainer>
        {tasks.map((list) => (
          <TaskList
            key={list[0].list_id}
            list={list}
            collection={collectionId}
          />
        ))}
      </GridContainer>
    </div>
  );
};

export default Collection;
