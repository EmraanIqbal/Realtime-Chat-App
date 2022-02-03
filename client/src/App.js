import "./App.css";
import { useState } from "react";
import io from "socket.io-client";
import Chat from "./components/Chat";
import Box from "@mui/material/Box";
import { Button, Stack, TextField, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showchat, setShowchat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowchat(true);
    }
  };
  return (
    // <div>
    //   {!showchat ? (
    //     <>
    //       <h3>Join a Chat</h3>
    //       <input
    //         type="text"
    //         value={username}
    //         placeholder="Emi..."
    //         onChange={(e) => setUsername(e.target.value)}
    //       />
    //       <br />
    //       <br />
    //       <input
    //         type="text"
    //         placeholder="Fizi..."
    //         value={room}
    //         onChange={(e) => setRoom(e.target.value)}
    //       />
    //       <br />
    //       <br />
    //       <button onClick={joinRoom}>Join a Room</button>
    //       <br />
    //       <br />
    //     </>
    //   ) : (
    //     <Chat socket={socket} username={username} room={room} />
    //   )}
    // </div>

    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="90vh"
    >
      {!showchat ? (
        <Box
          width="300px"
          height="300px"
          alignItems="center"
          border="1 solid grey"
          borderRadius="7px"
          boxShadow="10"
        >
          <Typography
            variant="h4"
            textAlign="center"
            color="white"
            backgroundColor="primary.dark"
            borderRadius="7px"
          >
            Join a Chat
          </Typography>
          <br />
          <Stack
            component="form"
            spacing={2}
            autoComplete="off"
            alignItems="center"
            // marginLeft="50px"
          >
            <TextField
              id="outlined-basic"
              label="Enter Your Name"
              variant="outlined"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />

            <TextField
              id="outlined-basic"
              label="Room Code"
              variant="outlined"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
            />

            <Button
              variant="contained"
              backgroundColor="secondary"
              size="large"
              onClick={joinRoom}
            >
              Join a Room
            </Button>
          </Stack>
        </Box>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </Box>
  );
}

export default App;
