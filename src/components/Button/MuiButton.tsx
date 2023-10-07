import React from "react";
// import mui button
import { Stack, Button, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send"; // from material icon theme then add it to component

// import stack which material ui provides for exactly the usecase we have

function MuiButton() {
  return (
    <Stack spacing={4}>
      {/* // now instead of wrapping with div tag use stack and specify spacing and
      direction row layout with spacing 2 */}
      <Stack spacing={2} direction="row">
        {/* the mui button has 3 variant we can use  */}
        {/* text variant */}
        {/* the text variant is typically use when you have to grab less attention in the ui example card footer or the confirmation pop up */}
        <Button variant="text">Text</Button>
        {/* second contained variant */}
        {/* contained is used when we want to grab the user's attention and is used for primary actions in our application example registration or login button */}
        <Button variant="contained">Contain</Button>
        {/* third is outlined varaint*/}
        {/* outline variant is in between text and contained in terms of grabbing user attention can be used as secondary action in our application example cancel or go back button */}
        <Button variant="outlined">Outline</Button>

        {/* this button becomes a link because we use the href attribute on the text variant // we need to use the whole https address */}
        <Button variant="text" href="https://www.youtube.com">
          Youtube Link
        </Button>
      </Stack>

      {/* new rows stack that all variant color of the button */}
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Erorr
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>

      {/* Next let's talk about size for larger or smaller utton we an use the size prp */}
      <Stack display="block" spacing={2} direction="row">
        {/* display as a block component is important as a display flex is the default value and affects the size of button*/}
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>

      {/* add icon in material ui by installing the library icon by material ui npm i m@mui/icons-material then after installing go to the meterial icon find the icon you want copy it paste above*/}
      <Stack spacing={2} direction="row">
        {/* and use it like this a startIcon */}
        <Button variant="contained" startIcon={<SendIcon />}>
          Send
        </Button>
        {/* and to add icon after text text  we can use the endIcon*/}
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          disableElevation
          disableRipple
          onClick={() => alert("Clicked")}
        >
          {/* disableElevation is to remove or disable the shadow of button */}
          {/* disableRipple disable the ripple effect on button to know it compare the sendIcon when clicked to endIcon */}
          Send
        </Button>

        {/* if you want a button just an icon without any text we can create that button using iconButton component import it above  and use it like this*/}
        <IconButton aria-label="send" color="success" size="small">
          <SendIcon />
        </IconButton>
        {/* IconButtons  are more appropriate for navigation bars where the regular buttons might look too pronounced */}
      </Stack>
    </Stack>
  );
}

export default MuiButton;
