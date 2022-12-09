import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
//components
import Alert from "../alert/Alert";
//styled components
import { Form } from "../design-system";
//constants
import {
  TIMEOUT_DELAY,
  ALERT_MISSING_TITLE,
  FORM_TITLE,
  FORM_INPUT_PLACEHOLDER,
  FORM_BUTTON_TEXT,
} from "./constants";

const AddTask = () => {
  const [alert, setAlert] = useState({ show: false, msg: "" });
  const [taskTitle, setTaskTitle] = useState("");
  const { addTask } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskTitle) {
      setAlert({ show: true, msg: ALERT_MISSING_TITLE });
    } else {
      addTask(taskTitle);
      setTaskTitle("");
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, TIMEOUT_DELAY);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <Form onSubmit={handleSubmit}>
      <h2>{FORM_TITLE}</h2>
      {alert.show && <Alert {...alert} />}
      <div>
        <input
          type="text"
          placeholder={FORM_INPUT_PLACEHOLDER}
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <button>{FORM_BUTTON_TEXT}</button>
      </div>
    </Form>
  );
};

export default AddTask;
