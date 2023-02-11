import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import { v4 as uuid } from "uuid";

import { data } from "./data/data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // REDUCER
  const [state, dispatch] = useReducer(reducer, {
    tasks: data,
    collections: [...new Set(data.map((item) => item.collection))],
  });
  console.log(state.collections);

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
  //FUNCTION VONVERTS RGB COLOR TO HEX CODE
  const rgbToHex = (rgb) => {
    const singleColorToHex = (color) => {
      const hex = color.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };
    const rgbValues = rgb.match(/^rgb\((\d*)\,\s(\d*)\,\s(\d*)\)/);
    const r = +rgbValues[1];
    const g = +rgbValues[2];
    const b = +rgbValues[3];
    return (
      "#" + singleColorToHex(r) + singleColorToHex(g) + singleColorToHex(b)
    );
  };
  // TASK DISPATCHERS
  const toggleTask = (task_id) => {
    dispatch({ type: "TOGGLE_TASK", payload: task_id });
  };
  const deleteTask = (task_id) => {
    dispatch({ type: "DELETE_TASK", payload: task_id });
  };
  const editTask = (task_id, newTitle) => {
    dispatch({ type: "EDIT_TASK", payload: { task_id, newTitle } });
  };

  const addTask = (collection, list_id, list_name) => {
    const task_id = uuid();
    const task_name = "Double click to edit";
    dispatch({
      type: "ADD_TASK",
      payload: { task_id, task_name, collection, list_id, list_name },
    });
  };

  // LIST DISPATCHERS
  const editListTitle = (list_id, newTitle) => {
    dispatch({ type: "EDIT_LIST_TITLE", payload: { list_id, newTitle } });
  };
  const editListColor = (list_id, color) => {
    const hexColor = rgbToHex(color);
    dispatch({ type: "EDIT_LIST_COLOR", payload: { list_id, hexColor } });
  };
  const deleteList = (list_id) => {
    dispatch({ type: "DELETE_LIST", payload: list_id });
  };
  const addList = (collection) => {
    const list_id = uuid();
    const list_name = "Double click to edit";
    addTask(collection, list_id, list_name);
  };
  // COLLECTION DISPATCHERS
  const addCollection = (collection_name) => {
    const collection_id = uuid();
    dispatch({
      type: "ADD_COLLECTION",
      payload: { collection_id, collection_name },
    });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        filterTasks,
        sortTasksByLists,
        rgbToHex,
        toggleTask,
        editTask,
        deleteTask,
        addTask,
        editListTitle,
        editListColor,
        deleteList,
        addList,
        addCollection,
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
