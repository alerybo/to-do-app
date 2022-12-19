import React, { useState } from "react";
import { useGlobalContext } from "../context";
import { MdClose } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
//styled components
import { Task } from "./Task.styled";

const SingleTask = ({ id, title, isCompleted }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [taskTitle, setTaskTitle] = useState(title);

  const { deleteTask, toggleTask, editTask } = useGlobalContext();

  const handleEdit = (e) => {
    setIsEditing(false);
    let newTitle = e.target.value;
    editTask(id, newTitle);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsEditing(false);
      let newTitle = e.target.value;
      editTask(id, newTitle);
    }
  };

  return (
    <Task key={id}>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => toggleTask(id)}
      />
      <input
        type="text"
        disabled={isEditing ? "" : true}
        onBlur={(e) => handleEdit(e)}
        onKeyDown={(e) => handleKeyDown(e)}
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button onClick={() => setIsEditing(true)}>
        <FiEdit3 />
      </button>
      <button onClick={() => deleteTask(id)}>
        <MdClose />
      </button>
    </Task>
  );
};

export default SingleTask;
