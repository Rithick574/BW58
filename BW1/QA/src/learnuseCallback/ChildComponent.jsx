import React from "react";

export const ChildComponent =React.memo(({onClick}) => {
    console.log('ChildComponent rendered');
  return (
    <div>
      ChildComponent
      <div>
      <button onClick={onClick}>Click me</button>
      </div>
    </div>
  );
});



