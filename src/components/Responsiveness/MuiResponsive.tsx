import React from "react";
import { Box } from "@mui/material";

export const MuiResponsive = () => {
  return (
    <Box
      sx={{
        height: 300,
        // width: 300,
        width: {
          xs: 100, //  xs width 100px applies when viewport width is above zero
          sm: 200, // sm width of 200px applies when viewport width is 600px above
          md: 300, // md for 900 above px
          lg: 400, // lg for 1200 above px
          xl: 500, // 15036 above px
          //   means it's gonna apply width only when viewport reach the required example if viewport is 0 it's gonna apply 100 if viewport is 1200 above gonna apply 400px
        },
        bgcolor: "primary.main",
      }}
    >
      MuiResponsive
    </Box>
  );
};

// Responsiveness in material ui to add responsive value for css property we can use break point short hand syntax

//1 and set width and height to 300px and bgcolor to primary main

// 1a if we want this to be responsive and change based on the viewport width we can use the 5 breakpoint mui provide

// 1b for width css properties specify value as object and the keys for this object will be the five breakpoints and value is the corresponding width

// 1c let said sx: 100, sm:200, md: 300, lg: 400, xl: 500

// 1d let also add the coresponding width for the break point

// for other example go to  https://mui.com/material-ui/react-stack/ and grid component for other example
