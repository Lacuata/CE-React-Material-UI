import React, { useState } from "react";
import { Stack, TextField, InputAdornment, Button } from "@mui/material";
// Stack  component from material ui for a better layout
// TextField to ivoke textfield

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export const MuiText = () => {
  const [value, setValue] = useState("");

  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />

        {/* variant outlined is the default, filled is filled textField standard is standard textField where  */}
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField label="Small secondary" size="small" color="secondary" />
        {/* required props add asterisk to the label means required to the label */}
        <TextField label="Form input" required />
        {/* helper text props help text to the input */}
        <TextField label="Form input" helperText="Do not share your password" />
        {/* Type props which coresponds to type attirbute of input element also disabled means wwe cannot edit this field*/}
        <TextField label="password" type="password" disabled />
        {/*  if we dont wnat it to disabled just prevent user to editting the field value we can make it read only using inputProps porps readOnly: true   */}
        <TextField
          label="Read only"
          type="password"
          InputProps={{ readOnly: true }}
        />
      </Stack>
      {/* we can also add prefix and suffixed to the text field we can use input adonment component 1st import InputAdonment from material ui */}
      <Stack spacing={2} direction="row">
        <TextField
          label="Amount"
          InputProps={{
            // we specify startAdornment equal to InputAdornment with props position is equal to start and value/content is $
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        ></TextField>
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">KG</InputAdornment>,
          }}
        ></TextField>
        {/* InputAdornment acts like prefixed and suffixes/ and InputAdornment doesn't have to be just text we can also use icons  example is i or hidden or visible icons you would use normall to a password  */}

        <TextField
          label="Password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button color="primary" endIcon={<VisibilityOffIcon />} />
              </InputAdornment>
            ),
          }}
        ></TextField>

        {/* errorr props toggles error state  using useState*/}
        <TextField
          label="Form input"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          //   conditional render the error state or appropriate random message
          error={!value} //error equal to not value or empty
          helperText={!value ? `Required` : ""} // helperText text below the input in condition if !value or not value or empty helperText will message or Render Required else if we type a value it's gone
        />
      </Stack>
    </Stack>
  );
};
