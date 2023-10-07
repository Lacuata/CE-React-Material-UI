// import React, { useState } from "react";
// import { Box, TextField } from "@mui/material";
// // import { DateRangePicker, DateRange } from "@mui/x-date-pickers-pro";
// import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
// import { DateRange } from "@mui/x-date-pickers-pro";

// export const MuiDRP = () => {
//   const [value, setValue] = useState<DateRange<Date>>([null, null]);

//   console.log({ value });
//   return (
//     <Box width="500px">
//       {/* 2 props for label for 2 input this component will have */}
//       <DateRangePicker
//         startText="Check in"
//         endText="Check out"
//         value={value}
//         onChange={(newValue) => {
//           setValue(newValue);
//         }}
//         renderInput={(startProps, endProps) => (
//           <>
//             <TextField {...startProps} />
//             <Box sx={{ mx: 2 }}>to</Box>
//             <TextField {...endProps} />
//           </>
//         )}
//       />
//     </Box>
//   );
// };

// import * as React from "react";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// export default function MuiDRP() {
//   return (
//     <DemoContainer components={["DatePicker"]}>
//       <DatePicker label="Basic date picker" />
//     </DemoContainer>
//   );
// }
// import React from "react";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// export const MuiDRP = () => {
//   return (
//     <DemoContainer components={["DatePicker"]}>
//       <DatePicker label="Basic date picker" />
//     </DemoContainer>
//   );
// };

import React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

export const MuiDRP = () => {
  return (
    <DemoContainer components={["DateRangePicker"]}>
      <DateRangePicker localeText={{ start: "Check-in", end: "Check-out" }} />
    </DemoContainer>
  );
};

// Date Range Picker a variation of the date picker component as opposed to selecting sinle data range picker lets the user seelct a range of dates the usage is very similar to datepickerr

// 1 import box component and 2 other component DateRangePicker from and TextField from mui/material and since we are working in TS we also need to import date range type from mui/lab

// 1a state variable to manage selectedDate with value of value then an array of 2 values null, null the type is DateRange<Date> of generic type date

// 1b in jsx invoke DateRangePicker component and 2 props

// 1c finally we specify the render input props which is responsible for the component we see in the browser
