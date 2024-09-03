import React, { useContext } from 'react';
import { CartAmountToggle } from './CartAmountToggle';
import { ProductFormat } from '../Helper/ProductFormat';
import { MdDelete } from "react-icons/md";
import { CartContext } from "../context/CartContext"

export const CartItem = ({ id, name, image, color, price, amount }) => {
  const { removeItem, setIncrease, setDecrease } = useContext(CartContext);

  return (
    <div className="flex md:flex-row items-center justify-between w-full py-2">
      {/* Item */}
      <div className="flex items-center gap-2 w-full md:w-1/5">
        <figure className="w-16 h-12 md:w-22 md:h-14">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="flex flex-col gap-2">
          <p>{name}</p>
          <div className="flex items-center gap-2">
            <p>Color:</p>
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: color }}
            ></div>
          </div>
        </div>
      </div>
      {/* Price */}
      <div className="hidden md:block w-1/5 text-center">
        <p>
          <ProductFormat price={price} />
        </p>
      </div>
      {/* Quantity */}
      <div className="w-full md:w-1/5 flex justify-center">
        <CartAmountToggle
          amount={amount}
          setIncrease={() => setIncrease(id)}
          setDecrease={() => setDecrease(id)}
        />
      </div>
      {/* Subtotal */}
      <div className="hidden md:block w-1/5 text-center">
        <p>
          <ProductFormat price={price * amount} />
        </p>
      </div>
      {/* Remove */}
      <div className="w-full md:w-1/5 flex justify-center">
        <button type="button" className="cursor-pointer" onClick={() => removeItem(id)}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
};
