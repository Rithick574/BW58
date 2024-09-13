import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const LearnUseImperative = forwardRef((props,ref) => {
        const inputRef = useRef(null);
        useImperativeHandle(ref,()=>({
            focus:()=>{
                inputRef.current.focus();
            },
            getValue:()=>{
                return inputRef.current.value;
            }
        }))
  return (
    <div>LearnUseImperative
        <div>
            <input ref={inputRef} {...props} />
        </div>
    </div>
  )
});

export default LearnUseImperative