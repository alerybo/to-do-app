import Checkbox from "@mui/material/Checkbox";
import InputBase from "@mui/material/InputBase";
import { StyledForm } from "../design-system";

const Task = ({ task_name }) => {
  return (
    <StyledForm>
      <Checkbox color="default" />
      <InputBase className="task-title" placeholder={task_name} />
    </StyledForm>
  );
};

export default Task;
