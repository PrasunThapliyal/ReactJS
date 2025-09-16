// src/components/ChatPage.tsx
import React from "react";

const ChatPage: React.FC = () => {
  return (
    <div className="chat-page">
      <header className="chat-header">Space Rocket Chat</header>
      <main className="chat-main">
        <div className="messages">
          <div className="message bot">
            Welcome! This is a placeholder chat interface.
          </div>
        </div>
      </main>

      <footer className="chat-footer">
        <input
          className="chat-input"
          placeholder="Type a message..."
          disabled
        />
        <button className="send-btn" disabled>
          Send
        </button>
      </footer>
    </div>
  );
};

export default ChatPage;
