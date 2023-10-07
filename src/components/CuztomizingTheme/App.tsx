import React from "react";

// 1CTa
import { createTheme, colors, ThemeProvider } from "@mui/material";
import { MuiCT } from "./MuiCT";
// ThemeProvider is used to provide a team from other component

// 1CTB
const theme = createTheme({
  //   another common requirment is to add new properties both at the theme level and palette level
  // status didn't exist and in type theme options to fix this  we're going to use what is called module augmentation in tyepscript in another file called theme.d.ts
  status: {
    danger: "#e53e3e",
  },
  //   status error fixed from theme.d.ts because TS now knows the theme object can contain a status propery let's use this value in a component to use this value we're oging to use the styled system sort of approach to creating components in MUICT.tsx

  // object with a property secondary which once again is object
  palette: {
    secondary: {
      // with propert main //this has to be color value
      //   light: "#757ce8",
      //   //   main: "#3f50b5",
      //   dark: "#002884",
      //   contrastText: "#fff",

      // if we find color we want to use import colors from @mui/material and now we can use it
      main: colors.orange[500], // [this is just a shade of orange]
      //   next in MUICT we can change now the bg color
    },
    // next to add another color in a pallete
    neutral: {
      main: colors.grey[500], //assign colors gray
      //   error again to fix this back to theme.d.ts
    },
  },
});
// for referrence go to the color  or https://mui.com/material-ui/customization/color/
// so we can see the different color mui provides out of the box

function App() {
  return (
    <>
      {/* // ThemePRovider is used to privde or pass the theme we created // we pass the custom or const theme we did here so we can now access the theme we did here to MuiCT or other components */}
      <ThemeProvider theme={theme}>
        {/*What is great about this is secondary.light or dark are automatically created based on this main color   */}
        <MuiCT />
      </ThemeProvider>
    </>
  );
}

export default App;
