import React, { useState } from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

function ChatScreen() {
   const [input, setInput] = useState(""); 
  const [messages, setMessages] = useState([
    {
      name: "Harshit",
      image: "https://image.shutterstock.com/z/stock-photo-cannes-france-may-leonardo-dicaprio-attends-the-premiere-of-the-movie-once-upon-a-time-in-1433831474.jpg",
      message: "hello",
    },
    {
      name: "Sivam",
      image: "https://image.shutterstock.com/z/stock-photo-cannes-france-may-leonardo-dicaprio-attends-the-premiere-of-the-movie-once-upon-a-time-in-1433831474.jpg",
      message: "hii I am harshit",
    },
    {
      message: "hna bolo",
    },
  ]);

  const handleSend = e => {
      e.preventDefault();

      input ? (setMessages([...messages, {message: input}])) : ( setMessages([...messages]) )
      setInput("")
    
  }

  return (
    <div className="chatScreen">
      <p className="chatScreen_timestamp">YOU MATCHED WITH HARSHIT ON 7/8/20</p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen_message">
            <Avatar
              alt={message.name}
              className="chatScreen_image"
              src={message.image}
            />
            <p className="chatScreen_text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen_message">
            <p className="chatScreen_textUser">{message.message}</p>
          </div>
        )
      )}

      <div>
        <form className="chatScreen_input">
          <input
            value={input}
            onChange={event => setInput(event.target.value)}
            className="chatScreen_inputField"
            type="text"
            placeholder="Type a message..."
          />
          <button onClick={handleSend} type="submit" className="chatScreen_inputButtom">SEND</button>
        </form>
      </div>
    </div>
  );
}

export default ChatScreen;
