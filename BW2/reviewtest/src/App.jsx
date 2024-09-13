import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [mark, setMark] = useState("");
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

  const handleOnchange = (e) => {
    const category = e.target.value;
    setMark(e.target.value);
    const markedItems = data.find((x) => x.category === category);
    setItems(markedItems.items);
  };

  return (
    <>
      <select onChange={handleOnchange} value={mark}>
        <option value="">select</option>
        {data.map((x, index) => (
          <option key={index}>{x.category}</option>
        ))}
      </select>
      <select>
      <option value="">select</option>
        {items.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </>
  );
}

export default App;
