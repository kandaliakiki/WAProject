import { Container, Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import ListFriendItem from "./ListFriendItem/ListFriendItem";
import * as api from "../../api";
const FriendWindow = ({ user1, onClickFriend }) => {
  const [friends, setFriends] = useState([]);
  const fetchFriendByUser = async () => {
    const paramFriend = {
      user1ID: user1.userID,
    };
    const { data } = await api.getFriendByUser(paramFriend);
    setFriends(data);
  };

  useEffect(() => {
    fetchFriendByUser();
  }, []);
  return (
    <Fragment>
      <Container>
        <Typography variant="h2">Friends</Typography>
        <ListFriendItem
          friends={friends}
          onClickFriend={onClickFriend}
        ></ListFriendItem>
      </Container>
    </Fragment>
  );
};
export default FriendWindow;
