import { useGlobalContext } from "../context";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import TaskList from "../components/TaskList";
import {
  DashboardHeader,
  Container,
  TextButton,
  GridContainer,
} from "../design-system";

const Collection = () => {
  const { data } = useGlobalContext();
  const personal = data.filter((task) => task.collection === "personal");

  const tasksByList = personal.reduce((acc, curr) => {
    if (!acc[curr.list_id]) {
      acc[curr.list_id] = [];
    }
    acc[curr.list_id].push(curr);
    return acc;
  }, {});
  let taskLists = [];
  for (const list in tasksByList) {
    taskLists.push(tasksByList[list]);
  }
  return (
    <div>
      <DashboardHeader>
        <h2>Collection</h2>
        <Container>
          <div>
            <TextButton>
              <p>Day</p>
            </TextButton>
            <TextButton>
              <p>Week</p>
            </TextButton>
            <TextButton>
              <p>Month</p>
            </TextButton>
          </div>
          <Container>
            <TextButton>
              <BsChevronLeft />
            </TextButton>
            <p>6 feb - 12 feb</p>
            <TextButton>
              <BsChevronRight />
            </TextButton>
          </Container>
        </Container>
      </DashboardHeader>
      <GridContainer>
        {taskLists.map((list) => (
          <TaskList key={list[0].list_id} list={list} />
        ))}
      </GridContainer>
    </div>
  );
};

export default Collection;
