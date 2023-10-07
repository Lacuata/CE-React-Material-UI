import React from "react";
import { Stack, Box, Divider } from "@mui/material";
// the stack component is used to manage layout in 1 dimension either vertical or horizontal

export const MuiStack = () => {
  return (
    <Stack
      // by default the stack component arranged all children element in a column so display flex and flex-direction column is the default
      sx={{
        border: "1px solid",
      }}
      direction="row"
      spacing={2} //this is enumerate value to multiply by default which is 8 so spacing is 16px
      //   divider props which insert an element between each child
      divider={<Divider orientation="vertical" flexItem />} // orientation vertical and specify this is flexITem when we do this we can see a faint vertical divider in between 2 boxes
    >
      <Box
        sx={{
          backgroundColor: "primary.main",
          width: "100px",
          height: "100px",
        }}
      >
        Div
      </Box>
      <Box bgcolor="success.light" width="100px" height="100px" p={2}>
        Div
      </Box>
    </Stack>
  );
};
