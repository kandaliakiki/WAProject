import {
  Box,
  FormControl,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { Fragment, useEffect, useRef, useState } from "react";
import "./ChatMessage.css";
import * as api from "../../../api";
import SendIcon from "@mui/icons-material/Send";

const ChatMessage = ({ messages, user1, user2, onSendMessage }) => {
  const [messageTyped, setMessageTyped] = useState([]);
  const [messageLength, setMessageLength] = useState(messages.length);
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    if (messages.length > 0) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const listAllChat = messages.map((message, index, messages) => (
    <Fragment>
      <ListItem key={index}>
        {index === messages.length - 1 ? (
          <ListItemText
            ref={messagesEndRef}
            primary={`${message.sender}: ${message.message}`}
          ></ListItemText>
        ) : (
          <ListItemText
            primary={`${message.sender}: ${message.message}`}
          ></ListItemText>
        )}
      </ListItem>
    </Fragment>
  ));
  const handleTypeMessage = (e) => {
    setMessageTyped(e.target.value);
  };

  const handleClickSend = async () => {
    const messageObj = {
      message: messageTyped,
      receiverID: user2.userID,
      senderID: user1.userID,
      readbysender: "Y",
      readbyreceiver: "N",
    };

    const paramUser = {
      user1ID: user1.userID,
      user2ID: user2.userID,
    };

    const { data } = await api.createMessage(messageObj);
    onSendMessage();
    setMessageTyped("");
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  return (
    <Fragment>
      <Container>
        <Paper elevation={5}>
          <Box padding={3} marginTop={3}>
            <Grid container spacing={4} alignItems="center">
              <Grid className="chat-window" item xs={12}>
                <List className="chat-message">{listAllChat}</List>
              </Grid>

              <Grid xs={11} item>
                <FormControl fullWidth>
                  <TextField
                    value={messageTyped}
                    label="Type Message Here"
                    variant="outlined"
                    fullWidth
                    onChange={handleTypeMessage}
                  ></TextField>
                </FormControl>
              </Grid>
              <Grid xs={1} item>
                <IconButton
                  aria-label="send"
                  color="primary"
                  onClick={handleClickSend}
                >
                  <SendIcon></SendIcon>
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Fragment>
  );
};

export default ChatMessage;
