import React, { useEffect, useState } from "react";
import scrollToBottom from "react-scroll-to-bottom";

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
    <>
      <h4>WhatsApp</h4>
      <br />
      <div>
        {messageList.map((item, i) => (
          <div key={i}>
            <h6>{item.message}</h6>
            <p>
              {item.time}
              {item.author}
            </p>
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          placeholder="Hey..."
          onChange={(e) => setCurrentMessage(e.target.value)}
          value={currentMessage}
          onKeyPress={(e) => {
            e.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </>
  );
};

export default Chat;
