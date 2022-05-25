import React from "react";
import {
  Grid,
  Avatar,
  TextField,
  Button,
  Typography,
  Alert,
} from "@mui/material";
import { useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useAuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword(props) {
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { resetPassword } = useAuthContext();

  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const inputStyle = { margin: "8px 0" };
  const buttonStyle = { margin: "8px 0" };

  const handleUsername = (e) => {
    setEmail(e);
  };

  const navigate = useNavigate();

  async function handleSubmit() {
    try {
      setMessage("");
      setError("");
      setLoading(true);
      const response = await resetPassword(email);
      setMessage(response.data);
    } catch {
      setError("Failed to reset password");
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
          <h2>Reset Password</h2>
          {error && (
            <Alert style={inputStyle} severity="error">
              {error}
            </Alert>
          )}
          {message && <Alert severity="success">{message}</Alert>}
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter username"
          onChange={(e) => handleUsername(e.target.value)}
          fullWidth
          required
          style={inputStyle}
        />
        <Button
          style={buttonStyle}
          type="submit"
          color="primary"
          fullWidth
          variant="contained"
          onClick={handleSubmit}
        >
          Reset Password
        </Button>
        {/* <Typography> */}
        <Button
          style={buttonStyle}
          type="submit"
          color="primary"
          fullWidth
          variant="contained"
          onClick={() => navigate("/login")}
        >
          Back to Log In
        </Button>
        {/* </Typography> */}
        <Typography>
          {" "}
          Don't have an account?
          <Button
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign Up
          </Button>
        </Typography>
      </Grid>
    </>
  );
}
