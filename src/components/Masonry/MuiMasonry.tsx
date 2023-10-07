import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Paper,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Masonry } from "@mui/lab";

const heights = [150, 30, 90, 70, 110, 150, 80, 50, 90, 100, 150, 30, 50, 80];

export const MuiMasonry = () => {
  return (
    <Box sx={{ width: 500, minHeight: 400 }}>
      <Masonry columns={4} spacing={1}>
        {/* within this component iterate heights */}
        {
          heights.map((height, index) => (
            <Paper
              key={index}
              sx={{
                // 1e
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
                // height, // the height is the passing argument

                border: "1px solid ",
              }}
            >
              {/* for the text content specify  index + 1*/}
              {/* {index + 1} */}
              {/* 1e  */}{" "}
              {/*min heighr means height element in each iteration within the accordion component AccordionSummary and Details */}
              <Accordion sx={{ minHeight: height }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  {/* Invoke Typography */}
                  <Typography>Accordion {index + 1}</Typography>
                </AccordionSummary>
                <AccordionDetails>Content</AccordionDetails>
              </Accordion>
            </Paper>
          ))
          // for each item we're gonna return paper component from material ui with a few style apply
        }
      </Masonry>
    </Box>
  );
};

// Masonry component maintains a list of content blocks with a consistent width but differnet height the contents are ordered by row if a row is already filled with the specified number of columns the next item starts another row and it is added to the shortest column in order to optimize the use of space

// 1 for the masonry compnent we import the masonry in mui lab

// 1a for content of varying height i'm going to copy paste an array of differnt number in heights

// 1b in jsx we invoke Masonry component cols 4 and spacing 1

// 1c imposible to handle item with varying heights as well with accordion component

// 1d import Accordion, AccordionSummary, AccordionDetails, Typography

//1e next in Paper componet comment out all styles except the border

// 1f for the paper child itself we will now replace with an accordion we can also import the Expand more icon and on accordion summary expandIcon={<ExpandMoreIcon />}

// Take a look at he browser we can see the masonry layout
