"use client";

import { useEffect } from "react";

export default function FloatingBubbles() {
  useEffect(() => {
    const container = document.querySelector(".bubble-container");
    if (!container) return;

    container.innerHTML = ""; // clear old bubbles

    for (let i = 0; i < 20; i++) {
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");

      const size = Math.random() * 50 + 20;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.animationDuration = `${Math.random() * 6 + 4}s`;

      container.appendChild(bubble);
    }
  }, []);

  return <div className="bubble-container"></div>;
}
