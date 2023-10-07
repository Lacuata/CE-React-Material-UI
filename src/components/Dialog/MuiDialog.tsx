import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
// 1b

export const MuiDialog = () => {
  // handle opening closing dialog from state
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {/* 1a */}
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog
        aria-labelledby="dialog-title"
        aria-describedbyd="dialog-description"
        open={open}
        onClose={handleClose}
      >
        {/* 1c */}
        <DialogTitle id="dialog-title">Submit the test?</DialogTitle>
        {/* 1d invoke dialogContent within dialogcontent invoke dialogContentText*/}
        <DialogContent>
          <DialogContentText id="dialog-description">
            Are you sure you want to submit the test ? you will not be able to
            edit after submitting
          </DialogContentText>
        </DialogContent>
        {/* 1e invoke DialogAction within the component add 2 buttons with auto focus prof */}
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button autoFocus onClick={handleClose}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

// Dialog is a type of modal that apperas in front of application content to present important information or ask for a decision unlike snackbar dialogues disable all app functionality when they appear  and remain on screen until confirmed or dismissed since they are purposelly interruptive make sure to use them only necessary

// 1 element to open dialog pop up for that let use button and replace the div with a fragment in jsx

// 1a Add a button within the fragment and below thisbutton we add dialog component

// 1b example were gonna create alert dialog which require an acknowledgement from the user let's import component DialogTitle, DialogContent, DialogContentText,DialogActions, these component are nested at various level

// 1c the top most component  is the dialog component   let's invoke it in our jsx within the dialog comp we add the dialog title component the text wil lbe submit the test?

// 1d below the title we add the content

//1e finall let's add an action after dialogContent invoke dialogAction

//2a For the next part let's take care of acceisibility on the Dialog title Component add  id equal to dialog-title

// 2b in Dialog component add aria-label = dialog title

// 2c similarly on dialog content text id = dialog-description and on the dialog compnent aria-describedby='dialog-description
