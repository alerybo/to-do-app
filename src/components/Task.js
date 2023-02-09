import { useState } from "react";
import { useGlobalContext } from "../context";
import Checkbox from "@mui/material/Checkbox";
import InputBase from "@mui/material/InputBase";
import { StyledForm } from "../design-system";

const Task = ({ task_name, task_id, is_completed }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [taskTitle, setTaskTitle] = useState(task_name);
  const { toggleTask, editTask, deleteTask } = useGlobalContext();

  const editHandler = () => {
    setIsEditing(false);
    const newTitle = taskTitle;
    if (newTitle === "") {
      deleteTask(task_id);
    } else {
      editTask(task_id, newTitle);
    }
  };

  // detect double click
  const clickHandler = (e) => {
    if (e.detail === 2) {
      setIsEditing(true);
    }
  };

  return (
    <StyledForm>
      <Checkbox
        checked={is_completed}
        onChange={() => toggleTask(task_id)}
        color="default"
      />
      <InputBase
        value={taskTitle}
        disabled={isEditing ? false : true}
        onChange={(e) => setTaskTitle(e.target.value)}
        onBlur={() => editHandler()}
        onKeyDown={(e) => (e.key === "Enter" ? editHandler() : () => {})}
        onClick={(e) => clickHandler(e)}
      />
    </StyledForm>
  );
};

export default Task;
