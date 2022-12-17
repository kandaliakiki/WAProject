import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";
import * as api from "../../../api";

export default function ProfileUpdate({ userID, user1, onUpdateProfile }) {
  const [open, setOpen] = React.useState(false);
  const [newName, setNewName] = React.useState();
  const [newPassword, setNewPassword] = React.useState();
  const [error, setError] = React.useState(undefined);
  const handleClickOpen = () => {
    setOpen(true);

    setNewPassword("");
    setNewName("");
    setError(undefined);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    console.log(user1.userID);
    const paramUpdate = {
      userID: user1.userID,
      name: newName,
      password: newPassword,
    };
    const { data } = await api.updateUser(paramUpdate);
    if (data === "user has been updated") {
      console.log("user has been updated");
      setOpen(false);
      const paramUser = {
        userID: user1.userID,
      };
      const res = await api.getUserByID(paramUser);
      onUpdateProfile(res.data);
    } else {
      setError(data);
      console.log(data);
    }
    // console.log(data)
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Update Profile
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Profile</DialogTitle>
        <DialogContent>
          <DialogContentText>Isi Nama dan Password yang baru</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            fullWidth
            variant="standard"
            value={newName}
            onChange={(e) => {
              setNewName(e.target.value);
            }}
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
          />
          <Typography color="red" variant="body2">
            {error ? error : ""}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
