import { useEffect, useState,Profiler } from "react";
import "./App.css";
import {Child} from "./Child"
import useCounter from "./useCounter"

function App() {
  const [seconds, setSeconds] = useState(60);
  const [active, setIsActive] = useState(false);
  const [dataFromChild, setDataFromChild] = useState('');
  const handleData = (data) => {
    setDataFromChild(data);
  };
  useEffect(() => {
    let timerId;
    if (active && seconds > 0) {
      timerId = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    }
    return () => {
      clearInterval(timerId);
    };
  }, [active, seconds]);

  const reset = () => {
    setIsActive(false);
    setSeconds(60);
  };

  const onRenderCallback=(id,phase,actualDuration)=>{
    console.log(`${id},${phase},${actualDuration}`);
  }

  return (
    <>
    <Profiler id="component" onRender={onRenderCallback}>

      <p>{seconds}</p>
      <button onClick={() => setIsActive(true)}>start</button>
      <button onClick={() => setIsActive(false)}>stop</button>
      <button onClick={reset}>reset</button>
    </Profiler>
    <h1>Data from Child: {dataFromChild}</h1>
      <Child handleData={handleData} />
    </>
  );
}

export default App;
