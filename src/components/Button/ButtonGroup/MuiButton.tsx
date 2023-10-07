import React from "react";

import { Stack, Button, ButtonGroup } from "@mui/material";

function MuiButton() {
  return (
    <Stack>
      <Stack direction="row">
        {/* import button group component then wrap them to make them look better */}
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="small"
          color="secondary"
          aria-label="allignment button group"
          //   aria-label whill help us with accessibility
        >
          {/* if we want this button group to display vertically we can pass orientation props this gonnad display the buttonGroup vertically*/}
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
        {/* when we use Buttongroup component the variant should be specified on button group and  not on the individual buttons means we can declared variant on ButtonGroup and we don't need to declare it in button*/}
      </Stack>
    </Stack>
  );
}

export default MuiButton;
