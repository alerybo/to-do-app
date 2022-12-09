import React from "react";
import { useGlobalContext } from "../context";
import Task from "../task/Task";
import { Container, Button } from "../design-system";

const TaskList = () => {
  const { tasks, filter } = useGlobalContext();

  let displayTasks = tasks.filter((task) => {
    if (filter === "ACTIVE") {
      return task.isCompleted === false;
    } else if (filter === "COMPLETED") {
      return task.isCompleted === true;
    } else {
      return task;
    }
  });

  return (
    <>
      {displayTasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
      <Container>
        <Button>CLEAR ALL</Button>
      </Container>
    </>
  );
};

export default TaskList;
