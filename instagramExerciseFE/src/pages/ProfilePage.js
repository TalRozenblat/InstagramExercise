import React from "react";
import { useEffect, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import IconButton from "@mui/material/IconButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Button, Avatar, Typography, Box, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFeedContext } from "../contexts/FeedContext";
import { useAuthContext } from "../contexts/AuthContext";

import NavBar_bottom_fixed from "../components/NavBar_bottom_fixed.tsx";

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

export default function ProfilePage() {
  const { logout } = useAuthContext();
  const navigate = useNavigate();

  const { currentUser, profiledUser } = useAuthContext();

  const { profiled_user_posts, getAllUserPosts } = useFeedContext();

  useEffect(() => console.log(profiledUser));

  useEffect(() => {
    getAllUserPosts(profiledUser.id);
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 1,
        }}
      >
        <Button sx={{ margin: 1 }} onClick={() => logout()}>
          Logout
        </Button>
        <Button onClick={() => navigate("/create_post")}>Create a Post</Button>
      </Box>
      <Typography sx={{ display: "flex", justifyContent: "left" }}>
        <Avatar sx={{ marginLeft: 3, marginTop: 1, marginBottom: 2 }}></Avatar>
        <Typography sx={{ marginLeft: 5 }}>{profiledUser.firstName}</Typography>
        <Box sx={{ marginLeft: 10 }}>
          <Typography sx={{ fontSize: "small" }}>Followers: 0</Typography>
          <Typography sx={{ fontSize: "small" }}>Following: 0</Typography>
        </Box>
      </Typography>

      <ImageList sx={{ width: "auto", height: "auto" }} cols={3}>
        {profiled_user_posts.map((item) => (
          <ImageListItem
            sx={{ width: "32vw" }}
            key={item.img}
            onClick={() => navigate("/individual_feed")}
          >
            <img
              src={`${item.Img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.Img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.description}
              className="profile_tile"
              loading="lazy"
            />
            {/* <ImageListItemBar
              title={item.title}
              // subtitle={<span>by: {item.author}</span>}
              position="below"
              actionIcon={
                <IconButton>
                  <ThumbUpIcon />
                </IconButton>
              }
            /> */}
          </ImageListItem>
        ))}
      </ImageList>

      <NavBar_bottom_fixed highlight={"/profile"} />
    </>
  );
}
