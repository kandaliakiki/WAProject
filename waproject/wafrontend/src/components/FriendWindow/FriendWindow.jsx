import { Container, Grid, IconButton, Typography } from "@mui/material";
import { Fragment, useCallback, useEffect, useState } from "react";
import ListFriendItem from "./ListFriendItem/ListFriendItem";
import * as api from "../../api";
import DropDownFriend from "./DropDownFriend";
import { useNavigate } from "react-router";
import ProfileBar from "./ProfileBar";
import RefreshIcon from "@mui/icons-material/Refresh";
import SearchFriend from "./SearchFriend";
const FriendWindow = ({
  user1,
  onClickFriend,
  friends,
  onSetFriends,
  onUpdateProfile,
  onClickRefresh,
}) => {
  const Navigate = useNavigate();

  const fetchFriendByUser = async () => {
    const paramFriend = {
      user1ID: user1.userID,
    };
    const { data } = await api.getFriendByUser(paramFriend);
    for (let i = 0; i < data.length; i++) {
      const FriendParam = {
        user1ID: user1.userID,
        user2ID: data[i].userID,
      };
      const res = await api.isFriend(FriendParam);
      const resLastMessage = await api.getLastChatUsers(FriendParam);
      const resCountUnread = await api.countUnread(FriendParam);
      const newObj = {
        ...data[i],
        isFriend: res.data,
        lastChat: resLastMessage.data[0].message,
        countUnread: resCountUnread.data,
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
        <ProfileBar
          username={user1.name}
          user1={user1}
          onUpdateProfile={onUpdateProfile}
        ></ProfileBar>
        <IconButton onClick={onClickRefresh}>
          <RefreshIcon> </RefreshIcon>
        </IconButton>
        <SearchFriend
          friends={friends}
          onClickFriend={onClickFriend}
        ></SearchFriend>
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
