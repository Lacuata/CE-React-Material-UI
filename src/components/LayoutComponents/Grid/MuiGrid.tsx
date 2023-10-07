import React from "react";
import { Stack, Box, Divider, Grid } from "@mui/material";
// the stack component is used to manage layout in 1 dimension either vertical or horizontal

export const MuiGrid = () => {
  return (
    <>
      {/* <Stack
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
      </Stack> */}

      {/* Invoke Grid component */}
      {/* grid component have 2 variations a grid container for parent and grid item for children */}
      {/* Grid for parent */}
      <Grid container my={4} rowSpacing={2} columnSpacing={1}>
        {/* my means margin in vertical or y directions 4 x8 32 */}
        {/* grid children */}
        <Grid item xs={6}>
          {/* ex in grid item we specify xs=12} or for all devices mobile size and above  assign 6 out of 12 column for the grid means since we have 12 column per row it's gonna have 2 row we can also specify different grid on different devices example*/}

          {/* if we want to equally distribute the available width between all item rely on auto layout by just adding a break point example xs or md or lg without assigning the value it will automatically equally distribute the width and if we assign a value in any break point example in item 2 we assign a value 6 it's only item 2 gonna take a width of 6 the other will equally distribute it*/}

          {/* we can also assign a value of xs to auto it means the size or width of an item was depends of the content and the rest of the width will equally distributed since it was xs only with no value*/}
          {/* we can also add a spacing props and seperate row and spcaing prrops rowSpacing={2} columnSpacing={1} like this */}
          <Box bgcolor="primary.light" p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={6}>
          {/* prev breakpoint and value xs={12} sm={6} md={3} lg={3}
xs={12} sm={6} md={3} lg={3}
xs={12} sm={6} md={3} lg={3} */}
          <Box bgcolor="primary.light" p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

// Grid component under the hood uses flexbox module consist of 12 columns eah item in the grid can take up one or more columns as its width there are 5 breakpoint each corresponding to a certain device width xs for mobile devices size, sm for table md for desktop lg and xl ofr larger monitor we can assign integer value to each break point which indicate howmany of the 12 available columns are occupied by the item when the viewport satisfies that breakpoint constriants
