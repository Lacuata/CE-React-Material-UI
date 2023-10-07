import React, { useState } from "react";
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export const MuiCheckbox = () => {
  const [acceptTnC, setAcceptTnC] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);
  console.log({ acceptTnC });
  console.log({ skills });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnC(event.target.checked);
  };

  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // all we have todo is toggle the value in the array if vvalue present remove it if not added it
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      //if not present
      setSkills([...skills, event.target.value]);
      //   set setSkills[...skills] spreading the skills and adding the checked skills o
    } else {
      // else filter it if skill not equal to event.target.value or the checked add it if it's equal remove it
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };
  return (
    <Box>
      {/* create a checkBox accept tersm and condition */}
      <Box>
        <FormControlLabel
          label="I Accept terms and condition"
          //   in Checkbox component add check props assign state variable
          //    next handle changeEvent
          control={
            <Checkbox
              checked={acceptTnC}
              //   onChange={
              //     (event: React.ChangeEvent<HTMLInputElement>) =>
              //       setAcceptTnC(event.target.checked) // and pass event.target.checked since we use checked instead of value
              //   }
              onChange={handleChange}
              size="small"
            />
          }
          //   it's also possible to use icon in the checkbox
        ></FormControlLabel>
      </Box>
      {/* now in a tsx we can specify a check box using just icons without any label */}
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          //   now track the checked state
          checked={acceptTnC}
          onChange={handleChange}
        ></Checkbox>
      </Box>
      {/* for our last example let's learn how to work with a checkbox group example let's create a group of 3 checkbox where user can seelct their skill  now to use a checkbox group we need more 3 components at the top import formControl Formlabel and FormGroup from material ui and now in the jsx or tsx add a new box */}
      <Box>
        {/* within the box add formControl */}
        <FormControl>
          {/* within FormControl we add a label to the group using formlabel component 
           below the formLabel we add the form Group component within the formGroup we add 3 form control label component where the control is checkbox*/}
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              //   add new value props
              control={
                <Checkbox
                  checked={skills.includes("html")}
                  value="html"
                  onChange={handleSkillChange}
                />
              }
              //   on the checkBox for the checked state we see if the corresponding value is present in the array using skills.includes('html') similarly to the css and javascript
            />

            <FormControlLabel
              label="CSS"
              //   add new value props
              control={
                <Checkbox
                  checked={skills.includes("css")}
                  value="css"
                  onChange={handleSkillChange}
                />
              }
            />

            <FormControlLabel
              label="JavaScript"
              //   add new value props
              control={
                <Checkbox
                  checked={skills.includes("javascript")}
                  value="javascript"
                  onChange={handleSkillChange}
                />
              }
            />
          </FormGroup>
          {/* we now have a checkbox group last part track the selected checkboxes */}

          <FormHelperText>Invalid Selection</FormHelperText>
          {/* FormHelperText if we want an error message we can add formhelpertext  */}
        </FormControl>
      </Box>
    </Box>
  );
};
