import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { Fragment, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ChatHeader from "./components/ChatWindow/ChatHeader/ChatHeader";
import ChatMessage from "./components/ChatWindow/ChatMessage/ChatMessage";
import ChatWindow from "./components/ChatWindow/ChatWindow";
import DropDownFriend from "./components/FriendWindow/DropDownFriend";
import FriendWindow from "./components/FriendWindow/FriendWindow";
import LoginWindow from "./components/LoginWindow/LoginWindow";
import * as api from "./api";

function App() {
  const userKiki = {
    userID: 1,
    name: "Kiki",
  };
  const [user1, setUser1] = useState(userKiki);
  const [user2, setUser2] = useState(undefined);
  const [friends, setFriends] = useState([]);
  const handleClickFriend = (friend) => {
    setUser2(friend);
  };

  const handleSetFriends = (friends) => {
    setFriends(friends);
  };

  const handleAddFriend = async (newFriendID) => {
    const paramAddFriend = {
      user1ID: user1.userID,
      user2ID: newFriendID,
    };
    const { data } = await api.addFriend(paramAddFriend);
    console.log(data);
    setFriends([]);
  };

  const handleDeleteFriend = async (newFriendID) => {
    const paramDeleteFriend = {
      user1ID: user1.userID,
      user2ID: newFriendID,
    };
    const { data } = await api.deleteFriend(paramDeleteFriend);
    console.log(data);
    setFriends([]);
  };
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginWindow></LoginWindow>}></Route>
          <Route
            path="/chats"
            element={
              <Grid container>
                <Grid item xs={3}>
                  <FriendWindow
                    user1={user1}
                    onClickFriend={handleClickFriend}
                    friends={friends}
                    onSetFriends={handleSetFriends}
                  ></FriendWindow>
                </Grid>
                <Grid item xs={9}>
                  <ChatWindow user1={user1} user2={user2}></ChatWindow>
                </Grid>
                <Grid item xs={12}>
                  <DropDownFriend
                    user1={user1}
                    onAddFriend={handleAddFriend}
                    onDeleteFriend={handleDeleteFriend}
                  ></DropDownFriend>
                </Grid>
              </Grid>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
