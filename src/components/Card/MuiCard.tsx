import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
// import Card and CardContent
// for content let's specify a simple text heading and description import Typography

export const MuiCard = () => {
  return (
    <Box width="300px" marginTop="20px">
      <Card>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/random"
          alt="unsplash image"
        />
        <CardContent>
          {/* gutterBottom is margin at bottom variant is h5 and component of it is div */}
          <Typography gutterBottom variant="h5" component="div">
            react
          </Typography>
          <Typography variant="body2" color="text.secondary">
            React is a JavaScript library for building user interfaces. React
            can be used as a base in the development of a single-page or mobile
            applications.
          </Typography>
        </CardContent>
        {/* CardAction to contain an actions at the bottom the actions are typically a button so let's import Button*/}
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn more.</Button>
        </CardActions>
        {/* adding image to the cart import cardmedia component*/}
      </Card>
    </Box>
  );
};

// card component is useful when creating layouts for a single topic
