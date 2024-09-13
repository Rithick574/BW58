import React, { useState } from "react";

const DropDown = () => {
  const [item, setItem] = useState([]);

  const data = [
    {
      category: "Fruits",
      items: ["Apple", "Banana", "Orange", "Grapes"],
    },
    {
      category: "Vegetables",
      items: ["Carrot", "Broccoli", "Lettuce", "Tomato"],
    },
  ];
  
  const handleChange = (e) => {
    const category = e.target.value;
    const markedItems = data.find((x) => x.category === category);
    setItem(markedItems.items);
  };

  return (
    <div>
      <select onChange={handleChange}>
        <option value="">select </option>
        {data.map((x, i) => (
          <option key={i}>{x.category}</option>
        ))}
      </select>
      <select>
        <option>select</option>
        {item.map((x, i) => (
          <option key={i}>{x}</option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
