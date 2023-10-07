import React from "react";
import { Stack, Link, Typography } from "@mui/material";

export const MuiLink = () => {
  return (
    <Stack spacing={2} direction="row" m={4}>
      {/* to add a link import link component and now there are 3 props worth mentioning on the link color, underlined we can switch it to hover so when we hover underlined gonna show or none no underlined, and variant the default value is inherit which we can wrap in typography if there are no typography wrapping element we can set the value explicity ex*/}
      <Link href="youtube.com">Link</Link>
      <Link href="youtube.com" color="secondary">
        Secondary
      </Link>
      <Link href="youtube.com" color="secondary" underline="hover">
        underlined
      </Link>
      <Typography variant="h6">
        <Link href="youtube.com" color="secondary" underline="hover">
          Typography
        </Link>
      </Typography>
      {/* explicity */}
      <Link href="youtube.com" variant="body2">
        Typography2
      </Link>
      {/* 1 of the uses of link component aprt for being a standalone link is in the usage of the breadcrumps component */}
    </Stack>
  );
};
