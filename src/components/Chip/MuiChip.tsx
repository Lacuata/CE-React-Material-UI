import React, { useState } from "react";
import { Stack, Chip, Avatar } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
export const MuiChip = () => {
  const [chips, setChips] = useState(["Chip1", "Chip 2", "Chip 3"]); //1g in jsx let's iterate this array and dispay the chip on each element
  // argument is chipToDelete which is type string
  const handleDelete = (chipToDelete: string) => {
    // setChips chips from state then iterate it using filter chip !== chipToDelete  means if chip not equal to chipToDelete don't delete it if equal deleteit
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
    // if chip === chipToDelete means that if chip equal to chipToDelete which is true it's gonna return that and remove other
  };
  return (
    <Stack direction="row" spacing={1}>
      {/* 1b */}
      <Chip
        label="chip outlined"
        color="secondary"
        size="small"
        variant="outlined"
        // avatar={<Avatar>V</Avatar>}
        icon={<FaceIcon />}
      />
      {/* 1d */}
      <Chip
        label="Click"
        color="success"
        onClick={() => alert("clicked")}
      ></Chip>
      {/* 1e */}
      <Chip
        label="Delete"
        color="error"
        onClick={() => alert("Deleete")}
        onDelete={() => alert("Delete handler called")}
      ></Chip>

      {/* 1gA */}
      {chips.map((chip) => (
        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} /> //passing chip to handleDeleete
      ))}
    </Stack>
  ); //1a
};

// in this vide let's take a look at chip component in material ui = chip allow us to enter infromation make selection filter content or triggered actions 1 example will be showcasing tag in a block scope.

//1a.  import Stack compnent and use it and add direction to row and spacing1
// 1b. To create a chip component import chil at the top then invoke it to jsx and now take a look for some props 1st color 2nd size 3rd variant allow is to create an outlined variant
// 1c. Avatar props import it then on the chip add avatar similarly we can also add an icon props instead of avatar
// 1d. By default chip is readOnly however we can handle click event by onClick event let's add a new chip to see that. 1e now similar to click chip also exposes on delete function and that will work in addition to the click handler and now let's see that on a new chip handler using onDelete. and we can see the last chip has an delete icon when we click the delete icon we can see the reminder alert but when we click the chip we can see the onclick alert

// 1g. for the final bit let show the delete handler in action  with an array of chip at top import useState
