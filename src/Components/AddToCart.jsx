import React, { useContext, useState } from 'react';
import { FaCheck } from "react-icons/fa6";
import { CartAmountToggle } from './CartAmountToggle';
import { NavLink } from "react-router-dom";
import { CartContext } from '../context/CartContext';

export const AddToCart = ({ data }) => {
  const { id, colors, stock } = data;
  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const {addToCart} = useContext(CartContext);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  }

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  }

  return (
    <>
      <div className="flex items-center flex-wrap">
        <span>Colors:</span>
        <div className="flex items-center gap-1 ml-2">
          {colors.map((curColor, index) => {
            return (
              <button
                key={index}
                className={`w-4 h-4 rounded-full flex items-center justify-center ${color === curColor ? "" : "opacity-50"}`}
                style={{ backgroundColor: curColor }}
                onClick={() => setColor(curColor)}
              >
                {color === curColor && (
                  <FaCheck className="text-white text-xs" />
                )}
              </button>
            );
          })}
        </div>
      </div>
      {/* Add To Cart */}
      <div className='flex flex-col gap-2'>
        <CartAmountToggle
          amount={amount}
          setIncrease={setIncrease}
          setDecrease={setDecrease}
        />
        <NavLink to="/Cart" onClick={()=>addToCart(id,color,amount,data)}>
        <button className='bg-indigo-600 w-24 h-8 text-white'>Add To Cart</button>
        </NavLink>
      </div>
    </>
  );
}
