import React, { useState, useEffect } from 'react';
import WebSocket from 'ws';

function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const ws = new WebSocket('ws://localhost:8000/ws/chat/');

  useEffect(() => {
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.messages) {
        setMessages(data.messages);
      } else {
        setMessages((prevMessages) => [...prevMessages, data.message]);
      }
    };
  }, []);

  const handleSendMessage = () => {
    ws.send(JSON.stringify({ message: newMessage }));
    setNewMessage('');
  };

  return (
    <div>
      <h1>Chat Room</h1>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>
            <span>{message.user}</span>: <span>{message.message}</span>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newMessage}
        onChange={(event) => setNewMessage(event.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}

export default ChatRoom;