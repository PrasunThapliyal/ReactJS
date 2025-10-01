// src/components/ChatPage.tsx
import React, { useState } from "react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Welcome! This is a placeholder chat interface.",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user's message
    const newMessage: Message = {
      id: Date.now(),
      text: input.trim(),
      sender: "user",
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    // Simulate a bot reply after 1 second
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: "Echo: " + newMessage.text,
          sender: "bot",
        },
      ]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="chat-page">
      <header className="chat-header">Space Rocket Chat</header>

      <main className="chat-main">
        <div className="messages">
          {messages.map((m) => (
            <div key={m.id} className={`message ${m.sender}`}>
              {m.text}
            </div>
          ))}
        </div>
      </main>

      <footer className="chat-footer">
        <input
          className="chat-input"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="send-btn" onClick={handleSend}>
          Send
        </button>
      </footer>
    </div>
  );
};

export default ChatPage;
