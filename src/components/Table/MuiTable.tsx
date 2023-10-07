import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

//1d
const tableData = [
  {
    id: 1,
    first_name: "Wency",
    last_name: "Lacuata",
    email: "wenceslaolacuata@gmail.com",
    gender: "Male",
  },
  {
    id: 2,
    first_name: "Ciaoo",
    last_name: "Mir",
    email: "Cioomir@gmail.com",
    gender: "Male",
  },
  {
    id: 1,
    first_name: "Y",
    last_name: "Mir",
    email: "ymir@gmail.com",
    gender: "Male",
  },
  {
    id: 1,
    first_name: "Wency",
    last_name: "Lacuata",
    email: "wenceslaolacuata@gmail.com",
    gender: "Male",
  },
  {
    id: 2,
    first_name: "Ciaoo",
    last_name: "Mir",
    email: "Cioomir@gmail.com",
    gender: "Male",
  },
  {
    id: 1,
    first_name: "Y",
    last_name: "Mir",
    email: "ymir@gmail.com",
    gender: "Male",
  },
  {
    id: 1,
    first_name: "Wency",
    last_name: "Lacuata",
    email: "wenceslaolacuata@gmail.com",
    gender: "Male",
  },
  {
    id: 2,
    first_name: "Ciaoo",
    last_name: "Mir",
    email: "Cioomir@gmail.com",
    gender: "Male",
  },
  {
    id: 1,
    first_name: "Y",
    last_name: "Mir",
    email: "ymir@gmail.com",
    gender: "Male",
  },
];

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First name</TableCell>
            <TableCell>Last name</TableCell>
            {/* 1g */}
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* 1f */}
          {tableData.map((table) => (
            <TableRow
              key={table.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{table.id}</TableCell>
              <TableCell>{table.first_name}</TableCell>
              <TableCell>{table.last_name}</TableCell>
              {/* 1g */}
              <TableCell align="center">{table.email}</TableCell>
            </TableRow>
            // this properties correspond the tableData array and we import it in app and look at the browser we should be able to see the table with 4 cols id fn ln and email
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

// table component help display sets of data/ displaying data in a simple format
// react table package owrk really well in material ui if we have a complex table to create in our application if its basci data display you can by all means use the table related components from material ui

//1a to create a table we need to import TableContainer  TableContainer,Table,TableHead,TableBody,TableRow,TableCell,Paper, then replace div with tableContainer and specify component prop and assign Paper component

// 1b within the container we invoke the table component and add aria-label for accessibility

// 1c within the table tag we invoke the table head and body at the same level and now we;re ready for some data

// 1d now we can create an array of objects
//1e next within the table head component add a tablerow and each row will have 4 cols so we invoke TableCell 4x

// 1f now for the actual data in tablebody we're gonna map the tableData array using map and  some styling   sx={{ "&:last-child td, &:last-child th": { border: 0 } }} for the last th and td we have border 0 now within each table row we add 4 table cell 1 for each cols

// 1g 2 prop which is helpul intable 1st align Prop on table cell email we align them center the align property is useful with numeric columns since numeric values are right aligned the

//1h 2nd prop is stickyHeader prop which can be applied to the table component because often we are going to face the situiation where your table only has limited height in that case the table data might have to scroll but we want header to stay in place in TableContainer set maxHeight to 300px and in table set stickyHeader

// the output of this is when we have data around 10+ when we have a scroll when we scroll theheader ar sticky to the top
