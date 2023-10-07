import React, { useState } from "react";
// handle overall state of selective group as well as the change event

import {
  Stack,
  Button,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
// to support bold, italic underlined

// then import 3 icon from icon libraries
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

function MuiButton() {
  //   const [format, setFormat] = useState<string[]>([]);
  const [format, setFormat] = useState<string | null>(null);

  // 1st type of parameter change event second updated format as array of string
  console.log({
    format,
  });
  const handleFormatchange = (
    _event: React.MouseEvent<HTMLElement>,
    // updatedFormats: []

    // same on change hander
    updatedFormats: string | null
  ) => {
    setFormat(updatedFormats);
  };
  return (
    <Stack>
      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="small"
          color="secondary"
          aria-label="allignment button group"
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      {/* new stack for new  */}
      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text formatting"
          value={format}
          onChange={handleFormatchange}
          //   orientation is the direction we want example vertical
          orientation="vertical"
          color="success"
          size="small"
          //   exclusive is only one option at a time so the user can format text either bold italic or underlined
          exclusive
          //   next make changes to our state variable  as a single value or null
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
}

export default MuiButton;
