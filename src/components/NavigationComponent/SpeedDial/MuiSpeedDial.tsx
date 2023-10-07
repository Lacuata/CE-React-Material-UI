import React from "react";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import CopyIcon from "@mui/icons-material/FileCopyOutlined";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";
export const MuiSpeedDial = () => {
  //a. replace div with speeddial compo and add an aria-label for accessibility and position to bottom right
  return (
    <SpeedDial
      ariaLabel="Navigation speed dial"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      //   b. next specify icons prop which will be equal to the speeddial icon we imported when this icon is clicked the user will presented a few options let add those option using speed dial action component
      icon={<SpeedDialIcon openIcon={<EditIcon />} />} //we're gonna import 3 icons
    >
      {/* //   c. invoke  speeddial action*/}
      <SpeedDialAction icon={<CopyIcon />} tooltipTitle="Copy" tooltipOpen />
      <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print" tooltipOpen />
      <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" tooltipOpen />
    </SpeedDial>
    // this component is more applicable for mobile devices if we want to always be visible we can pass the tooltip open props  on the speed dialaction compnent by tooltipOpen and if we want to change the speed dial icon whenw e press the button or hover we can add the openIcon prop on the speed dial icon and inside of it the EditIcon from matrial icon component 1st import editIcon
  );
};
