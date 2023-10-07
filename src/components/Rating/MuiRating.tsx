import React, { useState } from "react";
import { Stack, Rating } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const MuiRating = () => {
  const [value, setValue] = useState<number | null>(3);
  //   2 arguments 1st param event which we can ignore in function body the 2nd argument whichh is newValue param type number | null or null
  console.log({ value });
  const handleChange = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValue(newValue); // pass the new Value

    // so everyTime we select 1 of the start the new value would be a number that update state variable and null is no value since we ddidn't seelct star yet also when we click the same star rating null gonna return and gonna unselect the star
  };
  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="small"
        icon={<FavoriteIcon fontSize="inherit" color="error" />} // this is heart icon
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        // readOnly
        // next props is read only props which make the reading component display only what value we want to display ex we set the value to null in state change it to 3 it will display only 3 and not gonna hange

        highlightSelectedOnly // final props which as the name indicates highlights only 1 icons instead of all icons leading up to that value  if we call this we need to remove the ReadOnly in this example since we set the state value to 3 it gonna highlights only the number 3 heart icon but it is selectable means we can select which icon we want to highlight unlike the readOnly this is suitable when we collecting feedback using emojis
      />
    </Stack>

    // useful props we can specified on the rating component 1st is precision at the moment we can seelct 1 to 5 when we use precision we can now select 0.5 to 4.5 or .5 of each star number
    // next props size can be sm md large
    // next props are icon and  empty icon which help customize the rating icon example import 2 icon from material ui FavoriteIcon and FavoriteBorderIcon now on rating component we can specify icon equal to favoriteIcon and FontSize='inherit' and emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
  );
};
