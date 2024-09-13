import React, { useCallback, useState } from "react";
import { ChildComponent } from "./ChildComponent";

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const handleclick = useCallback(() => {
    console.log("button clicked");
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      ParentComponent
      <div>
        <ChildComponent onClick={handleclick} />
      </div>
      <div>Count: {count}</div>
    </div>
  );
};

export default ParentComponent;
