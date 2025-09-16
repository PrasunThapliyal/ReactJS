// src/App.tsx
import React, { useState } from "react";
import HomePage from "./components/HomePage";
import ChatPage from "./components/ChatPage";

const App: React.FC = () => {
  // false = show home, true = show chat
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="app-root">
      {!showChat ? (
        <HomePage onEnter={() => setShowChat(true)} />
      ) : (
        <ChatPage />
      )}
    </div>
  );
};

export default App;
