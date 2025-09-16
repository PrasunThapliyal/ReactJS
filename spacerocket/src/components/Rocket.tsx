// src/components/Rocket.tsx
import React from "react";

const Rocket: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="600"
      viewBox="0 0 800 600"
    >
      <rect width="800" height="600" fill="#0a0a2a" />

      <circle cx="100" cy="50" r="2" fill="white" />
      <circle cx="700" cy="80" r="2" fill="white" />
      <circle cx="400" cy="100" r="2" fill="white" />
      <circle cx="250" cy="400" r="2" fill="white" />
      <circle cx="600" cy="300" r="2" fill="white" />
      <circle cx="350" cy="500" r="2" fill="white" />
      <circle cx="750" cy="550" r="2" fill="white" />
      <circle cx="50" cy="520" r="2" fill="white" />

      <circle
        cx="700"
        cy="150"
        r="50"
        fill="none"
        stroke="white"
        stroke-width="2"
      />
      <circle
        cx="720"
        cy="170"
        r="10"
        fill="none"
        stroke="white"
        stroke-width="1"
      />
      <circle
        cx="680"
        cy="140"
        r="8"
        fill="none"
        stroke="white"
        stroke-width="1"
      />
      <circle
        cx="710"
        cy="120"
        r="6"
        fill="none"
        stroke="white"
        stroke-width="1"
      />

      <g transform="translate(300, 400)">
        <path
          d="M0,0 L20,-60 L40,0 Z"
          fill="none"
          stroke="white"
          stroke-width="2"
        />
        <circle
          cx="20"
          cy="-40"
          r="6"
          fill="none"
          stroke="white"
          stroke-width="2"
        />
        <path
          d="M0,0 L-10,20 L10,10 Z"
          fill="none"
          stroke="white"
          stroke-width="2"
        />
        <path
          d="M40,0 L50,10 L30,20 Z"
          fill="none"
          stroke="white"
          stroke-width="2"
        />
        <path
          d="M20,0 C15,20 25,20 20,40 C10,30 30,30 20,0 Z"
          fill="none"
          stroke="orange"
          stroke-width="2"
        />
      </g>
    </svg>
  );
};

export default Rocket;
