import React, { useContext, useMemo } from "react";
import { TestContext } from "../context/testContext";

export const Learnusememo = ({ clicks }) => {
  const { setName, name } = useContext(TestContext);
    //  const computeSum=()=>{
    //       let i =0;
    //       let sum =0;
    //       while(i<1000){
    //           sum += i;
    //           i++
    //           console.log("usememo");
    //       };
    //       return sum;
    //   };

    //   const sum = computeSum();

  const sum = useMemo(() => {
    let i = 0;
    let sum = 0;
    while (i < 1000) {
      sum += i;
      i++;
      console.log("usememo");
    }
    return sum;
  },[]);

  const changeName = () => {
    if (name === "anirudh") {
      setName("Rithick");
      clicks("hello world");
    } else {
      setName("anirudh");
      clicks("world hello");
    }
  };

  return (
    <>
      <button onClick={changeName}>submit</button>
      <div>{sum}</div>
    </>
  );
};
