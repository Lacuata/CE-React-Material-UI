import React from "react";
import { Tooltip, IconButton } from "@mui/material"; //1a
import DeleteIcon from "@mui/icons-material/Delete"; //1b
export const MuiTooltip = () => {
  return (
    // 1d
    <Tooltip
      title="Delete"
      placement="right"
      arrow
      enterDelay={500}
      leaveDelay={200}
    >
      {/* 1e */}
      {/* 1c */}
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
};

// Tooltip display informative text if user hover focus or tap element they are specially use ful in icon

// 1a to add aa tooltip import it from mateurial ui also need a child element let's use an iconButton

//1b import deleteIcon
// 1c. in JSx ivoke IconButton then child deleteIcon
// 1d. next wrap iconButton component with Tooltip on a tool tip component  we add a prop called title and set it t odelete then import it on App then we can see the icon delete in browser and when we hover the icon delete we can see the tooltip delete by default the tooltip positioned at bottom of element

// 1e we can change the tooltip position using placement prop if we allow vs code placement-'' to suggest prop values we can see there are 12 values in total

// 1f if we want more clear indication we can add arrow prop to Tooltip so when we hover we can see the tooltip has an arrow which point to child

// 1g final set of props that are pretty useful is the enter delay and leave delay props when we enter or hover the icon or tooltip it enterDelay 500 or 0.5s when we hover out it leaveDeley of 200 milliseconds this is useful if we have table elemtn  that need a tooltip
