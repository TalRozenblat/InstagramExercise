import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FeedIcon from "@mui/icons-material/Feed";
import { useAuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function FixedBottomNavigation(props) {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  const {
    highlight,
    feed_html,
    home_html,
    profile_html,
    signup_html,
    login_html,
  } = props;

  const navigate = useNavigate();

  const { currentUser } = useAuthContext();

  React.useEffect(() => console.log(value), [value]);

  React.useEffect(() => {
    setValue(highlight);
  }, []);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />

      {feed_html || home_html || profile_html || signup_html || login_html}
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        {currentUser && (
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              navigate(newValue);
              setValue(newValue);
            }}
          >
            <BottomNavigationAction
              label="Home"
              value="/home"
              icon={<HomeIcon />}
            />
            <BottomNavigationAction
              label="Feed"
              value="/personal_feed"
              icon={<FeedIcon />}
            />
            <BottomNavigationAction
              label="Profile"
              value="/profile"
              icon={<PersonOutlineIcon />}
            />
          </BottomNavigation>
        )}
        {!currentUser && (
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              navigate(newValue);
              setValue(newValue);
            }}
          >
            <BottomNavigationAction
              label="Home"
              value="/home"
              icon={<HomeIcon />}
            />
            <BottomNavigationAction
              label="Signup"
              value="/signup"
              icon={<PersonAddIcon />}
            />
            <BottomNavigationAction
              label="Login"
              value="/login"
              icon={<LoginIcon />}
            />
          </BottomNavigation>
        )}
      </Paper>
    </Box>
  );
}
