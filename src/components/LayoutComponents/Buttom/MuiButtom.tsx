import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";

export const MuiButtom = () => {
  const [value, setValue] = useState(0);
  {
    /* lets position this component as bottom of thescren and  ensure it takes up the full variable width  */
  }
  return (
    <BottomNavigation
      sx={{ width: "100%", position: "absolute", bottom: 0 }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels //to always show the labels and visible
    >
      {/* now add different actions 3 actions to import  and invoke here*/}
      <BottomNavigationAction //ButtomActive action is show the icon as active with background or color primary
        label="Home"
        icon={<HomeIcon />}
      ></BottomNavigationAction>
      <BottomNavigationAction
        label="Home"
        icon={<FavoriteIcon />}
      ></BottomNavigationAction>
      <BottomNavigationAction
        label="Home"
        icon={<PersonIcon />}
      ></BottomNavigationAction>
      {/* nxt we handle action icon using a state variable along with value and onchange */}
      {/* the active actions is showing fine because we only have 3  */}
    </BottomNavigation>
  );
};

// buttom navigation component is more suited on mobile and tablet devices is used to switch between the primary destination in application
