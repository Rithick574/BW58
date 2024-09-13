import React, { useEffect, useState } from "react";

const Debounce = () => {
  const [text, setText] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedText(text);
    }, 500);
    return () => {
      console.log("hello world");
      clearInterval(handler);
    };
  }, [text]);
  useEffect(() => {
    if (debouncedText) {
      console.log("API called");
    }
  }, [debouncedText]);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="type something..."
      />
      <p>Debounced Value:{debouncedText}</p>
    </div>
  );
};

export default Debounce;
