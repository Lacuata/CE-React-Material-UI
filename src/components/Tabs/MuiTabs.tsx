import React, { useState } from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import FavoriteIcon from "@mui/icons-material/Favorite";
export const MuiTabs = () => {
  const [value, setValue] = useState("1");
  //   handlechange
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            width: "300px",
            margin: "auto",
          }}
        >
          <TabList
            aria-label="Tabs example"
            onChange={handleChange}
            textColor="secondary" // the text color is the text on TabList when we clicked it willchange to secondary
            indicatorColor="secondary" // the indicators is the borderBottom
            // centered
            // make it scrollable
            variant="scrollable" //make scrollable the tab
            scrollButtons="auto"
          >
            <Tab
              label="Tab One"
              value="1"
              icon={<FavoriteIcon />}
              iconPosition="start" //to change the position of icon
            />
            <Tab
              label="Tab Two"
              value="2"
              //   disabled //disabled disable tab
            />
            <Tab label="Tab Three" value="3" />
            <Tab label="Tab Four" value="4" />
            <Tab label="Tab Five" value="5" />
            <Tab label="Tab Six" value="6" />
          </TabList>
        </Box>
        {/* this box is connected to this tabPanel  we have 4 tags with label 1-4 and tabpanel changes depends or equal to value*/}
        <TabPanel value="1">Panel 1</TabPanel>
        <TabPanel value="2">Panel 2</TabPanel>
        <TabPanel value="3">Panel 3</TabPanel>
        <TabPanel value="4">Panel 4</TabPanel>
        <TabPanel value="5">Panel 5</TabPanel>
        <TabPanel value="6">Panel 6</TabPanel>
      </TabContext>
    </Box>
  );
};

// for the tab layout we need to import 4 components from core package import Tab from lab import TabContex, TebList, TabPanel

// 1 for jsx begin in tab context within tabContext we're going to add a box component for some border

// 1a withiin the Box component add a tab list component and within tabList add the individual tabs

// 1b next after the closing box tag we add the tab panel component 1 to 3

// 1c Finally we manage the active tab using a state and set a value with initial value of 1 in state

// 1d on the tab context component add value props = to the state value

// 1e next on the tab list handle changeEvent

// To change the highlight color we can change the change color and indicate color prop and centered props to centered the tab we can also add icon in tab label

// if we want scrollable tab we can do that remove centered props specify variant='scrollable' and scrollButtons='auto' and on Box component set width: '300px'
