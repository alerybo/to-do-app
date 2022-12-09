import React from "react";
//components
import AddTaskForm from "./add-task-form/AddTaskForm";
import TaskList from "./task-list/TaskList";
import Filters from "./filters/Filters";
//styled components
import { Main, GlobalStyles } from "./design-system";

function App() {
  return (
    <>
      <GlobalStyles />
      <Main>
        <AddTaskForm />
        <Filters />
        <TaskList />
      </Main>
    </>
  );
}

export default App;


