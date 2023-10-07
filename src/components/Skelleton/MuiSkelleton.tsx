import React, { useState, useEffect } from "react";
import { Stack, Skeleton, Box, Avatar, Typography } from "@mui/material";
export const MuiSkelleton = () => {
  // 1f
  const [loading, setLoading] = useState(true);
  //   1k
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    // 1
    // <Stack spacing={1} width="250px">
    //   {/* 1a */}
    //   <Skeleton variant="text" animation="wave" />
    //   <Skeleton variant="circular" width={40} height={40} animation={false} />
    //   <Skeleton variant="rectangular" width={250} height={120} />
    // </Stack>

    // 1g
    <Box
      sx={{
        // widthin the box we write jsx for image skeleton and actual image based on loading state
        width: "250px",
      }}
    >
      {
        // if loading is true  else false
        loading ? (
          <Skeleton
            variant="rectangular"
            width="256px"
            height="144px"
            animation="wave"
          />
        ) : (
          // if false render image
          <img
            src="https://source.unsplash.com/random/256x144"
            alt="skeleton"
            width="256px"
            height="144px"
          />
        )
      }
      {/* 1h */}
      <Stack
        direction="row"
        spacing={1}
        sx={{ width: "100%", marginTop: "12px" }}
      >
        {/* // add avatar skeleton and actual component */}
        {loading ? (
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            animation="wave"
          />
        ) : (
          <Avatar>V</Avatar>
        )}

        {/* 1j */}
        <Stack sx={{ width: "80%" }}></Stack>
        {/* within this component we're going to handle the loading state for typography */}
        {loading ? (
          <>
            <Typography variant="body1">
              <Skeleton variant="text" width="100%" animation="wave" />
            </Typography>
            <Typography variant="body2">
              <Skeleton variant="text" width="100%" animation="wave" />
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="body1">React MUI Tutorial</Typography>
          </>
        )}
      </Stack>
    </Box>
  );
};

// Skeleton component = are use to display a placeholder preview of the content before the data get loaded to reduce load time frustation

// 1 import Stack add spacing and width

// 1a to add a skeleton we import the Skeleton compnent now invoke and go to browser we can see the horizontal skeleton component  and that is ecause by default the variant of a skeleton is text

// 1b let's look at 2 other variant 1st variant='text' which is default 2nd variant='circular' take a look at the browser we cann see the circular skeleton this is suitable for avatar

// 1c last varaint is rectangular this is suitable for image

// 1d 1 other prop which is important is the animation prop by default anbimation is pulse we can change that to wave animation so add animation props value wave if we want no anim,ation we can set animation to false

// 1e importing other components Box, Avatar, Typography and useState and Effect

// 1f in component create a loaidng state variable

// 1g replace entire jsx and we're gonna start at box

// 1h add stack

// 1i next we're going to next another stack component

// 1j now if we nest a skeleton inside of typography component the skeleton automatically infers the dimensions of the typography based on the variant this pretty much the jsx we need

// 1k now let add an effect to set loading state to false after 3secs and look at the browser we can see the loading skeleton for 3 secs and then the actual content replaced it
