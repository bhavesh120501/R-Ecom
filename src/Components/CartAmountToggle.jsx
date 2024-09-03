import React from 'react';

export const CartAmountToggle = ({ amount, setIncrease, setDecrease }) => {
  return (
    <div className="flex items-center gap-2">
      <button onClick={setDecrease} className="text-2xl">-</button>
      <span className="text-xl">{amount}</span>
      <button onClick={setIncrease} className="text-2xl">+</button>
    </div>
  )
}
