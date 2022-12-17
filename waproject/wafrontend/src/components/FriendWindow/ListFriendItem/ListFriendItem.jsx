import * as React from "react";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Box, Container } from "@mui/system";
import {
  Badge,
  Grid,
  List,
  ListItemButton,
  Paper,
  Typography,
} from "@mui/material";
import "./ListFriendItem.css";

const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
};

const ListFriendItem = ({ friends, onClickFriend, user1 }) => {
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
            <div>
              <ListItemText
                primary={`${friend.name} ${
                  friend.isFriend ? "" : "(Not Friend)"
                }`}
              />
              {/* <Typography variant="body2">{friend.lastChat}</Typography> */}
              <Badge color="secondary" badgeContent={1}>
                <div>
                  <Typography variant="body2">{friend.lastChat}</Typography>
                </div>
              </Badge>
            </div>
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
                <Typography variant="h6">Friends</Typography>
                <Typography variant="body2">
                  (Change Between Friend to refresh Chat)
                </Typography>
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
