import { Container } from "@mui/system";
import { Fragment } from "react";
import "./App.css";
import ChatHeader from "./components/ChatWindow/ChatHeader/ChatHeader";
import ChatMessage from "./components/ChatWindow/ChatMessage/ChatMessage";
import ChatWindow from "./components/ChatWindow/ChatWindow";

function App() {
  return (
    <Fragment>
      <ChatWindow user1ID={1} user2ID={2}></ChatWindow>
    </Fragment>
  );
}

export default App;
