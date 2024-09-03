import React from 'react';
import { NavLink } from 'react-router-dom';
import { ProductFormat } from '../Helper/ProductFormat';

export const Product = (curVal) => {
  const { id, name, image, price, category } = curVal;

  return (
    <div className="w-full md:w-3/4 lg:w-1/4 p-2">
      <div className="bg-white rounded-md shadow-md">
        <NavLink to={`/SingleProduct/${id}`}>
        <figure className='hover:opacity-80'>
        <img
            className="w-full h-48 object-cover p-4"
            src={image}
            alt={name}
          />
        </figure>
        <div className="px-5 pb-5">
          <div className="flex items-center justify-between">
            <span className="text-md font-bold text-gray-900">{name}</span>
            <span className="text-md font-bold text-gray-900"><ProductFormat price={price}/></span>
          </div>
        </div>
        </NavLink>
      </div>
    </div>
  );
};
