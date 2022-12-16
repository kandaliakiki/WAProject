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

export default function ChatHeader({ username2 }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Avatar sx={{ mr: 2 }}>{username2.substring(0, 1)}</Avatar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {username2}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
