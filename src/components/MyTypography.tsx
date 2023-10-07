import React from "react";
import { Typography } from "@mui/material";

export const MyTypography = () => {
  return (
    <div>
      {/* <Typography></Typography> */}
      {/* there are 13 different variations of this component but we are going to look at 
      10 important ones in this video */}

      {/* 1st  heading variant to specify the variant  we uyse variant propss for heading change to h1 to h6*/}
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4">h4 Heading</Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      {/* 2 more variant  that h6 tag we can use it's subtitle1 and 2 */}
      <Typography variant="subtitle1">Sub1 Heading</Typography>
      <Typography variant="subtitle2">Sub2 Heading</Typography>

      {/* final 2 variant related to body tag*/}
      <Typography variant="body1">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid sit
        odit quasi illum nisi, officiis autem? Veritatis nostrum impedit eius!
      </Typography>
      <Typography variant="body2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet impedit,
        corporis atque perferendis laboriosam distinctio assumenda dolore, ipsa
        eligendi culpa itaque molestias, odio fugiat modi?
      </Typography>

      {/* // typography component can be changed the semantic element using props ex. this means that we want to manipulate this typography tag to have an h1 element in console but h4 variant or size  */}
      <Typography variant="h4" component="h1">
        h4 Heading
      </Typography>

      {/* the next or final prop is gutter bottom on  this new h4 that is value is false when we declared it as gutterBottom and we check it using the inspect element we can see we have a margin at bottom*/}
      <Typography variant="h4" gutterBottom>
        h4 Heading
      </Typography>
    </div>
  );
};
