import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar } from "@mui/material";
import ProfileUpdate from "./ListFriendItem/ProfileUpdate";

export default function ProfileBar({ username, user1, onUpdateProfile }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Avatar sx={{ mr: 2 }}>{username.substring(0, 1)}</Avatar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {username}
          </Typography>
          <ProfileUpdate
            user1={user1}
            onUpdateProfile={onUpdateProfile}
          ></ProfileUpdate>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
