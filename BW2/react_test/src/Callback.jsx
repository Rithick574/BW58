import React, { useCallback, useEffect, useState } from "react";
import Child from "./Child";

const Callback = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState("");
    const handle = useCallback(() => {
      setCount((prev) => prev + 1);
      console.log("useCallback");
    }, []);
  // const handle = () => {
  //   setCount((prev) => prev + 1);
  // };
  const handleClick = () => {
    setCount((prev) => prev - 1);
  };
  
  return (
    <div>
      <p>{count}</p>
      <Child handleClick={handle} />
      <button onClick={handleClick}></button>
    </div>
  );
};

export default Callback;
