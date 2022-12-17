import { Container, Grid, IconButton, Typography } from "@mui/material";
import { Fragment, useCallback, useEffect, useState } from "react";
import ListFriendItem from "./ListFriendItem/ListFriendItem";
import * as api from "../../api";
import DropDownFriend from "./DropDownFriend";
import { useNavigate } from "react-router";
import ProfileBar from "./ProfileBar";
import RefreshIcon from "@mui/icons-material/Refresh";
const FriendWindow = ({
  user1,
  onClickFriend,
  friends,
  onSetFriends,
  onUpdateProfile,
}) => {
  const Navigate = useNavigate();

  const fetchFriendByUser = async () => {
    const paramFriend = {
      user1ID: user1.userID,
    };
    const { data } = await api.getFriendByUser(paramFriend);
    for (let i = 0; i < data.length; i++) {
      const isFriendParam = {
        user1ID: user1.userID,
        user2ID: data[i].userID,
      };
      const res = await api.isFriend(isFriendParam);
      const resLastMessage = await api.getLastChatUsers(isFriendParam);
      const newObj = {
        ...data[i],
        isFriend: res.data,
        lastChat: resLastMessage.data[0].message,
      };
      Object.assign(data[i], newObj);
    }

    // data.map((obj) => ({ ...obj, isActive: true }));
    // console.log("data akhir : " + data[0].isFriend);
    onSetFriends(data);
  };

  useEffect(() => {
    fetchFriendByUser();
  }, [friends]);

  useEffect(() => {
    if (user1 == undefined) {
      Navigate("/");
    }
  }, []);
  return (
    <Fragment>
      <Container>
        <IconButton>
          <RefreshIcon> </RefreshIcon>
        </IconButton>
        <ProfileBar
          username={user1.name}
          user1={user1}
          onUpdateProfile={onUpdateProfile}
        ></ProfileBar>
        <ListFriendItem
          friends={friends}
          onClickFriend={onClickFriend}
          user1={user1}
        ></ListFriendItem>
      </Container>
    </Fragment>
  );
};
export default FriendWindow;
