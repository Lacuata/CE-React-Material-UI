import React from "react";
import { Alert, AlertTitle, Button, Stack } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check"; //1d

export const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      {/* 1a */}
      <Alert severity="error"> This is an error alert</Alert>
      <Alert severity="warning"> This is an error warning</Alert>
      <Alert severity="info"> This is an info alert</Alert>
      <Alert severity="success"> This is an success alert</Alert>
      {/* 1b */}
      <Alert variant="outlined" severity="error">
        {/* 1c */}
        <AlertTitle>Error</AlertTitle>
        This is an error alert
      </Alert>
      <Alert variant="outlined" severity="warning">
        {/* 1c */}
        <AlertTitle>Warning</AlertTitle>
        This is an warning alert
      </Alert>
      <Alert variant="outlined" severity="info">
        {/* 1c */}
        <AlertTitle>Info</AlertTitle>
        This is an info alert
      </Alert>
      <Alert variant="outlined" severity="success">
        {/* 1c */}
        <AlertTitle>Success</AlertTitle>
        This is an success alert
      </Alert>

      <Alert
        variant="filled"
        severity="error"
        // 1e
        onClose={() => alert("close alert")}
      >
        {/* 1c */}
        <AlertTitle>Error</AlertTitle>
        This is an error alert
      </Alert>
      <Alert variant="filled" severity="warning">
        {/* 1c */}
        <AlertTitle>Warning</AlertTitle>
        This is an warning alert
      </Alert>
      <Alert variant="filled" severity="info">
        {/* 1c */}
        <AlertTitle>Info</AlertTitle>
        This is an info alert
      </Alert>
      <Alert
        variant="filled"
        severity="success"
        icon={<CheckIcon fontSize="inherit" />}
        // 1f
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        {/* 1c */}
        <AlertTitle>Success</AlertTitle>
        This is an success alert
      </Alert>
    </Stack>
  );
};

// import stack component adding several alert compnent and to make use alert component we first import it to the top and now within the jsx stack invoke alert

// 1a alert component acceopt severity as a prop and some text between open and closing tag the serverity can be one erorr of warning info or success let's create alert for each of them then include it on app to displayed each severity

// 1b let's now take a look at useful prop 1st variant can be outlinedo or filled
// 1c next addition is a title to the alert component for that import AlertTitle and within the alert compo we can add AlertTitle similar to other severities and if we head back to brwoser we can see the alert title in the alert
// 1d the next change is that of the icon being displayed at the momment the success alert has a circled check icon let's change that at top import checkIcon and in last success alert component we can set icon={<checkIcon fontSize='inherit'}
// 1e the next change the inclusion of a close button for the alert in error alert let's add onClose={()=> alert('click alert)} when we go back to brwoser we can see the x icon as a close icon at the right side of the Error alert //now i simple have an alert popping up but we can create state variable to manage hiding and shoiwing this alert component

// 1f last but not the least we can include an action element into an alert at the top import button Compnent and in succes alert invoke action props and we can add an button component
