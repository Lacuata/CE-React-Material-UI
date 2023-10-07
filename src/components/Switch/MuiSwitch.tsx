import React, { useState } from "react";
import {
  Box,
  FormControlLabel,
  Switch,
  ThemeProvider,
  createTheme,
} from "@mui/material";

// install this npm install @mui/material @emotion/react @emotion/styled

import CssBaseline from "@mui/material/CssBaseline"; // import this to make the changed work

export const MuiSwitch = () => {
  const [darkMode, setDarkMode] = useState(false); //set false

  const handleChange = () => {
    // in handleChange
    setDarkMode(!darkMode); //setDarkMode(!darkMode) or reverse value of it means true when clicked if the value is true and it's clicked it's false
  };

  //   create theme from createTheme
  const theme = createTheme({
    palette: {
      // if darkMode is true set dark else light
      mode: darkMode ? "dark" : "light",
      // You can customize other theme properties here
    },
  });

  return (
    // use the theme props here to
    <ThemeProvider theme={theme}>
      {/* called it here to make the background change */}
      <CssBaseline />
      <Box>
        <FormControlLabel
          label="Dark mode"
          control={
            <Switch
              checked={darkMode}
              onChange={handleChange}
              size="small"
              style={darkMode ? { color: "#fff" } : { color: "black" }}
            />
          }
        />
        {/* Your other components go here */}
      </Box>
    </ThemeProvider>
  );
};
