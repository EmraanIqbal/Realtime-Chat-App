import "./App.css";
import { useState } from "react";
import io from "socket.io-client";
import Chat from "./components/Chat";

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
    <div className="App">
      {!showchat ? (
        <>
          <h3>Join a Chat</h3>
          <input
            type="text"
            value={username}
            placeholder="Emi..."
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Fizi..."
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
          <br />
          <br />
          <button onClick={joinRoom}>Join a Room</button>
          <br />
          <br />
        </>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default App;
