import React from 'react';

function MenuItem({ item, onDelete }) {
  return (
    <li className="menu-item">
      <span>{item.name}</span>
      <span>{item.price}</span>
      <button onClick={() => onDelete(item.id)}>ลบ</button>
    </li>
  );
}

export default MenuItem;
