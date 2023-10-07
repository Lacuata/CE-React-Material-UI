import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

export const MuiNavbar = () => {
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
          <Button color="inherit">Login</Button>
          {/* ideally we would handle click event on thiese button to navigate different routes but we don't have an route in this application */}
        </Stack>
      </Toolbar>
      {/* then set the App to padding 0 so it's gonna become a navbar */}
    </AppBar>
  );
};

// assume building website pokemon
