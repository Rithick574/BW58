import React from "react";

const Child = ({ handle }) => {
  const handleButton = () => {
    handle("button clicked");
  };
  return (
    <div>
      <h1>child</h1>
      <button onClick={handleButton}>click me</button>
    </div>
  );
};

export default Child;
