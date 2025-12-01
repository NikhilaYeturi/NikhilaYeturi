"use client";

import { useState, useEffect } from "react";

export default function Typewriter({ words, speed = 120, delay = 1500 }) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0); // which word
  const [subIndex, setSubIndex] = useState(0); // letter index
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index === words.length) {
      setIndex(0);
      return;
    }

    const currentWord = words[index];

    if (!deleting && subIndex === currentWord.length) {
      setTimeout(() => setDeleting(true), delay);
      return;
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <span className="text-purple-300 font-medium">
      {text || words[index].substring(0, subIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
}
