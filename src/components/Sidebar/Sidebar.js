import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { useGlobalContext } from "../../context";
// Material UI components

import {
  Autocomplete,
  List,
  Link,
  Collapse,
  ListItemButton,
} from "@mui/material";

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
              <ListItemButton component={RouterLink} to="/">
                <BsCalendar4Event />
                <p>Today</p>
              </ListItemButton>

              <ListItemButton
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <BsBookmarks />
                <p>Collections</p>
                {isDropdownOpen ? <BsChevronUp /> : <BsChevronDown />}
              </ListItemButton>

              <Collapse in={isDropdownOpen} timeout="auto" unmountOnExit>
                <List component="div">
                  {state.collections.map((collection) => (
                    <ListItemButton
                      component={RouterLink}
                      key={collection}
                      to={`collection/` + collection}
                    >
                      {collection}
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
