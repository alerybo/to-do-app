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

  const toggleTask = (task_id) => {
    console.log(task_id);
    dispatch({ type: "TOGGLE_TASK", payload: task_id });
  };

  return (
    <AppContext.Provider
      value={{ state, filterTasks, sortTasksByLists, toggleTask }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
