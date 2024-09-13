import React, { useCallback, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    console.log("button clicked");
    setCount(count + 1);
  }, [count]);
  const handleChange = useCallback(() => {
    console.log("rfthjk");
  },[]);
  
  return (
    <div>
      <h1>Parent</h1>
      <Child callback={handleChange} />
      {count}
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default Parent;
