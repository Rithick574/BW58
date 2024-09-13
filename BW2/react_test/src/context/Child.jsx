import React from "react";

const Child = () => {
  const [getValue, setValue] = useContext(searchContext);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <input onChange={handleChange} placeholder="type....." />
    </div>
  );
};

export default Child;
