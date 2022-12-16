import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { Fragment, useState } from "react";
import "./App.css";
import ChatHeader from "./components/ChatWindow/ChatHeader/ChatHeader";
import ChatMessage from "./components/ChatWindow/ChatMessage/ChatMessage";
import ChatWindow from "./components/ChatWindow/ChatWindow";
import FriendWindow from "./components/FriendWindow/FriendWindow";

function App() {
  const userKiki = {
    userID: 1,
    name: "Kiki",
  };
  const [user1, setUser1] = useState(userKiki);
  const [user2, setUser2] = useState(undefined);
  const handleClickFriend = (friend) => {
    setUser2(friend);
  };
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={3}>
          <FriendWindow
            user1={user1}
            onClickFriend={handleClickFriend}
          ></FriendWindow>
        </Grid>
        <Grid item xs={9}>
          <ChatWindow user1={user1} user2={user2}></ChatWindow>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default App;
