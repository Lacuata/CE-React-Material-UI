import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItemButton,
  Divider,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
export const MuiList = () => {
  return (
    <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
      {/* to create a list we need to import couple of component */}
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            {/* we can specify also an icon  on list like this */}
            <ListItemIcon>
              {/* Wrap MailIcon with Avatar and wrap avatar with ListAvatar */}
              <ListItemAvatar>
                <Avatar>
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            {/* to customize the list futher we can add an avatar instead of jsut the icon*/}

            {/* specify primary props assign the text to be displayed this is the basoc list we can create in material ui  */}
            <ListItemText
              primary="List item 1"
              secondary="Secondary text"
            ></ListItemText>
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            {/* we can specify also an icon  on list like this */}
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText
              primary="List item 2"
              secondary="Secondary text"
            ></ListItemText>
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            {/* we can specify also an icon  on list like this */}
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText
              primary="List item 3"
              secondary="Secondary text"
            ></ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

// Let's learn how to display data as a list in material ui

// secondary=''to make secondary text on ListItemText
//ListItemButton to make it clickable button
// allignment seems to be incorect add disablePdding props on listItem component
// Divider seperate item import it add it on between lsitItem component and we can see the seperation of listItem
