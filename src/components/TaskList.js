import { useState } from "react";
import { useGlobalContext } from "../context";
import {
  StyledCard,
  Container,
  TextButton,
  ColorPickerButton,
  StyledForm,
} from "../design-system";
import { BsThreeDots, BsPlusLg } from "react-icons/bs";
import {
  ListItemButton,
  InputBase,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import Task from "./Task";

const TaskList = ({ list }) => {
  const [anchorEl, setAnchorEl] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [lisTitle, setListTitle] = useState(list[0].list_name);
  const { editListTitle, addTask, editListColor, deleteList } =
    useGlobalContext();

  const { collection, list_id, list_name, list_color } = list[0];
  const open = Boolean(anchorEl);

  //Open list options menu
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  //Close list options menu
  const handleClose = () => {
    setAnchorEl(null);
  };
  // Change list title
  const handleTitleEdit = () => {
    setIsEditing(false);
    const newTitle = lisTitle;
    editListTitle(list_id, newTitle);
  };
  // Start editing on double click
  const editOnDoubleClick = (e) => {
    if (e.detail === 2) {
      setIsEditing(true);
    }
  };
  // Add new task to the list
  const addTaskHandler = () => {
    addTask(collection, list_id, list_name);
  };
  // Change list color
  const colorChangeHandler = (e) => {
    const styles = getComputedStyle(e.target);
    editListColor(list_id, styles.backgroundColor);
  };
  //Delete list
  const handleDelete = () => {
    deleteList(list_id);
  };

  return (
    <StyledCard style={{ backgroundColor: `${list_color}` }}>
      <Container>
        <StyledForm>
          <InputBase
            id="list-title"
            value={lisTitle}
            disabled={isEditing ? false : true}
            onChange={(e) => setListTitle(e.target.value)}
            onBlur={() => handleTitleEdit()}
            onKeyDown={(e) =>
              e.key === "Enter" ? handleTitleEdit() : () => {}
            }
            onClick={(e) => editOnDoubleClick(e)}
          />
        </StyledForm>

        <TextButton onClick={handleOpen}>
          <BsThreeDots />
        </TextButton>
        <Menu
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handleDelete()}>
            <p>Delete this list</p>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <Container>
              <ListItemButton>
                <ColorPickerButton
                  className="green"
                  onClick={(e) => colorChangeHandler(e)}
                />
              </ListItemButton>
              <ListItemButton>
                <ColorPickerButton
                  className="pink"
                  onClick={(e) => colorChangeHandler(e)}
                />
              </ListItemButton>
              <ListItemButton>
                <ColorPickerButton
                  className="yellow"
                  onClick={(e) => colorChangeHandler(e)}
                />
              </ListItemButton>
              <ListItemButton>
                <ColorPickerButton
                  className="white"
                  onClick={(e) => colorChangeHandler(e)}
                />
              </ListItemButton>
            </Container>
          </MenuItem>
        </Menu>
      </Container>
      {list.map((task) => (
        <Task key={task.task_id} {...task} />
      ))}
      <TextButton onClick={addTaskHandler} className="add-button">
        <BsPlusLg />
        <p>Add task</p>
      </TextButton>
    </StyledCard>
  );
};

export default TaskList;
