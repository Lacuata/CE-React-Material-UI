import React, { useState } from "react";
import { Stack, TextField } from "@mui/material";
import { DatePicker, TimePicker, DateTimePicker } from "@mui/x-date-pickers";
export const MuiDTP = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  //   2e
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  console.log({ selectedDate });
  //   console.log({ selectedTime });
  //   2c
  console.log({
    selectedTime: selectedTime && selectedTime.toLocaleTimeString(),
  });

  console.log(selectedDateTime);

  return (
    <Stack spacing={4} sx={{ width: "250px" }}>
      {/* then from jsx within the stack invoke date picker and assign a label prop */}
      <DatePicker
        label="Date Picker"
        // 1g
        value={selectedDate}
        // the arrow on onChange receive the newValue
        onChange={(newValue) => {
          // what is the newValue ? the newValue is the date we selected
          setSelectedDate(newValue);
        }}
      />
      {/*  renderInput returns an arrow functions which returns the textFied component and the function receives a few params that we simply spread on the text component*/}

      {/* 2a */}
      {/* // time picker */}
      {/* 2b */}
      <TimePicker
        label="Time Picker"
        // 1g
        value={selectedTime}
        // the arrow on onChange receive the newValue
        onChange={(newValue) => {
          setSelectedTime(newValue);
        }}
      />
      {/* 2f */}
      <DateTimePicker
        label="Date Time Picker"
        // 1g
        value={selectedDateTime}
        // the arrow on onChange receive the newValue
        onChange={(newValue) => {
          setSelectedDateTime(newValue);
        }}
      />
    </Stack>
  );
};

// DateTimePicker = we need to install date library and date adapter npm i  add date-fns @date-io/date-fns combination f date hyphen function and date hypen io

// 1 in app component import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

// 1a wrap the entire component in app  with the LocalProvider component

// 1b next import date function adapter = import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"; => then specify it on the localizationProvider

// then in MuiDTP import stack to replace div

// 1c to add the date picker in our application we need to import 2 component {DatePicker} from lab and TextField

// 1d next we also need a state variable to manage the selected date value so import useSTate

// 1e next we specify the render input prop which controls the element that displayed as the date picker  this will be the text field input component

// 1g finally let's handle the value and change in value

// time picker

// 2a import TimePicker from @mui/
// 2b create state variable to manage selected time as for jsx we're going to copy paste the date picker and changhe date to time

// when we selected time though the selected value is  the current date along with the selected time ideally you would send the same to the server and handle extracting the time where necessary

//2c however if we wish to preview the selected time on the front end we can log console.log({
//     selectedTime: selectedTime && selectedTime.toLocaleTimeString(),
// });

// 2d now material ui also provides a date time picker which combination of 2 component we have seen the usage again is very similar so let me quickly walk you throught the code

// 2e at top import  DateTimnePicker then create state to track

// 2f next duplicate time picker component an dreplace timepicker with datetimepicker
