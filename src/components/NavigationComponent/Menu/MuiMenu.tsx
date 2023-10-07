import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
// to create a menu we need a 2 components
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
// import an keyBoardarrow icon
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const MuiMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  //   next assign this anchorEl
  const open = Boolean(anchorEl); // this open greturn true when we click the anchor element or handleClick button

  //   assign handler
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    // this will set the button element as anchor element
  };
  // this will hide the menu
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static">
      {/* Invoke Toolbar this components add some  padding to left and right side of navbar within the toolbar we're gonna add an icon button as the logo */}
      <Toolbar>
        {/* the toolbar become padding to the lft and right */}
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          {/* iccon button become a button for PokemonIcon edge where it will placed start means at start and a it become a logo */}
          <CatchingPokemonIcon />
        </IconButton>
        {/* Next to logo add an app name using typography*/}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          //   flexGroup take space of 1 which is remaining space like flex 1 if it's solo if have a sibling it's gonna take the remaining space
        >
          POKEMONAPP
        </Typography>
        {/* now we're gonna add a link on the right side 1st allow typography to grwo the reamaining avaiblable space next we're going to add a stack component with some spacing to accomodate navlink*/}
        <Stack direction="row" spacing={2}>
          <Button color="inherit">Features</Button>
          <Button color="inherit">Pricing</Button>
          <Button color="inherit">About</Button>
          <Button
            color="inherit"
            id="resources-button"
            onClick={handleClick}
            aria-control={open ? "resources-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            endIcon={<KeyboardArrowDownIcon />}
          >
            {/* next we handle the click event on this button and set this as anchor element for our menu  then gegin importing the state */}
            Resources
          </Button>

          <Button color="inherit">Login</Button>
          {/* ideally we would handle click event on thiese button to navigate different routes but we don't have an route in this application */}
        </Stack>
        {/* then set the App to padding 0 so it's gonna become a navbar */}

        {/* Invoke Menu component here */}
        <Menu
          id="resources-menu"
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{
            "aria-labelledby": "resources-button",
          }}
          onClose={handleClose}
          // position
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          {/* within the Menu component add menuItem component */}
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Podcast</MenuItem>
          {/* at this stage we have a menu defined but this menu is hidden by default it will pop up when user interacts with a button or other form control for example let's open this menu on click of a resources button before login button we're going to add resources */}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

// assume building website pokemon
