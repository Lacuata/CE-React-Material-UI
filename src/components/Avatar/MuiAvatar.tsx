import React from "react";
import { Stack, Avatar, AvatarGroup } from "@mui/material";

export const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={1}>
        {/* customize change the color  or specify*/}
        <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}> CK</Avatar>
      </Stack>

      <Stack direction="row" spacing={1}>
        {/* customize change the color  or specify*/}

        <Avatar sx={{ bgcolor: "secondary.light" }}> WL</Avatar>
        <Avatar sx={{ bgcolor: "danger.dark" }}> Ciaoo</Avatar>
        {/* generate a random image from this api */}
        <Avatar
          src="https://randomuser.me/api/portraits/women/79.jpg"
          alt="Jane"
        />
        <Avatar
          src="https://randomuser.me/api/portraits/women/11.jpg"
          alt="sarah"
        />
      </Stack>

      {/* if we wish too we can group avatar together they're useful for ex when we want to showcase speaker on event to group them import AvatarGroup component and wrap individual avatar with the import component*/}
      <Stack direction="row" spacing={1}>
        <AvatarGroup max={3}>
          <Avatar
            src="https://randomuser.me/api/portraits/women/21.jpg"
            alt="sarah"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/women/10.jpg"
            alt="sarah"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/women/50.jpg"
            alt="sarah"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/women/60.jpg"
            alt="sarah"
          />
          {/* now take a look in browser we can see the avatar group with no spacing  istead overlaping with individual avatar it's also possible to restrict number of avatar tod display using maax props we can see 2 avatar +2 avatar logo or icon the +2 or last avatar contains the remaining number of avatar in group this is pretty handy if we don't have much space to work*/}
        </AvatarGroup>
      </Stack>

      {/* another example if we wish to change  the size we can use width and height in sx props */}
      <Stack direction="row" spacing={1}>
        {/* customize change the color  or specify*/}
        <Avatar sx={{ bgcolor: "primary.light", width: 50, height: 50 }}>
          BW
        </Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}> CK</Avatar>
      </Stack>

      {/* finally if you want a square shape avatar we can add variant='square and the avatar is square now or rounded*/}
      <Stack direction="row" spacing={1}>
        {/* customize change the color  or specify*/}
        <Avatar
          variant="square"
          sx={{ bgcolor: "primary.light", width: 50, height: 50 }}
        >
          BW
        </Avatar>
        <Avatar
          variant="rounded"
          sx={{ bgcolor: "primary.light", width: 50, height: 50 }}
        >
          BW
        </Avatar>
      </Stack>
    </Stack>
  );
};
