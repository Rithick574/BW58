import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Debouncing = () => {
  const [text, setText] = useState();
  const [debouncedText, setDebouncedText] = useState(text);
  useEffect(() => {
    const interval = setTimeout(() => {
      setDebouncedText(text);
    }, 500);
    return () => {
      clearInterval(interval);
    };
  }, [text]);
  
  useEffect(() => {
    console.log("backend API call");
  }, [debouncedText]);

  return (
    <div>
      <input
        type="text"
        placeholder="type something"
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default Debouncing;
