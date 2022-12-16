import * as React from "react";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Box, Container } from "@mui/system";
import { Grid, List, ListItemButton, Paper, Typography } from "@mui/material";
import "./ListFriendItem.css";

const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
};

const ListFriendItem = ({ friends, onClickFriend }) => {
  const listAllFriend =
    friends !== undefined ? (
      friends.map((friend, index, friends) => (
        <React.Fragment>
          <ListItemButton
            key={index}
            onClick={() => {
              onClickFriend(friend);
            }}
          >
            <ListItemText primary={friend.name} />
          </ListItemButton>
          <Divider />
        </React.Fragment>
      ))
    ) : (
      <></>
    );
  return (
    <React.Fragment>
      <Container>
        <Paper elevation={5}>
          <Box padding={3} marginTop={3}>
            <Grid container>
              <Grid className="friend-window" item xs={12}>
                <List className="friend-list">{listAllFriend}</List>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </React.Fragment>
  );
};

export default ListFriendItem;
