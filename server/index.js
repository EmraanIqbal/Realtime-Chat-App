// const express = require("express");
// const app = express();
// const http = require("http");
// const { Server } = require("socket.io");
// const cors = require("cors");
// app.use(cors());

const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("Socket Id: ", socket.id);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User With Id ${socket.id} Joined the Room ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.join(data);
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", (socket) => {
    console.log("User Disconected", socket.id);
  });
});

// const port = process.env.PORT || 5001;

server.listen(3001, () => console.log(`Listening on Port...`));
