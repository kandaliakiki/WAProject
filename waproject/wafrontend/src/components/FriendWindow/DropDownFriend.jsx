import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Container } from "@mui/system";
import * as api from "../../api";
import { Button, Grid } from "@mui/material";

const DropDownFriend = ({ user1, onAddFriend, onDeleteFriend }) => {
  const [allOtherUser, setAllOtherUser] = React.useState([]);
  const [selectedUserID, setSelectedUserID] = React.useState();
  const [selectedUserName, setSelectedUserName] = React.useState();

  const getAllOtherUser = async () => {
    const paramsUser = {
      user1ID: user1.userID,
    };
    const { data } = await api.getAllOtherUser(paramsUser);
    setAllOtherUser(data);
  };

  React.useEffect(() => {
    getAllOtherUser();
  }, [user1]);
  return (
    <Container>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        fullWidth
        options={allOtherUser}
        sx={{ marginTop: "5rem" }}
        renderInput={(params) => <TextField {...params} label="All User" />}
        onChange={(e, newValue) => {
          setSelectedUserID(newValue == undefined ? 0 : newValue.userID);
          setSelectedUserName(
            newValue == undefined ? undefined : newValue.label
          );
        }}
        clearOnBlur
        value={selectedUserName}
      />

      <div style={{ justifyContent: "space-between", marginTop: "1rem" }}>
        <Button
          sx={{ marginRight: "1rem" }}
          variant="contained"
          color="primary"
          onClick={() => {
            onAddFriend(selectedUserID);
          }}
        >
          Add Friend
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            onDeleteFriend(selectedUserID);
          }}
        >
          Delete Friend
        </Button>
      </div>
    </Container>
  );
};

export default DropDownFriend;
