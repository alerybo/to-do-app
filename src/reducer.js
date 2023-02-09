const reducer = (state, action) => {
  //   if (action.type === "ADD_TASK") {
  //     let newTask = {
  //       id: new Date().getTime().toString(),
  //       title: action.payload.taskTitle,
  //       category: action.payload.taskCategory.toUpperCase(),
  //       isCompleted: false,
  //     };
  //     let newList = [...state.tasks, newTask];
  //     return { ...state, tasks: newList };
  //   }

  // TASK ACTIONS
  if (action.type === "DELETE_TASK") {
    let newList = state.tasks.filter((task) => task.task_id !== action.payload);
    return { ...state, tasks: newList };
  }
  if (action.type === "EDIT_TASK") {
    let newList = state.tasks.map((task) =>
      task.task_id === action.payload.task_id
        ? {
            ...task,
            task_name: action.payload.newTitle,
          }
        : task
    );
    return { ...state, tasks: newList };
  }
  if (action.type === "TOGGLE_TASK") {
    let newList = state.tasks.map((task) =>
      task.task_id === action.payload
        ? { ...task, is_completed: !task.is_completed }
        : task
    );
    return { ...state, tasks: newList };
  }

  // LIST ACTIONS
  if (action.type === "EDIT_LIST_TITLE") {
    let newList = state.tasks.map((task) =>
      task.list_id === action.payload.list_id
        ? { ...task, list_name: action.payload.newTitle }
        : task
    );
    return { ...state, tasks: newList };
  }

  //   if (action.type === "FILTER_TASKS") {
  //     return { ...state, filter: action.payload };
  //   }
  //   if (action.type === "CLEAR_ALL") {
  //     return { ...state, tasks: [] };
  //   }
  //   if (action.type === "UPDATE_CATEGORIES") {
  //     const category = action.payload.toUpperCase();
  //     if (!state.categories.includes(category)) {
  //       let newList = [...state.categories, category];
  //       console.log(newList);
  //       return { ...state, categories: newList };
  //     }
  //   }
  return state;
};

export default reducer;
