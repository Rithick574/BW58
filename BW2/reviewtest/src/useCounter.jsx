import { useState } from "react";

const useCounter = (initialvalue = 0) => {
  const [count, setCount] = useState(initialvalue);
  const increase = () => setCount((prev) => prev + 1);
  const decrease = () => setCount((prev) => prev - 1);
  const reset = () => setCount(initialvalue);
  return { count, increase, decrease, reset };
};

export default useCounter;
