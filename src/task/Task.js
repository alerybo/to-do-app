import React, { useState } from "react";
import { useGlobalContext } from "../context";
import { MdClose } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
//styled components
import { Task } from "./Task.styled";

const SingleTask = ({ id, title, category, isCompleted }) => {
  const { deleteTask, toggleTask, editTask, categories, updateCategories } =
    useGlobalContext();
  const [isEditing, setIsEditing] = useState(false);
  const [taskTitle, setTaskTitle] = useState(title);
  const [taskCategory, setTaskCategory] = useState(category);

  const handleEdit = (e) => {
    setIsEditing(false);
    let newTitle = taskTitle;
    let newCategory = taskCategory;

    if (e.target.id === "task-title") {
      newTitle = e.target.value;
    }
    if (e.target.id === "task-category") {
      newCategory = e.target.value;
    }
    
    updateCategories(newCategory);
    editTask(id, newTitle, newCategory);
  };

  return (
    <Task key={id}>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => toggleTask(id)}
      />
      <input
        id="task-title"
        type="text"
        disabled={isEditing ? "" : true}
        onBlur={(e) => handleEdit(e)}
        onKeyDown={(e) => (e.key === "Enter" ? handleEdit(e) : () => {})}
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />

      <input
        type="text"
        id="task-category"
        list="task-categories"
        disabled={isEditing ? "" : true}
        placeholder={taskCategory.toUpperCase()}
        onChange={(e) => setTaskCategory(e.target.value)}
        onKeyDown={(e) => (e.key === "Enter" ? handleEdit(e) : () => {})}
        onBlur={(e) => handleEdit(e)}
      />
      <datalist id="task-categories">
        {categories.map((category) => (
          <option key={category} value={category} />
        ))}
      </datalist>

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
