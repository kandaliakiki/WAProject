import { Button, Grid } from "@mui/material";
import { Container } from "@mui/system";
import { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import ChatHeader from "./components/ChatWindow/ChatHeader/ChatHeader";
import ChatMessage from "./components/ChatWindow/ChatMessage/ChatMessage";
import ChatWindow from "./components/ChatWindow/ChatWindow";
import DropDownFriend from "./components/FriendWindow/DropDownFriend";
import FriendWindow from "./components/FriendWindow/FriendWindow";
import LoginWindow from "./components/LoginWindow/LoginWindow";
import * as api from "./api";

function App() {
  // const userKiki = {
  //   userID: 1,
  //   name: "Kiki",
  // };

  const [user1, setUser1] = useState(undefined);
  const [user2, setUser2] = useState(undefined);
  const [friends, setFriends] = useState([]);

  const handleClickFriend = async (friend) => {
    console.log(friend.name);
    const paramUser = {
      user1ID: user1.userID,
      user2ID: friend.userID,
    };
    const { data } = await api.updateRead(paramUser);
    console.log(data);
    setUser2(friend);
  };
  const navigate = useNavigate();

  const handleSetFriends = (friends) => {
    setFriends(friends);
  };

  const handleRefresh = (friends) => {
    setFriends([]);
    setUser2(undefined);
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

  const handleLogin = (user1) => {
    setUser1(user1);
  };

  const handleUpdateProfile = (user1) => {
    setUser1(user1);
  };

  return (
    <Fragment>
      <Routes>
        <Route
          path="/"
          element={<LoginWindow onLogin={handleLogin}></LoginWindow>}
        ></Route>
        <Route
          path="/chats"
          element={
            <Grid container>
              <Grid item style={{ padding: 15 }} xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    navigate("/");
                    setUser1(undefined);
                    setUser2(undefined);
                  }}
                >
                  Logout
                </Button>
              </Grid>
              <Grid item xs={3}>
                <FriendWindow
                  user1={user1}
                  onClickFriend={handleClickFriend}
                  friends={friends}
                  onSetFriends={handleSetFriends}
                  onAddFriend={handleAddFriend}
                  onDeleteFriend={handleDeleteFriend}
                  onUpdateProfile={handleUpdateProfile}
                  onClickRefresh={handleRefresh}
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
    </Fragment>
  );
}

export default App;
