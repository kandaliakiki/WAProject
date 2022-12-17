import { Container, Paper } from "@mui/material";
import { Fragment, useEffect, useRef, useState } from "react";
import ChatHeader from "./ChatHeader/ChatHeader";
import ChatMessage from "./ChatMessage/ChatMessage";
import * as api from "../../api";
const ChatWindow = ({ user1, user2 }) => {
  const [messages, setMessages] = useState([]);
  const fetchMessage = async () => {
    if (user1 !== undefined && user2 !== undefined) {
      const paramUser = {
        user1ID: user1.userID,
        user2ID: user2.userID,
      };
      console.log(user1.name + "" + user2.name);
      const { data } = await api.getChatUsers(paramUser);
      setMessages(data);
    }
  };

  // setInterval(fetchMessage, 1000);
  useEffect(() => {
    setMessages([]);
    fetchMessage();
  }, [user2]);

  return (
    <Fragment>
      <Container>
        <ChatHeader
          username2={user2 == undefined ? "blank" : user2.name}
        ></ChatHeader>
        <ChatMessage
          user1={user1}
          user2={user2}
          messages={messages}
          onSendMessage={fetchMessage}
        ></ChatMessage>
      </Container>
    </Fragment>
  );
};

export default ChatWindow;
