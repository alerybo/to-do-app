const reducer = (state, action) => {
  if (action.type === "ADD_TASK") {
    let newTask = {
      id: new Date().getTime().toString(),
      title: action.payload,
      isCompleted: false,
    };
    let newList = [...state.tasks, newTask];
    return { ...state, tasks: newList };
  }
  if (action.type === "DELETE_TASK") {
    let newList = state.tasks.filter((task) => task.id !== action.payload);
    console.log(newList);
    return { ...state, tasks: newList };
  }
  if (action.type === "EDIT_TASK") {
    let newList = state.tasks.map((task) =>
      task.id === action.payload.id
        ? { ...task, title: action.payload.newTitle }
        : task
    );
    return { ...state, tasks: newList };
  }
  if (action.type === "TOGGLE_TASK") {
    let newList = state.tasks.map((task) =>
      task.id === action.payload
        ? { ...task, isCompleted: !task.isCompleted }
        : task
    );
    return { ...state, tasks: newList };
  }
  if (action.type === "FILTER_TASKS") {
    return { ...state, filter: action.payload };
  }
  if (action.type === "CLEAR_ALL") {
    return { ...state, tasks: [] };
  }
  return state;
};

export default reducer;
