import React, { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";
// import Box = is just a plain old div tag on which we  can specify css properties like height and width
// Menu items is options for our dropdown

export const MuiSelect = () => {
  //   const [country, setCountry] = useState("");
  //   change the county to countries and to array
  const [countries, setCountries] = useState<string[]>([]); // type now is an array of string

  console.log({ countries });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setCountries(event.target.value as string); // we set the target value as string
    // modify the Setcountries

    // to ensure the seelct dropdown value is ourder filled wihch case the value are string rather than array
    const value = event.target.value;
    // typeof the if value equal to string set split the value by comma else return value
    // ex PH, Singapor, CHN
    setCountries(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box width="250px">
      <TextField
        label="Select Country"
        select
        value={countries}
        onChange={handleChange}
        fullWidth // full width set the width or parent to full
        // variation of select dropdown is 1 where you can seelct multiple option let me show you  the changes needed to convert single select to multi select dropdown
        // step 1 specify the selectProps as props
        SelectProps={{
          // we are now targeting the seelct component using this SelectProps if we do this this state need to be converted into array that why we have {{}} let's make the changes since countries is not a string anymore it's an array
          multiple: true, // set as true
        }}
        size="small"
        color="secondary"
        helperText={
          countries
            ? "Please Select The Country where you want to fuck girls"
            : ""
        }
        error
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="PH">Philippines</MenuItem>
        <MenuItem value="US">United State</MenuItem>
      </TextField>
    </Box>
  );
};

// my own
// import React, { useState } from "react";
// import { Box, TextField, MenuItem, Menu } from "@mui/material";

// export const MuiSelect = () => {
//   const [country, setCountry] = useState("");

//   //   const handleChange = (event: React.ChangeEvent<HTMLIFrameElement>) => {
//   //     setCountry(event.target.value as string);
//   //   };
//   console.log(country);
//   return (
//     <Box width="250px">
//       <TextField
//         label="Select Country girl to fuck"
//         value={country}
//         select
//         fullWidth
//         onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
//           setCountry(event.target.value as string)
//         }
//         // onChange={handleChange}
//       >
//         {/* select in textfield is to activate the dropdown in MenuItem */}
//         {/* while full width is to set the width of it to full */}
//         <MenuItem value="PH">Philippines</MenuItem>
//         <MenuItem value="SG">Singapore</MenuItem>
//         <MenuItem value="KR">Korean</MenuItem>
//         <MenuItem value="JPN">Japan</MenuItem>
//         <MenuItem value="CHN">Chinese</MenuItem>
//       </TextField>
//     </Box>
//   );
// };
