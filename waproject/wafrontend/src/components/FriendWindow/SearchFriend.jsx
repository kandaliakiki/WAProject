import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Container } from "@mui/system";
import * as api from "../../api";
import { Button, Grid } from "@mui/material";

const SearchFriend = ({ user1, friends, onClickFriend }) => {
  const [allFriends, setAllFriends] = React.useState([]);
  const [selectedUserID, setSelectedUserID] = React.useState();
  const [selectedUserName, setSelectedUserName] = React.useState();
  React.useEffect(() => {
    const arrays = [];
    for (let i = 0; i < friends.length; i++) {
      const obj = {
        ...friends[i],
        label: friends[i].name,
      };
      arrays.push(obj);
    }

    setAllFriends(arrays);
  }, [friends]);
  return (
    <Container>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        fullWidth
        options={allFriends}
        sx={{ marginTop: "5rem" }}
        renderInput={(params) => (
          <TextField {...params} label="Search Friends" />
        )}
        onChange={(e, newValue) => {
          onClickFriend(newValue);
          // setSelectedUserID(newValue == undefined ? 0 : newValue.userID);
          setSelectedUserName(
            newValue == undefined ? undefined : newValue.label
          );
        }}
        clearOnBlur
        value={selectedUserName}
      />
    </Container>
  );
};
export default SearchFriend;
