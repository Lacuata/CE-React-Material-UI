import React from "react";
import { Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";
export const MuiLoadingButton = () => {
  return (
    <Stack spacing={2} direction="row">
      <LoadingButton variant="outlined">Submit</LoadingButton>
      {/* 1b */}
      <LoadingButton loading variant="outlined">
        Submit
      </LoadingButton>
      {/* 1c */}
      <LoadingButton loadingIndicator="loading..." variant="outlined">
        Fetch Data
      </LoadingButton>
      {/* we're going to make a copy of that and add the loading prop */}
      <LoadingButton loading loadingIndicator="loading..." variant="outlined">
        Fetch Data
      </LoadingButton>

      {/* 1d */}
      <LoadingButton
        variant="outlined"
        loadingPosition="start"
        startIcon={<SaveIcon />}
      >
        Save
      </LoadingButton>
      {/* make a copy and add a loading props to see difernet  */}
      <LoadingButton
        loading
        variant="outlined"
        loadingPosition="start"
        startIcon={<SaveIcon />}
      >
        Save
      </LoadingButton>
    </Stack>
  );
};

// let's take a look at some of the component avialable in material lab package  the lab package contains component that are still under development and might need a bit of work before they are part of the core package however they are at a stage where you can start using them at our application we have a couple or lab component to learn about so in this video let's learn the LoadingButton

//1 install lab package npm i add@mui/lab

// 1a import stack and import LoadingButton from lab package loadingButton behave similar to regular button component however the loading button makes it easy  to show a loading state with the help of loading prop

// 1b we're going to add aloading button with and without loading prop set true that will help us see the diference invoke it and app look at browser
// result we should be able to see the loading button component when loading  is false and loading is true // if the loading is true the submit text is replaced with circular progress and the btn are disable this is something  you would otherwise do for a good user experience  now it is built right into the button component using the loading prop

// 1c it also possible to control the loading text inside the button let add anew button now take a look at browser the 1st button has text fetch data and when laoding is true the text Loading followed by ellipses which is the value of the loading indicator prop is displayed the button is still disabled

//1d Finally we can use loadingButton with icons import saveIcon and add a new loading button // if we take a look at the browser we can see the 1st button we have icons and take  in the loading state the start icon is replaced with circular icons with same position  we can do the same for an end icon by setting loadingposition to end
