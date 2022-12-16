import { Container } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import ChatHeader from "./ChatHeader/ChatHeader";
import ChatMessage from "./ChatMessage/ChatMessage";
import * as api from "../../api";
const ChatWindow = ({ user1ID, user2ID }) => {
  const [messages, setMessages] = useState([]);
  const fetchMessage = async () => {
    const paramUser = {
      user1ID: user1ID,
      user2ID: user2ID,
    };
    const { data } = await api.getChatUsers(paramUser);
    console.log(data);
  };

  useEffect(() => {
    fetchMessage();
  }, []);
  return (
    <Fragment>
      <Container>
        <ChatHeader username2={"Eli"}></ChatHeader>
        <ChatMessage></ChatMessage>
      </Container>
    </Fragment>
  );
};

export default ChatWindow;