import React from "react";
import { useState, useEffect } from "react";
import {
  Grid,
  Avatar,
  TextField,
  Button,
  Alert,
  Typography,
  InputLabel,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";

import { useAuthContext } from "../contexts/AuthContext";

export default function Login() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [newPassword, setNewPassword] = useState();
  const [newPasswordConfirm, setNewPasswordConfirm] = useState();
  const [error, setError] = useState("");
  const [image, setImage] = useState();
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const { signUp } = useAuthContext();

  const navigate = useNavigate();

  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const inputStyle = { margin: "8px 0" };
  const buttonStyle = { margin: "8px 0" };

  useEffect(() => {
    setSuccess("");
    setError("");
  }, []);

  const handleFirstName = (e) => {
    setFirstName(e);
  };

  const handleLastName = (e) => {
    setLastName(e);
  };

  const handleEmail = (e) => {
    setEmail(e);
  };

  const handlePassword = (e) => {
    setNewPassword(e);
  };

  const handlePasswordConfirm = (e) => {
    setNewPasswordConfirm(e);
  };
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSubmit();
    }
  }
  // function handleImageChange(e) {
  //   setImage(e.target.files[0]);
  // }

  async function handleSubmit() {
    let password = newPassword;
    let passwordconfirm = newPasswordConfirm;
    if (password !== passwordconfirm) {
      return setError("Passwords do not match");
    }
    let error = "";
    try {
      const new_user = {
        firstName: firstName,
        lastName: lastName,
        email: email.toLowerCase(),
        // image: image,
        password: newPassword,
        repassword: newPasswordConfirm,
      };
      setError("");
      setLoading(true);
      const response = await signUp(new_user);
      if (response.error) {
        error = response.error.response.data;
        throw new Error(error);
      }
      setSuccess(response.data);
    } catch {
      setError(error || "Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <>
      <Grid sx={{ padding: "6%" }}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Create An Account</h2>
          {error && (
            <Alert style={inputStyle} severity="error">
              {error}
            </Alert>
          )}
          {success && (
            <Alert style={inputStyle} severity="success">
              {success}
              <Button size="small">Close</Button>
            </Alert>
          )}
        </Grid>
        <TextField
          label="First Name"
          placeholder="Enter First Name"
          onChange={(e) => handleFirstName(e.target.value)}
          fullWidth
          required
          style={inputStyle}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <TextField
          label="Last Name"
          placeholder="Enter Last Name"
          onChange={(e) => handleLastName(e.target.value)}
          fullWidth
          required
          style={inputStyle}
          onKeyDown={(e) => handleKeyDown(e)}
        />{" "}
        <TextField
          label="Email"
          placeholder="Enter email"
          onChange={(e) => handleEmail(e.target.value)}
          fullWidth
          required
          style={inputStyle}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          onChange={(e) => handlePassword(e.target.value)}
          fullWidth
          required
          style={inputStyle}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <TextField
          label="PasswordConfirm"
          placeholder="Confirm password"
          type="password"
          onChange={(e) => handlePasswordConfirm(e.target.value)}
          fullWidth
          required
          style={inputStyle}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <Button
          style={buttonStyle}
          disabled={loading}
          type="submit"
          color="primary"
          fullWidth
          variant="contained"
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
        {/* <div className="photo_upload_container">
          <span className="upload_pic_text">Pet Picture</span>
          <InputLabel id="demo-simple-select-label">Profile Picture</InputLabel>
          <input
            type="file"
            onChange={handleImageChange}
            name="newImage"
            id="image"
          />
        </div> */}
        <Typography>
          {" "}
          Already have an account?
          <Button onClick={() => navigate("/login")}>Login</Button>
        </Typography>
      </Grid>
    </>
  );
}
