import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import { BsPlusLg, BsGear } from "react-icons/bs";
import TaskList from "../components/TaskList";
import {
  DashboardHeader,
  Container,
  TextButton,
  GridContainer,
} from "../design-system";
import { Menu, MenuItem } from "@mui/material";

const Collection = () => {
  const { state, filterTasks, sortTasksByLists, addList, deleteCollection } =
    useGlobalContext();
  const { collectionId } = useParams();
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);
  //All tasks in this collection
  const tasks = sortTasksByLists(filterTasks(state.tasks, collectionId));
  //Open list options menu
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  //Close list options menu
  const handleClose = () => {
    setAnchorEl(null);
  };
  //Delete list
  const handleDelete = () => {
    console.log("ok");
    deleteCollection(collectionId);
  };

  return (
    <div>
      <DashboardHeader>
        <Container>
          <h2>{collectionId}</h2>
          <TextButton onClick={handleOpen}>
            <BsGear />
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
              <p>Edit title</p>
            </MenuItem>
            <MenuItem onClick={() => handleDelete()}>
              <p>Delete collection</p>
            </MenuItem>
          </Menu>
        </Container>
        <Container>
          <TextButton onClick={() => addList(collectionId)}>
            <BsPlusLg />
            <p>New list</p>
          </TextButton>
        </Container>
      </DashboardHeader>
      <GridContainer>
        {tasks.map((list) => (
          <TaskList
            key={list[0].list_id}
            list={list}
            collection={collectionId}
          />
        ))}
      </GridContainer>
    </div>
  );
};

export default Collection;
