import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

import tasks from "./data";

const AppContext = React.createContext();
const INITIAL_STATE = {
  tasks,
  filter: "ALL",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const addTask = (taskTitle) => {
    dispatch({ type: "ADD_TASK", payload: taskTitle });
  };

  const deleteTask = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  const editTask = (id, newTitle) => {
    dispatch({ type: "EDIT_TASK", payload: { id, newTitle } });
  };

  const toggleTask = (id) => {
    dispatch({ type: "TOGGLE_TASK", payload: id });
  };

  const filterTasks = (filter) => {
    dispatch({ type: "FILTER_TASKS", payload: filter });
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
