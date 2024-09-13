import { useContext, useEffect, useRef, useState } from "react";
import "./App.css";
import { TestContext } from "./context/testContext";
import { Learnusememo } from "./useMemo/Learnusememo";
import ParentComponent from "./learnuseCallback/ParentComponent";
import { TextInput } from "./forwardRef/TextInput";
import LearnUseImperative from "./useImperativeHandle/LearnUseImperative";

function App() {
  const inputRef = useRef(null);
  const { setName, name } = useContext(TestContext);
  const [changeName, SetchangeName] = useState("qwerty");

   const focusInput = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };
    
    const handleGetValue=()=>{
      if(inputRef.current){
        alert(inputRef.current.getValue());
      }
    }

  return (
    <>
      <div>{name}</div>
      <Learnusememo clicks={SetchangeName}/>
      <h1>{changeName}</h1>
      {/* <ParentComponent/> */}

      {/* <h1>forwar Ref example</h1>
      <TextInput ref={inputRef} placeholder="type something here...." />
      <button onClick={focusInput}>Focus input</button> */}

      {/* <h2>useImperative handle example</h2>
      <LearnUseImperative ref={inputRef} placeholder ="type something..."/>
      <button onClick={focusInput}>Focus Input</button>
      <button onClick={handleGetValue}>Get Input Value</button> */}
    </>
  );
}

export default App;
