import React from "react";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import NaviagateNextIcon from "@mui/icons-material/NavigateNext";

export const MuiBreadCrumbs = () => {
  return (
    <Box>
      {/* import BreakCrumps and invoke it to dispaly link and text import link and typography */}
      {/* // for accessibility we add aria-label */}
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NaviagateNextIcon fontSize="small" />}
        maxItems={2} // number of link to display at a given times by default the breadcrumps compnent show 8 items we canc hange that using this maxItems={2} in this exampl we have 4 item we set maxItems 2 it's  gonna show only 2 and we're gonna have a like icon ... when we clicked it will expand or show the remaining 2 link
        itemsBeforeCollapse={2} // gonna set the 2 items on the right side as well means after after collapse so in right before left we're gonna see 2 link before or after
      >
        {/* the separator is the one who seperate the link each other the default is / since we change it to - using separator  we can also use an icon*/}

        {/* within the Breadcrumbs component for every route we call that we use link component except for the current route user is viewing */}
        {/* so if we were to have a route hierarchy four levels deep here is how we can specify breadcrumbs\*/}
        <Link underline="hover" href="#">
          Home
        </Link>
        <Link underline="hover" href="#">
          Catalog
        </Link>
        <Link underline="hover" href="#">
          Accesory
        </Link>
        {/* specify typography compnent */}
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};

// Breakcrumbs is a type of secondary navigation scheme that reveals the user 's location in a website
