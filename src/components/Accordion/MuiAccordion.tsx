import React, { useState } from "react";
// import Accordion, Accordion summary and Details
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const MuiAccordion = () => {
  const [expanded, setExpanded] = useState<string | boolean>(false);

  //   handler change isExpanded: isboolean panel is a string that we pass from  onChange
  const handleChange = (isExpanded: boolean, panel: string) => {
    // if Expanded is true panel1 : else false means if exPanded is true which is the onChange handler is panel1 as string it will expand else it will not expand
    setExpanded(isExpanded ? panel : false);
    // in short if we click panel1 it will expand and panel2 and 3 not
    // if we click panel 2 after clicking panel1 the panel1 will not expand anymore and panel 2 will expand same on panel 3 it only gonna expand 1 panel ateach change
  };
  return (
    <>
      <Accordion
        expanded={expanded === "panel1"}
        // onchange argument the change event and  whether the accordion is isExpanded  as arguments then handleChange passing in isExapnded and a string that uses for comparison on the expanded props which is panel1
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            eaque omnis minus soluta quis provident veniam quos delectus
            similique ex tempora? Harum quae placeat optio?
          </Typography>
        </AccordionDetails>
        {/* // now ew can see our Accordion component which is expand and colapse when we click the summary */}
      </Accordion>

      {/* Accordion Group */}
      <Accordion
        expanded={expanded === "panel2"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            eaque omnis minus soluta quis provident veniam quos delectus
            similique ex tempora? Harum quae placeat optio?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            eaque omnis minus soluta quis provident veniam quos delectus
            similique ex tempora? Harum quae placeat optio?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

// Accordion component allow user to show and hide sections of related content on a page
// Accordion  can contain any content example simple text so import Typography

// using state variable to trach wehen click an accordion
