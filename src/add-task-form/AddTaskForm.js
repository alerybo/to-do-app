import React, { useState } from "react";
import { useGlobalContext } from "../context";

//styled components
import { Form } from "../design-system";
//constants
import {
  FORM_TITLE,
  FORM_TITLE_PLACEHOLDER,
  FORM_CATEGORY_PLACEHOLDER,
  FORM_BUTTON_TEXT,
} from "./constants";

const AddTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const { addTask, categories, updateCategories } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskTitle) {
      console.log("error");
    } else {
      updateCategories(taskCategory);
      addTask(taskTitle, taskCategory);
      setTaskTitle("");
      setTaskCategory("");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>{FORM_TITLE}</h2>
      <div>
        <input
          id="add-task-title"
          type="text"
          placeholder={FORM_TITLE_PLACEHOLDER}
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <input
          list="categories"
          id="add-task-category"
          placeholder={FORM_CATEGORY_PLACEHOLDER}
          value={taskCategory}
          onChange={(e) => setTaskCategory(e.target.value)}
        />
        <datalist id="categories">
          {categories.map((category) => (
            <option key={category} value={category}></option>
          ))}
        </datalist>
        <button>{FORM_BUTTON_TEXT}</button>
      </div>
    </Form>
  );
};

export default AddTask;
