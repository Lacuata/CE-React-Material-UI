import React from "react";
import { Box } from "@mui/material";
export const MuiBox = () => {
  // box component  in it's most basic form is use as replacement as div tag it is a plain old div tag the box component since it awrapper component we will be usingh it in most of the pages we;re building it's to wrap content in div tag for block code
  return (
    <>
      <Box>CodeEvolution</Box>;
      {/* // and of course if we don't want to wrap
      component in div tag if we are focusing on semantic html it could be a
      section tag an article tag etc. to count for that box component accept
      component props example this one is a span tag now */}
      <Box component="span">This is a span</Box>
      {/* curious? why not just used div span and other <html> element that is because the box component accepts a prop called sx which is used for definingh a custom style that has access to the theme. Let's add some style to this box component sx is a prop equal to an object */}
      <Box
        // component="span"
        sx={{
          backgroundColor: "primary.main", // this correspond to the color in our predefined theme
          color: "black",
          height: "100px",
          width: "100px",
          padding: "16px",
          border: "1px solid black",
          //   finally specify style when we hover on the element and this is also an object again
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
        // now if we we're to use regular inline style in normal html tag we cannot access the theme nor specify hover styles like we have done here box component is pretty useful
      >
        This is a span 2
      </Box>
      {/* // other parts of box component is that as a css utility component it supports what are called material ui system properties that simply means we can use a lot of css properties as props directly on the component example */}
      {/* now we're gonna apply or add a few style props that material ui supports   
           now display flex props does not affect our layout in thisc urrent component but i just show to you how to create a flex container shorter name props bgcolor is bacgroundColor p to padding*/}
      <Box
        display="flex"
        height="100px"
        width="100px"
        bgcolor="success.light"
        p={2} // assign a value that multiply in 8px default ex 2x 8 = 16px padding
      >
        Hello
      </Box>
    </>
  );
};
