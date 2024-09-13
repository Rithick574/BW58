import React, { useState } from "react";
import { flushSync } from "react-dom";

const DropDown = () => {
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
  const [selectedCategory, setSelectedCategory] = useState("");
  const [items, setItems] = useState([]);
  const [a,seta] = useState(false)
  const handlechange = (e) => {
    const category = e.target.value;
    flushSync(() => {
      setSelectedCategory(e.target.value);
    });
    const categoryData = data.find((x) => x.category === category);
    flushSync(() => {
      setItems(categoryData.items);
    });
    seta(true)
  };

  return (
    <div>
      <h1>Nested Drop down</h1>
      <select onChange={handlechange} value={selectedCategory}>
        <option>select category</option>
        {data.map((x, index) => (
          <option key={index} value={x.category}>
            {" "}
            {x.category}
          </option>
        ))}
      </select>
      {a?
      <select disabled={!selectedCategory}>
      <option>select</option>
      {items.map((x, index) => (
        <option key={index} value={x}>{x}</option>
      ))}
    </select> :
    ""
      }
    </div>
  );
};

export default DropDown;
