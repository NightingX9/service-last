// AddToCart.js

import React, { useState } from 'react';

const AddToCart = () => {
  const [cart, setCart] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');

  const addItemToCart = () => {
    if (selectedItem) {
      setCart([...cart, selectedItem]);
      setSelectedItem('');
    }
  };

  return (
    <div>
      <h1>Add Item to Cart</h1>
      <select
        onChange={(e) => setSelectedItem(e.target.value)}
        value={selectedItem}
      >
        <option value="">Select an item</option>
        <option value="Item 1">Item 1</option>
        <option value="Item 2">Item 2</option>
        <option value="Item 3">Item 3</option>
      </select>
      <button onClick={addItemToCart}>Add to Cart</button>
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default AddToCart;
