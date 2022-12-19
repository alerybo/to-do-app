import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import Task from "../task/Task";
//styled components
import { Container, Button } from "../design-system";
//constants
import {
  MESSAGE_DEFAULT,
  MESSAGE_ACTIVE,
  MESSAGE_COMPLETED,
} from "./constants";

const TaskList = () => {
  const { tasks, filter, clearAllTasks } = useGlobalContext();
  const [message, setMessage] = useState(MESSAGE_DEFAULT);

  let displayTasks = tasks.filter((task) => {
    if (filter === "ACTIVE") {
      return task.isCompleted === false;
    } else if (filter === "COMPLETED") {
      return task.isCompleted === true;
    } else {
      return task;
    }
  });

  const handleClick = (e) => {
    e.preventDefault();
    clearAllTasks();
  };

  useEffect(() => {
    if (filter === "ACTIVE") {
      setMessage(MESSAGE_ACTIVE);
    } else if (filter === "COMPLETED") {
      setMessage(MESSAGE_COMPLETED);
    } else {
      setMessage(MESSAGE_DEFAULT);
    }
  }, [filter]);

  return (
    <>
      {displayTasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
      <Container>
        {displayTasks.length === 0 ? (
          <p>{message}</p>
        ) : (
          <Button onClick={(e) => handleClick(e)}>CLEAR ALL</Button>
        )}
      </Container>
    </>
  );
};

export default TaskList;
