import { useState, useCallback } from "react";
import "./App.css";
import ErrorBoundary from "./ErrorBoundary";
import Custom from "./Custom";

const data = {
  fruits: [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
  ],
  vegetables: [
    { id: 3, name: 'Carrot' },
    { id: 4, name: 'Broccoli' },
  ],
};


const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <ErrorBoundary>
        <Custom data={data} />
      </ErrorBoundary>
    </>
  );
};

export default App;
