import { useState } from "react";
import "./App.css";
import Child from "./Child";

function App() {
  const [text, setText] = useState(true);
  // useEffect(() => {
  //   console.log("api calling");
  // }, []);

  const count = () => {
    let sum;
    console.log("45678765467");
    for (let i = 0; i < 1000; i++) {
      sum += i;
    }
    return sum;
  };

  // const handleChange=(val)=>{
  //   setText(val || "hello world")
  // }

  const handleChange = () => {
    setText(!text);
  };

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={handleChange}>click me</button>
        {/* <Child handle={handleChange} /> */}
      </div>
    </>
  );
}

export default App;
