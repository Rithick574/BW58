import React from 'react'

const Child = ({handle}) => {
    console.log("child rendering");
    const checkcall =()=>{
        handle("some data")
    }
  return (
    <div>
        <p>Child</p>
        <button onClick={checkcall}></button>
    </div>
    
  )
}

export default React.memo(Child);