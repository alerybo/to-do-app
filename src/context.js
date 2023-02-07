import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

import tasks from "./data/data";

const AppContext = React.createContext();
const INITIAL_STATE = {
  tasks,
  filter: "ALL",
  categories: ["HOME", "SCHOOL", "MOVIES", "OTHER"],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const addTask = (taskTitle, taskCategory) => {
    dispatch({ type: "ADD_TASK", payload: { taskTitle, taskCategory } });
  };

  const deleteTask = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  const editTask = (id, newTitle, newCategory) => {
    dispatch({ type: "EDIT_TASK", payload: { id, newTitle, newCategory } });
  };

  const toggleTask = (id) => {
    dispatch({ type: "TOGGLE_TASK", payload: id });
  };

  const filterTasks = (filter) => {
    dispatch({ type: "FILTER_TASKS", payload: filter });
  };

  const clearAllTasks = () => {
    dispatch({ type: "CLEAR_ALL" });
  };
  const updateCategories = (taskCategory) => {
    dispatch({ type: "UPDATE_CATEGORIES", payload: taskCategory });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        addTask,
        deleteTask,
        editTask,
        toggleTask,
        filterTasks,
        clearAllTasks,
        updateCategories,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
