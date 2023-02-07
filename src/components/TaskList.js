import { StyledCard, Container, TextButton } from "../design-system";
import { BsThreeDots } from "react-icons/bs";
import Task from "./Task";

const TaskList = () => {
  return (
    <StyledCard>
      <Container>
        <p>Title</p>
        <TextButton>
          <BsThreeDots />
        </TextButton>
      </Container>
      <Task />
      <Task />
      <Task />
    </StyledCard>
  );
};

export default TaskList;
