import React from 'react'

const Child = ({callback}) => {
    console.log("child rendered")
  return (
    <div>
        <h1>Child</h1>
    </div>
  )
}

export default React.memo(Child);