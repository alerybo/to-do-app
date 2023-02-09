import { useState } from "react";
import { useGlobalContext } from "../context";
import {
  StyledCard,
  Container,
  TextButton,
  StyledForm,
} from "../design-system";
import { BsThreeDots, BsPlusLg } from "react-icons/bs";
import InputBase from "@mui/material/InputBase";
import Task from "./Task";

const TaskList = ({ list }) => {
  console.log(list);
  const [isEditing, setIsEditing] = useState(false);
  const [lisTitle, setListTitle] = useState(list[0].list_name);
  const { editListTitle } = useGlobalContext();

  const editHandler = () => {
    setIsEditing(false);
    const newTitle = lisTitle;
    editListTitle(list[0].list_id, newTitle);
  };

  // detect double click
  const clickHandler = (e) => {
    if (e.detail === 2) {
      setIsEditing(true);
    }
  };

  return (
    <StyledCard>
      <Container>
        <StyledForm>
          <InputBase
            id="list-title"
            value={lisTitle}
            disabled={isEditing ? false : true}
            onChange={(e) => setListTitle(e.target.value)}
            onBlur={() => editHandler()}
            onKeyDown={(e) => (e.key === "Enter" ? editHandler() : () => {})}
            onClick={(e) => clickHandler(e)}
          />
        </StyledForm>

        <TextButton>
          <BsThreeDots />
        </TextButton>
      </Container>
      {list.map((task) => (
        <Task key={task.task_id} {...task} />
      ))}
      <TextButton className="add-button">
        <BsPlusLg />
        <p>Add task</p>
      </TextButton>
    </StyledCard>
  );
};

export default TaskList;
