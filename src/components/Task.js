import { useGlobalContext } from "../context";
import Checkbox from "@mui/material/Checkbox";
import InputBase from "@mui/material/InputBase";
import { StyledForm } from "../design-system";

const Task = ({ task_name, task_id, is_completed }) => {
  const { toggleTask } = useGlobalContext();
  const handleChange = () => {
    toggleTask(task_id);
  };
  return (
    <StyledForm>
      <Checkbox
        checked={is_completed}
        onChange={handleChange}
        color="default"
      />
      <InputBase className="task-title" placeholder={task_name} />
    </StyledForm>
  );
};

export default Task;
