import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import TaskList from "../components/TaskList";
import {
  DashboardHeader,
  Container,
  TextButton,
  GridContainer,
} from "../design-system";

const DailyList = () => {
  return (
    <div>
      <DashboardHeader>
        <h2>Daily tasks</h2>
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
        <TaskList />
        <TaskList />
        <TaskList />
        <TaskList />
        <TaskList />
        <TaskList />
      </GridContainer>
    </div>
  );
};

export default DailyList;
