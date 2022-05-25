import React, { useEffect } from "react";
import { useState } from "react";
import {
  FormControl,
  InputLabel,
  TextField,
  Button,
  Grid,
  Avatar,
  IconButton,
  Alert,
} from "@mui/material";
import { useAuthContext } from "../contexts/AuthContext";
import CloseIcon from "@mui/icons-material/Close";
import { useActivityContext } from "../contexts/ActivityContext";
import { useNavigate } from "react-router-dom";
import ImageIcon from "@mui/icons-material/Image";

export default function CreatePost() {
  const [error, setError] = useState("");
  const [description, setDescription] = useState();
  const [image, setImage] = useState();

  const { currentUser } = useAuthContext();

  const { createPost } = useActivityContext();

  const navigate = useNavigate();

  const avatarStyle = { backgroundColor: "#1bbd7e" };

  function handleDescription(e) {
    setDescription(e.target.value);
  }

  function handleImageChange(e) {
    setImage(e.target.files[0]);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      onSubmit();
    }
  }

  function onSubmit() {
    // let added = null;
    // existingPet ? editPet(new_pet, existingPet._id) : (added = addPet(new_pet));
    const new_post = {
      description: description,
      img: image,
      userId: currentUser.id,
    };
    const added = createPost(new_post);
    if (added) {
      navigate("/profile");
    }
  }

  const inputStyle = { margin: "8px 0" };

  return (
    <>
      <>
        <Grid sx={{ padding: "6%" }}>
          {/* <Paper elevation=10} style={paperStyle}> */}
          <IconButton onClick={() => navigate("/profile")}>
            <CloseIcon />
          </IconButton>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <ImageIcon />
            </Avatar>
            <h2>Add Post</h2>
            {error && (
              <Alert style={inputStyle} severity="error">
                {error}
              </Alert>
            )}
          </Grid>
          <Grid align="center">
            <FormControl>
              <TextField
                id="outlined-basic"
                label="description"
                variant="outlined"
                multiline
                value={description}
                rows={5}
                onChange={handleDescription}
                style={inputStyle}
                onKeyDown={(e) => handleKeyDown(e)}
              />
            </FormControl>

            <div className="photo_upload_container">
              {/* <span className="upload_pic_text">Pet Picture</span> */}
              <InputLabel id="demo-simple-select-label">
                Upload Image
              </InputLabel>
              <input
                type="file"
                onChange={handleImageChange}
                name="img"
                id="img"
              />
            </div>
            <div className="post_form_button">
              <Button onClick={onSubmit}>Submit</Button>
            </div>
          </Grid>
        </Grid>
      </>
    </>
  );
}
