import React, { useState } from "react";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // e

export const MuiDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const setClose = () => {
    setIsDrawerOpen(false);
  };

  const setOpen = () => {
    // we updated the setIsDrawerOpen to true when we clicked this so the open in drawer gonna true and it will open it
    setIsDrawerOpen(true);
  };

  //a anchor specify or control which direction sidebar open
  return (
    // f wrap the jsx with fragment and add icon button import it also and menu icon inside of it
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        // onClick={() => setIsDrawerOpen(true)}
        onClick={setOpen}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen} // we set here the open props isDrawerOpen
        //d   onClose={() => setIsDrawerOpen(false)} last but not the least we need button to open and close drawer component let's create icon button
        onClose={setClose} // here the close
      >
        {/*b specify sidebar */}
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            Side Panel
          </Typography>
        </Box>
        {/*c our drawer is now ready but as it stand drawer will be hidden as that default behaviro to control the open and close of drawer we need a state variable */}
      </Drawer>
      {/* final comment this is the temporary drawer the mui also supports permanent draswer variant but that needs quite a bit knowledge in layout */}
    </>
  );
};

// Drawer component can be used to create a sidebar can be used for number of thing depend on your application can contain other pages links to other pages in our app allow us to swtich account etc.

// we will create temporary drawer
