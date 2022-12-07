import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
//components
import Alert from "./Alert";
//styled components
import { StyledForm } from "./styles/Form.styled";

const AddTask = () => {
  const [alert, setAlert] = useState({ show: false, msg: "" });
  const [taskTitle, setTaskTitle] = useState("");
  const { addTask } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskTitle) {
      setAlert({ show: true, msg: "please enter task title" });
    } else {
      addTask(taskTitle);
      setTaskTitle("");
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>TO DO</h2>
      {alert.show && <Alert {...alert} />}
      <div>
        <input
          type="text"
          placeholder="e.g. groceries"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </div>
    </StyledForm>
  );
};

export default AddTask;
