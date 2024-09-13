// import CustomComponent from "./CustomComponent";
// import DropDown from "./dropDown";
// import useCounter from "./useCounter";
// import Parent from "./Parent";
// import SumWithoutUseMemo from "./Memo";
// import Debounce from "./Debounce";
// import ForwardRef from "./ForwardRef";

import { useRef } from "react";
import Imperative from "./Imperative";

function App() {
  const input = useRef();
  const focusInput = () => {
    if (input.current) {
      input.current.focus();
    }
  };
  const handleGetValue=()=>{
    if(input.current){
      alert(input.current.getValue())
    }
  }
  return (
    <>
      <Imperative ref={input} placeholder="type something..." />
      <button onClick={focusInput}>focus</button>
      <button onClick={handleGetValue}>Get Input Alert</button>
    </>
  );
}

export default App;
