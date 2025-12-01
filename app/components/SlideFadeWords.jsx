"use client";

import { useState, useEffect } from "react";

export default function SlideFadeWords({ words, duration = 2000 }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const fadeTimer = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setVisible(true);
      }, 300); // fade out time
    }, duration);

    return () => clearInterval(fadeTimer);
  }, [words, duration]);

  return (
    <div
      className={`
        transition-all duration-500 
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
        text-purple-300 font-medium
      `}
    >
      {words[index]}
    </div>
  );
}
