import React, { useState } from 'react'

const Custom = ({data}) => {

  const [selectedCategory, setSelectedCategory] = useState('fruits');
  const [selectedItem, setSelectedItem] = useState('');

  const handleCategoryChange=(e)=>{
    setSelectedCategory(e.target.value);
    setSelectedItem('')
  };
  const handleItemChange=(e)=>{
    setSelectedItem(e.target.value)
  }

  return (
    <div>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="fruits">Fruits</option>
        <option value="vegetables">Vegetables</option>
      </select>
      
      <select value={selectedItem} onChange={handleItemChange} disabled={!selectedCategory}>
        <option >
           Select an Item
        </option>
        {data[selectedCategory].map(item =>(
          <option key={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  )
};


export default Custom;