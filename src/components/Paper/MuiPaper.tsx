import React from "react";
import { Paper } from "@mui/material";

// paper component is a greate component to use when creating layout and provides a visual hierarchy which is very important im material design

export const MuiPaper = () => {
  return (
    <>
      {/* Let's assume we havea content in our page like a sign up or contact form common ui design put that content in a card with some elavation and shadow well that can be done in paper compoent  Paper also add a white background to distinguish this from time  add a background to body to see it the elevation part is to control shadow in Paper the default is 1*/}
      <Paper sx={{ padding: "32px" }} elevation={4}></Paper>
    </>
  );
};
