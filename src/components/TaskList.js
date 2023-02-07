import { StyledCard, Container, TextButton } from "../design-system";
import { BsThreeDots, BsPlusLg } from "react-icons/bs";
import InputBase from "@mui/material/InputBase";
import Task from "./Task";

const TaskList = ({ list }) => {
  return (
    <StyledCard>
      <Container>
        <InputBase placeholder={list[0].list_name} />
        <TextButton>
          <BsThreeDots />
        </TextButton>
      </Container>
      {list.map((task) => (
        <Task key={task.task_id} {...task} />
      ))}
      <TextButton className="add-button">
        <BsPlusLg />
        <p>Add task</p>
      </TextButton>
    </StyledCard>
  );
};

export default TaskList;
