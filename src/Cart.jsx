import React, { useContext } from 'react';
import { CartContext } from './context/CartContext';
import { CartItem } from './Components/CartItem';
import { NavLink } from 'react-router-dom';
import { ProductFormat } from './Helper/ProductFormat';

export const Cart = () => {
  const { cart, clearCart, totalAmount, shippingFee } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="flex items-center justify-center mt-20 h-60">
        <p className="text-2xl">No Items In Cart</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-20 max-w-screen-lg p-4">
      <div className="flex items-center justify-between font-bold py-2">
        <div className="w-1/3 md:w-1/5 text-center">Item</div>
        <div className="hidden md:block w-1/5 text-center">Price</div>
        <div className="w-1/3 md:w-1/5 text-center">Quantity</div>
        <div className="hidden md:block w-1/5 text-center">Subtotal</div>
        <div className="w-1/3 md:w-1/5 text-center">Remove</div>
      </div>
      <hr className="border-gray-600" />
      <div>
        {cart.map((curVal) => (
          <CartItem key={curVal.id} {...curVal} />
        ))}
      </div>
      <hr className="border-gray-600" />
      <div className="flex items-center md:justify-between mt-4 gap-20 md:gap-0">
        <NavLink to="/Products" className="w-full md:w-auto">
          <button className="bg-indigo-600 w-full md:w-44 h-8 text-white flex items-center justify-center whitespace-nowrap">
            Continue Shopping
          </button>
        </NavLink>
        <button
          className="bg-indigo-600 w-full md:w-44 h-8 text-white flex items-center justify-center whitespace-nowrap"
          onClick={clearCart}
        >
          Clear Cart
        </button>
      </div>
      <div className="flex justify-end items-center mt-5 w-full">
        <div className="flex flex-col gap-2 w-full md:max-w-xs">
          <div className="flex justify-between">
            <p>Subtotal:</p>
            <span className="font-bold">
              <ProductFormat price={totalAmount} />
            </span>
          </div>
          <div className="flex justify-between">
            <p>Shipping Fee:</p>
            <span className="font-bold">
              <ProductFormat price={shippingFee} />
            </span>
          </div>
          <hr className="border-gray-600" />
          <div className="flex justify-between">
            <p>Order Total:</p>
            <span className="font-bold">
              <ProductFormat price={totalAmount + shippingFee} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
