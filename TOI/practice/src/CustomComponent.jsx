import React from 'react'

const CustomComponent = ({color}) => {
  return (
    <div>
        <button style={{backgroundColor:`${color}`}}>
            click me
        </button>
    </div>
  )
}

export default CustomComponent;