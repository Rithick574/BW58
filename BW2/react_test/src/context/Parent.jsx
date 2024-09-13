import React, { useContext } from "react";
import Child from "./Child";
import { searchContext } from "./searchContext";

const Parent = () => {
  const [getValue, setValue] = useContext(searchContext);
  return (
    <div>
      <p>{getValue}</p>
      <Child />
    </div>
  );
};

export default Parent;
