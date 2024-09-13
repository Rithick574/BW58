import React, { useState } from 'react'

const Common = ({handle}) => {
    const [color,setColor] = useState();
    // const changeColor=()=>{
    //     handle("black")
    // }
  return (
    <div>
        <button className={`bg-${style}`} onClick={changeColor}>click me</button>
    </div>
  )
}

export default Common