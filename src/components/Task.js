import Checkbox from "@mui/material/Checkbox";

import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

const Task = () => {
  return (
    <form
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <Checkbox color="default" />
      <InputBase placeholder="Task title" />
    </form>
  );
};

export default Task;
