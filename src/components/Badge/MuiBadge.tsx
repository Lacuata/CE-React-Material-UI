import React from "react";
import { Badge, Stack } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

export const MuiBadge = () => {
  return (
    <Stack spacing={2} direction="row">
      {/* to add the badge import Badge and MailIcon that we can use as the child for the badge component */}
      <Badge badgeContent={5} color="primary">
        {/* on this component we can specify the badge content using badgeContent prop let's also specify  a primary color for badge using color prop the badgeContent is the or like the notification of how many notify we get*/}
        <MailIcon />
      </Badge>

      <Badge badgeContent={0} color="secondary" showZero>
        {/* what can we do if badgeContent is 0 is not displaying we can overwrite this behavior by specifying the showZero props */}
        <MailIcon />
      </Badge>

      {/* another example if we set badgecontent to 100+ we can see the badge notifi 99+ because the default max value is 99 we can change that using max props to change the max value*/}
      <Badge badgeContent={100} color="secondary" showZero max={999}>
        <MailIcon />
      </Badge>

      {/* Final prps is variant props we can change the badgecontent to variant dot  this can be used as a notifacation that something has changed  without giving a count value like a message dot in messagenger when someone message us it showing a blue dot*/}
      <Badge variant="dot" color="secondary" invisible={true}>
        {/* invisible={true} if we want to hide the badge  */}
        {/* what if we assigning a value based on props or state or data from api ?  example invisible={unreadEmails.length === 0} assume unreadEmails is an array fetched frn an api */}
        <MailIcon />
      </Badge>
    </Stack>
  );
};

// the badge component generate a small badge to the top right of it's child element
