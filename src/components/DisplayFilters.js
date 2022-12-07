import React from "react";
import { useGlobalContext } from "../context";
//styled components
import { ButtonContainer } from "./styles/ButtonContainer.styled";

const filters = ["ALL", "ACTIVE", "COMPLETED"];

const DisplayFilters = () => {
  const { filterTasks } = useGlobalContext();
  const handleClick = (e, filter) => {
    e.preventDefault();
    filterTasks(filter);
  };

  return (
    <ButtonContainer>
      {filters.map((filter) => (
        <button key={filter} onClick={(e) => handleClick(e, filter)}>
          {filter}
        </button>
      ))}
    </ButtonContainer>
  );
};

export default DisplayFilters;
