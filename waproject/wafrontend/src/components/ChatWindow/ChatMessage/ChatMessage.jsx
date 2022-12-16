import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { Fragment, useState } from "react";

const ChatMessage = () => {
  const [messages, setMessages] = useState([]);
  const listAllChat = messages.map((message, index) => (
    <ListItem key={index}>
      <ListItemText
        primary={`${message.sender}: ${message.message}`}
      ></ListItemText>
    </ListItem>
  ));
  return (
    <Fragment>
      <Container>
        {/* <Paper elevation={4}>tes</Paper> */}
        <Grid container spacing={4} alignItems="center">
          <Grid item>
            <List>
              <listAllChat></listAllChat>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default ChatMessage;
