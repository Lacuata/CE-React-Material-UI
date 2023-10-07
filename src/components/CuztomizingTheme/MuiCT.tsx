import React from "react";
import { Box } from "@mui/material";

// ex
import { createTheme, colors } from "@mui/material";
//New
import { styled } from "@mui/material"; //new
// next create a styled box component

const StyleBox = styled(Box)(({ theme }) => ({
  height: "250px",
  width: "250px",
  //   backgroundColor: theme.status.danger, // if we do this TS through an error from status to fix this we need to go back and update another interface to in theme.d.ts

  backgroundColor: theme.palette.neutral?.main,
})); //passing box as an argument then () again within ( specify arrow function and deestructure the theme object and we are going to return set of properties)

export const MuiCT = () => {
  return (
    <>
      <Box
        sx={{
          // since we are based on secondary.main which is orange it automatically created the .light .dark to us using the main or orange color of it
          bgcolor: "secondary.dark",
        }}
      >
        MuiCT
      </Box>
      {/* //new now if we fixed the error invoke react fragment and invoke the
      styled component and take a look at the browser */}
      <StyleBox />
    </>
  );
};

// go to this https://mui.com/material-ui/customization/theming/
//important  https://mui.com/material-ui/customization/default-theme/

// Let's create how to customize our own application brand

//1CT to create theme import on app.tsx import { createTheme } from '@mui/material' next before app component called function assign it on a constant theme = createTheme({}) the function accept object as it's argument the object structure should match the theme ojbect structure which is similar to default theme we look at material ui
