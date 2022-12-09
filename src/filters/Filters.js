import React from "react";
import { useGlobalContext } from "../context";
//styled components
import { Container } from "../design-system";
import { Button } from "../design-system";

const filters = ["ALL", "ACTIVE", "COMPLETED"];

const DisplayFilters = () => {
  const { filterTasks } = useGlobalContext();
  const handleClick = (e, filter) => {
    e.preventDefault();
    filterTasks(filter);
  };

  return (
    <Container>
      {filters.map((filter) => (
        <Button key={filter} onClick={(e) => handleClick(e, filter)}>
          {filter}
        </Button>
      ))}
    </Container>
  );
};

export default DisplayFilters;
