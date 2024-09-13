import React, { useState } from 'react'

export const Child = ({handleData}) => {
    const [inputValue, setInputValue] = useState('');
    const handleChange = (event) => {
        setInputValue(event.target.value);
      };
      const sendDataToParent = () => {
        handleData(inputValue);
      };
  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={sendDataToParent}>Send Data</button>
    </div>
  )
}
