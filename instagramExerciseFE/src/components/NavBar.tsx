import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FeedIcon from "@mui/icons-material/Feed";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    navigate(newValue);
  };

  return (
    <BottomNavigation
      sx={{ width: "100% " }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction label="Home" value="/home" icon={<HomeIcon />} />
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
  );
}
