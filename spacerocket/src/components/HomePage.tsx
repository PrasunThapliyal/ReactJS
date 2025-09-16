// src/components/HomePage.tsx
import React, { useState } from "react";
import Rocket from "./Rocket";

interface HomePageProps {
  onEnter: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onEnter }) => {
  const [fadeOut, setFadeOut] = useState(false);

  const handleClick = () => {
    if (fadeOut) return; // avoid multiple clicks
    setFadeOut(true);

    // Wait for CSS transition to finish (600ms). After that, tell parent to show chat.
    setTimeout(() => {
      onEnter();
    }, 600);
  };

  return (
    <div
      className={`home-page ${fadeOut ? "fade-out" : ""}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleClick();
      }}
      aria-label="Enter the Space Rocket Project"
    >
      <div className="home-content">
        <Rocket />
        <h1>The Space Rocket Project</h1>
        <p>Click to continue</p>
      </div>
    </div>
  );
};

export default HomePage;
