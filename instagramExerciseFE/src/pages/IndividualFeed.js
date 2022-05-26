import React from "react";
import NavBar_bottom_fixed from "../components/NavBar_bottom_fixed.tsx";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import IconButton from "@mui/material/IconButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { useFeedContext } from "../contexts/FeedContext";
import { useAuthContext } from "../contexts/AuthContext";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
  },
];

export default function IndividualFeed() {
  const { getAllUserPosts, profiled_user_posts } = useFeedContext();
  const { currentUser } = useAuthContext();

  const feed_html = (
    <ImageList sx={{ width: "auto", height: "auto" }} cols={1}>
      {profiled_user_posts.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.Img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.Img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            // title={item.title}
            subtitle={
              <>
                <div className="feed_name"> {currentUser.firstName}</div>
                <div className="feed_description"> {item.description}</div>
              </>
            }
            position="below"
            actionIcon={
              <IconButton>
                <ThumbUpIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );

  return (
    <>
      <NavBar_bottom_fixed highlight={"/personal_feed"} feed_html={feed_html} />
    </>
  );
}
