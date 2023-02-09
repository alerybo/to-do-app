import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

import { data } from "./data/data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // REDUCER
  const [state, dispatch] = useReducer(reducer, {
    tasks: data,
    collections: [...new Set(data.map((item) => item.collection))],
  });

  //FUNCTION RETURNS FILTERED ARRAY OD TASKS
  const filterTasks = (tasks, id) => {
    return tasks.filter((task) => task.collection === id);
  };

  //FUNCTION RETURNS ARRAY OF ARRAYS SORTED BY LIST ID
  const sortTasksByLists = (tasks) => {
    const tasksByList = tasks.reduce((acc, curr) => {
      if (!acc[curr.list_id]) {
        acc[curr.list_id] = [];
      }
      acc[curr.list_id].push(curr);
      return acc;
    }, {});

    let taskLists = [];
    for (const list in tasksByList) {
      taskLists.push(tasksByList[list]);
    }
    return taskLists;
  };

  // TASK DISPATCHERS
  const toggleTask = (task_id) => {
    console.log(task_id);
    dispatch({ type: "TOGGLE_TASK", payload: task_id });
  };
  const deleteTask = (task_id) => {
    console.log(task_id);
    dispatch({ type: "DELETE_TASK", payload: task_id });
  };
  const editTask = (task_id, newTitle) => {
    console.log(task_id);
    dispatch({ type: "EDIT_TASK", payload: { task_id, newTitle } });
  };

  // LIST DISPATCHERS
  const editListTitle = (list_id, newTitle) => {
    console.log(list_id);
    dispatch({ type: "EDIT_LIST_TITLE", payload: { list_id, newTitle } });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        filterTasks,
        sortTasksByLists,
        toggleTask,
        editTask,
        deleteTask,
        editListTitle,
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
