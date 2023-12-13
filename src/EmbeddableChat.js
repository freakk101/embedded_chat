import React, { useState } from 'react';
import { createRoot } from "react-dom/client" 

import './EmbeddableChat.css'; 

const EmbeddableChat = () => {
  const [expanded, setExpanded] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    if (message.trim() !== '') {
      if (message.trim().toLowerCase() === 'ping') {
        setMessages([
          ...messages,
          { text: message, sender: 'user' },
          { text: 'pong', sender: 'bot' },
        ]);
      } else {
        setMessages([...messages, { text: message, sender: 'user' }]);
      }
      setMessage('');
    }
  };

  return (
    <div className={`chat-window ${expanded ? 'expanded' : ''}`}>
      <div className="chat-header" onClick={handleToggle}>
          <div>Chat</div>
          <div> {expanded ? "-" : "+"} </div>  
      </div>
      {expanded &&
      (<><div className="chat-content">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div><div className="chat-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={handleMessageChange}
            onKeyPress={(e) => {
              if (e.key === 'Enter') sendMessage();
            } } />
          <button onClick={sendMessage}>Send</button>
        </div></>)}
    </div>
  );
};



document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.createElement('div');
  rootElement.id = 'embedded_chat';
  document.body.appendChild(rootElement);

  const root = createRoot(rootElement);
  root.render(<EmbeddableChat />);
});