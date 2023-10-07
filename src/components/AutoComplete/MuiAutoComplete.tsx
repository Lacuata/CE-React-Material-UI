import React, { useState } from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";

// create an aray of Skills
const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];

// define a type of Skills which is gonna be an object
type Skill = {
  id: number;
  label: string;
};
// next create an array using the existing skills array({ means returns an object})
const skillsOptions = skills.map((skill, index) => ({
  id: index + 1, // since index start to 0
  label: skill, // skill itselft means skills in a skills array
}));

export const MuiAutoComplete = () => {
  const [value, setValue] = useState<string | null>(null);
  // in handle change 2 argument event type is any means any and newValue which is string or null

  //   new for skills variable
  const [skill, setSkill] = useState<Skill | null>(null);

  //   console.log({ value });
  console.log({ skill });

  const handleChange = (event: any, newValue: string | null) => {
    setValue(newValue); // set the newValue to setValue
  };

  const handleSkillChange = (event: any, newValue: Skill | null) => {
    setSkill(newValue);
  };
  return (
    <Stack spacing={2} width="250px">
      {/* invoke Autocomplete this has 2 mandatory props 1st options which should be an array of  strings and assign it to options props the 2nd props render input which render the input this is equal to arrow function we return TextField*/}
      <Autocomplete
        //   this autoComplete behaves likes a combo box when we click inside we see the option select an option and the value is shown we can also clear the selected value we can also start typing a few leter we see the list of suggestions and select one option
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={handleChange}
        // to allow free text we can use the free solo Props means we can type any without restrictions or returning no option
        freeSolo // this scenario is suitable in autocomplete like google Search
      />

      {/* the function receives parameter  which we are simply going to spread over the textfield component*/}

      {/* second example we want to use the autoComplete again with different
      instructions of inputData the auto complete component can accept either an
      array of string or an array of object contain label key le'ts make it
      works with an array of obj 1st efine type above */}

      {/* next we're gonna duplicate the auto complete compnent */}
      <Autocomplete
        options={skillsOptions}
        value={skill}
        // skillsOption array of object  when we do this we also need to update state variable create new one
        renderInput={(params) => <TextField {...params} label="Skills" />}
        onChange={handleSkillChange}
      />
    </Stack>
  );
};
