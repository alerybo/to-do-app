import React, { useState } from "react";
import { useGlobalContext } from "../context";
//styled components
import { Container } from "../design-system";
import { Button } from "../design-system";

const filters = ["ALL", "ACTIVE", "COMPLETED"];

const DisplayFilters = () => {
  const { filterTasks } = useGlobalContext();
  const [active, setActive] = useState("");

  const handleClick = (e, filter) => {
    e.preventDefault();
    setActive(filter);
    filterTasks(filter);
  };

  return (
    <Container>
      {filters.map((filter) => (
        <Button
          className={active === filter ? "active" : ""}
          key={filter}
          onClick={(e) => handleClick(e, filter)}
        >
          {filter}
        </Button>
      ))}
    </Container>
  );
};

export default DisplayFilters;
