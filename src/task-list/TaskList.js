import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import Task from "../task/Task";
import { Container, Button } from "../design-system";

const TaskList = () => {
  const { tasks, filter, clearAllTasks } = useGlobalContext();
  const [message, setMessage] = useState("Create your first task!");

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
      setMessage("No active tasks");
    } else if (filter === "COMPLETED") {
      setMessage("No completed tasks");
    } else {
      setMessage("Create your first task!");
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
