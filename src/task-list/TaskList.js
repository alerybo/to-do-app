import React from "react";
import { useGlobalContext } from "../context";
import Task from "../task/Task";
import { Container, Button } from "../design-system";

const TaskList = () => {
  const { tasks, filter, clearAllTasks } = useGlobalContext();

  let displayTasks = tasks.filter((task) => {
    if (filter === "ACTIVE") {
      return task.isCompleted === false;
    } else if (filter === "COMPLETED") {
      return task.isCompleted === true;
    } else {
      return task;
    }
  });
  console.log(displayTasks);

  const handleClick = (e) => {
    e.preventDefault();
    clearAllTasks();
  };

  return (
    <>
      {displayTasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
      <Container>
        {displayTasks.length === 0 ? (
          <p>Create Your First Task!</p>
        ) : (
          <Button onClick={(e) => handleClick(e)}>CLEAR ALL</Button>
        )}
      </Container>
    </>
  );
};

export default TaskList;
