import React from "react";
import { useGlobalContext } from "../context";
import SingleTask from "./SingleTask";

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
    <div>
      {displayTasks.map((task) => (
        <SingleTask key={task.id} {...task} />
      ))}
    </div>
  );
};

export default TaskList;
