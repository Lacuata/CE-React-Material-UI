import React from "react";
import { CircularProgress, LinearProgress, Stack } from "@mui/material";

export const MuiProgress = () => {
  return (
    <Stack spacing={2}>
      {/* 1  // 1a */}
      <CircularProgress color="error" />
      {/* 1b */}
      <CircularProgress variant="determinate" value={25} />
      {/* 1c */}
      <LinearProgress color="error" />
      <LinearProgress variant="determinate" value={25} />
    </Stack>
  );
};

// Progress = indicators inform users about the status of the ongoing processes such as loading an app or submitig a form or saving updates in mui we have linear and  circular indicators and eah of them can be  indeterminate or determined the usage is pretty straightforward

// 1 import stack and  now import circular progress for circular progress and invoke it in stack and invoke to app then go to brwoser we can see the circular progress being displayed by default it is an indeterminate progress means will never stop spinning

// 1a props we can specify 1st color

// 1b finally if we are comportable showing the amount of progress we can create determinate progress using variant props and value prop 1-100 if we set 1 to 100 it will fixed the progress on that number percent

// 1c on similar lines mui also provides a linear progress compnent  at the top import linearProgress and make a copy  of 2 circulatingProgress compnent and change it to linearprogress and go back to brwoser we can see the same progress behavior but this time it is linear instead of circular linear = -------------- circular= O
