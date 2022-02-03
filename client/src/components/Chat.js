import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import {
  Avatar,
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CallSharpIcon from "@mui/icons-material/CallSharp";
import Divider from "@mui/material/Divider";
import InfoIcon from "@mui/icons-material/Info";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import { deepOrange, deepPurple } from "@mui/material/colors";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Chat = ({ socket = "", username = "", room = "" }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      //   console.log(currentMessage);
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
    }
    setCurrentMessage("");
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);
  return (
    // <>
    //   <h4>WhatsApp</h4>
    //   <br />
    //   <div>
    //     {messageList.map((item, i) => (
    //       <div key={i}>
    //         <h6>{item.message}</h6>
    //         <p>
    //           {item.time}
    //           {item.author}
    //         </p>
    //       </div>
    //     ))}
    //   </div>
    //   <div>
    //     <input
    //       type="text"
    //       placeholder="Hey..."
    //       onChange={(e) => setCurrentMessage(e.target.value)}
    //       value={currentMessage}
    //       onKeyPress={(e) => {
    //         e.key === "Enter" && sendMessage();
    //       }}
    //     />
    //     <button onClick={sendMessage}>&#9658;</button>
    //   </div>
    // </>
    <>
      <Box boxShadow="20">
        <div className="chat-window">
          <div className="chat-header">
            <Box
              borderRadius="7px"
              // backgroundColor="primary.dark"
              display="flex"
              justifyContent="space-around"
            >
              <Box mt="6px">
                <ArrowBackIcon color="primary" />
              </Box>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{
                  bgcolor: deepOrange[500],
                  width: 27,
                  height: 27,
                  mt: "5",
                  margin: "4px 0px 0px 4px",
                }}
              ></Avatar>
              <Typography
                variant="h6"
                textAlign="center"
                color="black"
                //   margin="8px 15px 4px 50px"
              >
                {messageList.author || "Emraan Iqbal"}
              </Typography>
              <Stack direction="row" spacing={1} mt="5px">
                <CallSharpIcon color="primary" mt="10" />
                <VideoCallIcon color="primary" />
                <InfoIcon color="primary" />
              </Stack>
            </Box>
            <Divider />
          </div>
          <div className="chat-body">
            <ScrollToBottom className="message-container">
              {messageList.map((messageContent) => {
                return (
                  <div
                    className="message"
                    id={username === messageContent.author ? "you" : "other"}
                  >
                    <div>
                      <div className="message-content">
                        <p>{messageContent.message}</p>
                      </div>
                      <div className="message-meta">
                        <p id="time">{messageContent.time}</p>
                        <p id="author">{messageContent.author}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </ScrollToBottom>
          </div>
          <div className="chat-footer">
            <input
              type="text"
              value={currentMessage}
              placeholder="Hey..."
              onChange={(event) => {
                setCurrentMessage(event.target.value);
              }}
              onKeyPress={(event) => {
                event.key === "Enter" && sendMessage();
              }}
            />
            <button onClick={sendMessage}>&#9658;</button>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Chat;
