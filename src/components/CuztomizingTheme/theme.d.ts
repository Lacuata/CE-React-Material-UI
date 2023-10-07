// here import theme options from mui/material/styles
import { ThemeOptions } from "@mui/material/syles";
import React from "react";
// next declare module
declare module "@mui/material/styles" {
  // here from MuiCT add interface Theme
  interface Theme {
    status: {
      danger: string;
    };
  }
  // go back to muict the error is fix

  // write interface
  interface ThemeOptions {
    // we're going to augment our status which contain danger of type React.CSS proprerties
    status: {
      danger: React.CSSPRoperties["color"]; //be more precise the color css properties
    };
  }

  interface Palette {
    neutral?: PaletteColor;
  }

  //   from neutral palette
  interface PaletteOptions {
    neutral?: PalleteColorOptions;
  }
}

// if we do this our error in MuiCT  is automatically  fixed
