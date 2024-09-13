import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const Imperative = forwardRef((props,ref) => {
    const inputRef = useRef(null);
    useImperativeHandle(ref,()=>({
        focus:()=>{
            inputRef.current.focus()
        },
        getValue:()=>{
            return inputRef.current.value;
        }
    }))
  return (
    <div>
        <input type="text" ref={inputRef} {...props}/>
    </div>
  )
});

export default Imperative;