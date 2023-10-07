import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from "@mui/material";
// formcontrol the wrapper conponent
// form label to specify the label for the group of radio buttons
// FormControlLabel to label the individual radio buttons
// RadioGroup wrap the individual component
export const MuiRadio = () => {
  // now we're gonna track the selected value
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  console.log({ value });
  return (
    <Box>
      {/* Create a radio button group for a user to select number of uears of experience they have */}
      <FormControl error>
        <FormLabel id="job-experience-group-label">
          Years of experience
        </FormLabel>
        {/* next we specify radio group component and set a name */}
        <RadioGroup
          name="Job-experience-group"
          aria-labelledby="job-experience-group-label"
          value={value}
          onChange={handleChange}
          //   onChangeCapture={(event: React.ChangeEvent<HTMLInputElement>) =>
          //     setValue(event.target.value)
          //   }
          row // to assign the direction to row we can't use direct='row' here
        >
          {/* connect formLabel  with radio group using id and ara labeled by for accessibility if we are done with that next speciify the labels for different option using formControlLabel is a self closing tag */}
          <FormControlLabel
            control={<Radio size="medium" color="primary" />}
            label="0-2"
            value="0-2"
          />
          {/* specify props in FormControlLabel 1st props is control represent  the formControl component  we're going to set it to be radio component next specify label whcih will be shown to the user using the label props this will be 0-2 years experience and finally we specify the value which is  be tracked when the option is selected*/}

          {/* similarly create an 2 more option for 3-5 and 6-10 years */}
          <FormControlLabel
            control={<Radio size="medium" color="secondary" />}
            label="3-5"
            value="3-5"
          />
          <FormControlLabel
            control={<Radio size="medium" />}
            label="6-10"
            value="6-10"
          />
          {/* and that is pretty much our radio group component */}
          {/* we can add props like size and color in Radio component */}
          {/* we can also add a error prps in FormControl component same the error Message using FormHelperText */}
        </RadioGroup>
        <FormHelperText>Invalid Selection</FormHelperText>
      </FormControl>
    </Box>
  );
  //
};
