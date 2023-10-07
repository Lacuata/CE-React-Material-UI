import React from "react";
import {
  Stack,
  ImageList,
  ImageListItem,
  Box,
  ImageListItemBar,
} from "@mui/material";

// to render imageList component we can use list of images as source
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];

const itemData2 = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
  },
];

const itemData3 = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
  },
];

export const MuiImageList = () => {
  return (
    <Stack spacing={4}>
      {/* Invoke ImageList */}
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {/* not let's define item using ImageList Item */}
        {/* map the imageList array or itemData*/}
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            {/* specify html image element also we append a few query parameters */}
            <img
              // no spacing required particularly in query parameter
              src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
              alt={item.title}
              loading="lazy"
            />
            {/* all these query parameters are related to the unsplaash api if you have your own image collection this url will be much simplier also apsecify alt attribute 
                 and loading as lazy this will ensure images are loaded when required and not all at one when page load*/}

            {/* ImageListItemBar */}
            <ImageListItemBar title={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
      {/* Second image layout */}
      {/* another example woven Image List we can see different image grid */}
      {/* Invok eWoven ImageList */}
      <ImageList
        variant="woven"
        sx={{ width: 500, height: 450 }}
        cols={3}
        gap={8}
      >
        {/* not let's define item using ImageList Item */}
        {/* map the imageList array or itemData*/}
        {itemData2.map((item2) => (
          <ImageListItem key={item2.img}>
            {/* specify html image element also we append a few query parameters */}
            <img
              // no spacing required particularly in query parameter
              src={`${item2.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
              alt={item2.title}
              loading="lazy"
            />
            {/* all these query parameters are related to the unsplaash api if you have your own image collection this url will be much simplier also apsecify alt attribute 
                 and loading as lazy this will ensure images are loaded when required and not all at one when page load*/}

            {/* ImageListItemBar to overlay title of image */}
            <ImageListItemBar title={item2.title} />
          </ImageListItem>
        ))}
      </ImageList>
      {/* 3rd Image LAyout  mansory 1st wrap it on Box Component then move the sx props to box instead on imageList and add overflowY: scroll*/}
      {/* another example masonry Image List we can see different image grid */}
      {/* Invok masonry ImageList */}
      <Box sx={{ width: 500, height: 450, overflowY: "scroll" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {/* not let's define item using ImageList Item */}
          {/* map the imageList array or itemData*/}
          {itemData3.map((item3) => (
            <ImageListItem key={item3.img}>
              {/* specify html image element also we append a few query parameters */}
              <img
                // no spacing required particularly in query parameter
                src={`${item3.img}?w=248&fit=crop&auto=format&dpr=2`}
                alt={item3.title}
                loading="lazy"
              />
              {/* all these query parameters are related to the unsplaash api if you have your own image collection this url will be much simplier also apsecify alt attribute 
                 and loading as lazy this will ensure images are loaded when required and not all at one when page load*/}

              {/* ImageListItemBar to overlay title text of image */}
              <ImageListItemBar title={item3.title} />
            </ImageListItem>
          ))}
        </ImageList>
        {/* The masonry layout is best suited for dynamically sizes uncropped contnet and does will with aspect ratio of image  */}
      </Box>

      {/* Finally we want to showcase the image item bar component which lets you add an overlay to each image import it example the title of it   */}
    </Stack>
  );
};

// ImageList component is used to display a collection of images an organinze grid ex if your building a recipe website for example this component will be very helpul

// For the information about this go to the website https://mui.com/material-ui/react-image-list/#standard-image-list
