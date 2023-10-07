import React, { useState, forwardRef } from "react"; //1c //1g
import { Button, Snackbar, Alert, AlertProps } from "@mui/material"; //1g

// 1h      //specify generic type as html div elem and AlertProps
const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  // to forward ref we pass infunction SnackbarAlert with recive props and ref as param
  function SnackbarAlert(props, ref) {
    // and return Alert with elevation and ref===ref and remaining props using spread
    return <Alert elevation={6} ref={ref} {...props} />;
    // now we can comment out the existing snackbar
  }
);

export const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);

  //   1e handleClose has 2 param React synthetic Or Event which is not needed for the function =2nd param is reason which is populated based on the event that triggers on close and this is a type string
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    // 1 of the reason for on close to be fired is that user clicked away  in that case we don't do anything
    if (reason === "clickaway") {
      return;
    }
    // for other scenario we close the snackbar
    setOpen(false);
  };

  return (
    <>
      {/* // 1a */}
      <Button
        // 1d
        onClick={() => setOpen(true)}
      >
        Submit
      </Button>
      {/* means if we clicked button it's the open gonna be true so the Snackbar gonna show because it's true now  */}
      {/* 1b */}

      {/* 1h part 2 */}
      {/* <Snackbar
        message="form submitted sucessfully"
        autoHideDuration={4000}
        //1c // 1e
        open={open}
        onClose={handleClose}
        //1f placement to position the snackbar
        anchorOrigin={{
          vertical: "bottom", // we can change the vertical to top bottom or center
          horizontal: "center", // the horizontal left to right
        }}
      /> */}

      {/* 1h part 3 and add the custom snackbar */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        {/* then within the open and closing tagwe call our custom snackbar alert */}
        <SnackbarAlert onClose={handleClose} severity="success">
          {/* when the text is form subbmited  but we also specify onClose equal to handle close and severity is success*/}
          Form subbmited successully
        </SnackbarAlert>
        {/* and go back to browser click on submit  */}
      </Snackbar>
    </>
  );
};

// snack bars provide brief notification also known as toast notifications as per material guidelines snack bars inform users of a process that an app has performed or will perform they appear temporarily towards bottom to the screen  they shouldn't interrupt  the user experience and don't require user input  to the disappear

// 1 to add a snack bar we need a snack bar component from material ui import it also a trigger element we will use Button in jsx replace div with react fragment

// 1a next add a button compnent
// 1b below button add snackbar and on this component we specify text to be displayed using the message props.  specify autohide duration props for the test notification to close automatically and let's set it 4000milissecond or 4 secs
//1c and control visibility of this component using open and onClose props on the top import useState and within the component create variable open using state

// 1d onClick on the submit button setOpen to true or pass true

// 1e then on snackbar we assign the oepn value as aprop called open and we also handle close event that equal handleClose so when we click the button the snackbar gonna be true and it's gonna display then the autoHideDuration gonna run after 4s to hide

// 1f if we want to change the placement we can do using the anchor origin prop

// 1g customize it using the alert import Alert and AlertProps and the forwardRef  function from react

// 1h now we define our custom snackbar alert component
