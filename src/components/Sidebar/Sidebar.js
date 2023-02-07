import { Link } from "react-router-dom";
import { useState } from "react";
import { useGlobalContext } from "../../context";
// Material UI components
import Autocomplete from "@mui/material/Autocomplete";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
// Styled Components
import { SidebarContainer, SearchBar, BorderButton } from "../../design-system";
// Icons
import {
  BsCalendar4Event,
  BsBookmarks,
  BsStar,
  BsFolder2,
  BsSearch,
  BsChevronDown,
  BsChevronUp,
  BsPlusLg,
} from "react-icons/bs";

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const { state } = useGlobalContext();

  return (
    <SidebarContainer>
      <div className="wrapper">
        <div className="user">
          <div className="icon" />
          <div>
            <p>Hello,</p>
            <h2>Aleksandra</h2>
          </div>
        </div>
        <div className="menu">
          <SearchBar>
            <BsSearch />
            <Autocomplete
              id="custom-input-demo"
              options={["dddd"]}
              renderInput={(params) => (
                <div ref={params.InputProps.ref}>
                  <input
                    type="text"
                    placeholder="Quick search"
                    {...params.inputProps}
                  />
                </div>
              )}
            />
          </SearchBar>
          <div className="links">
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton>
                <Link to="/">
                  <BsCalendar4Event />
                  <p>Today</p>
                </Link>
              </ListItemButton>

              <ListItemButton onClick={handleClick}>
                <BsBookmarks />
                <p>Collections</p>
                {isDropdownOpen ? <BsChevronUp /> : <BsChevronDown />}
              </ListItemButton>

              <Collapse in={isDropdownOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {state.collections.map((collection) => (
                    <ListItemButton>
                      <Link to={`collection/` + collection}>
                        <p>{collection}</p>
                      </Link>
                    </ListItemButton>
                  ))}
                  <ListItemButton>
                    <BsPlusLg className="plus-icon" />
                    <p>New collection</p>
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItemButton>
                <BsStar />
                <p>Starred</p>
              </ListItemButton>
              <ListItemButton>
                <BsFolder2 />
                <p>Archive</p>
              </ListItemButton>
            </List>
          </div>
        </div>
      </div>
      <BorderButton>
        <p>Log out</p>
      </BorderButton>
    </SidebarContainer>
  );
};

export default Sidebar;
