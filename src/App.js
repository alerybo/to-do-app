import React from "react";
//components
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import DisplayFilters from "./components/DisplayFilters";
//styled components
import GlobalStyles from "./components/styles/Global";
import { Container } from "./components/styles/Container.styled";

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <AddTask />
        <DisplayFilters />
        <TaskList />
      </Container>
    </>
  );
}

export default App;
