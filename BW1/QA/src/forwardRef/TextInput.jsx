import React, { forwardRef } from 'react'

export const TextInput = forwardRef((props,ref) => {
  return (
    <div>TextInput
        <div>
            <input type="text" ref={ref} {...props}  />
        </div>
    </div>
  )
});

