import React from "react";
import "./App.css";
// from MuiDTP 1
// import { LocalizationProvider } from "@mui/lab";
// 1b
// import AdapterDateFns from "@mui/lab/AdapterDateFns";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// 1CTa
import { createTheme, colors } from "@mui/material";

// import { MyTypography } from "./components/MyTypography";
import MuiButton from "./components/Togglebutton/MuiButton";
import { MuiText } from "./components/TextField/MuiText";
import { MuiSelect } from "./components/SelectComponent/MuiSelect";
import { MuiRadio } from "./components/RadioButton/MuiRadio";
import { MuiCheckbox } from "./components/CheckBox/MuiCheckbox";
import { MuiSwitch } from "./components/Switch/MuiSwitch";
import { MuiRating } from "./components/Rating/MuiRating";
import { MuiAutoComplete } from "./components/AutoComplete/MuiAutoComplete";
import { MuiBox } from "./components/LayoutComponents/Box/MuiBox";
import { MuiStack } from "./components/LayoutComponents/Stack/MuiStack";
import { MuiGrid } from "./components/LayoutComponents/Grid/MuiGrid";
import { MuiPaper } from "./components/Paper/MuiPaper";
import { MuiCard } from "./components/Card/MuiCard";
import { MuiAccordion } from "./components/Accordion/MuiAccordion";
import { MuiImageList } from "./components/ImageList/MuiImageList";
import { MuiNavbar } from "./components/NavigationComponent/NavBar/MuiNavbar";
import { MuiMenu } from "./components/NavigationComponent/Menu/MuiMenu";
import { MuiLink } from "./components/NavigationComponent/Link/MuiLink";
import { MuiBreadCrumbs } from "./components/BreadCrumbs/MuiBreadCrumbs";
import { MuiDrawer } from "./components/NavigationComponent/Drawer/MuiDrawer";
import { MuiSpeedDial } from "./components/NavigationComponent/SpeedDial/MuiSpeedDial";
import { MuiButtom } from "./components/LayoutComponents/Buttom/MuiButtom";
import { MuiAvatar } from "./components/Avatar/MuiAvatar";
import { MuiBadge } from "./components/Badge/MuiBadge";
import { MuiList } from "./components/List/MuiList";
import { MuiChip } from "./components/Chip/MuiChip";
import { MuiTooltip } from "./Tooltip/MuiTooltip";
import { MuiTable } from "./components/Table/MuiTable";
import { MuiAlert } from "./components/Feedback/MuiAlert";
import { MuiSnackbar } from "./components/Snackbar/MuiSnackbar";
import { MuiDialog } from "./components/Dialog/MuiDialog";
import { MuiProgress } from "./components/Progress/MuiProgress";
import { MuiSkelleton } from "./components/Skelleton/MuiSkelleton";
import { MuiLoadingButton } from "./components/LoadingButton/MuiLoadingButton";
import { MuiDRP } from "./components/DateRangePicker/MuiDRP";
import { MuiTabs } from "./components/Tabs/MuiTabs";
import { MuiTimeline } from "./components/Timeline/MuiTimeline";
import { MuiMasonry } from "./components/Masonry/MuiMasonry";
import { MuiResponsive } from "./components/Responsiveness/MuiResponsive";
// import { MuiDTP } from "./components/DateTimePicker/MuiDTP";

function App() {
  return (
    // 1a // this is the initial setup necessary to work with date and time pickers in material ui
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        {/* <MyTypography /> */}
        {/* <MuiButton /> */}
        {/* <MuiText /> */}
        {/* <MuiSelect /> */}
        {/* <MuiRadio /> */}
        {/* <MuiCheckbox /> */}
        {/* <MuiSwitch />
      <MuiRating />
      <MuiAutoComplete />
      <MuiBox />
      <MuiStack /> */}
        {/* <MuiGrid /> */}
        {/* <MuiPaper />
      <MuiCard />
      <MuiAccordion /> */}
        {/* <MuiImageList /> */}
        {/* <MuiNavbar /> */}
        {/* <MuiMenu /> */}
        {/* <MuiLink /> */}
        {/* <MuiBreadCrumbs />
      <MuiDrawer />
      <MuiSpeedDial />
      <MuiButtom />
      <MuiAvatar /> */}
        {/* <MuiBadge />
      <MuiList />
      <MuiChip />
      <MuiTooltip />
      <MuiTable /> */}
        {/* <MuiAlert /> */}
        {/* <MuiSnackbar />
      <MuiDialog />
      <MuiProgress /> */}
        {/* <MuiSkelleton /> */}
        {/* <MuiLoadingButton /> */}
        {/* <MuiDTP /> */}
        {/* <MuiDRP /> */}
        {/* <MuiTabs /> */}

        {/* <MuiTimeline /> */}

        {/* <MuiMasonry /> */}
        <MuiResponsive />
      </div>
    </LocalizationProvider>
  );
}

export default App;
