import React from 'react'
import { NavLink } from 'react-router-dom';
import { ProductFormat } from '../Helper/ProductFormat';

export const ProductListAll = (curVal) => {
    const { id, name, image, price, category, description } = curVal;
  return (
    <div className="w-full border-2">
      <div className='flex gap-8 p-4'>
        <figure className='w-4/5'>
        <img className="w-full h-48 object-cover" src={image} alt={name} />
        </figure>
        <div className='flex flex-col gap-4 justify-start'>
            <h3 className='text-xl font-semibold'>{name}</h3>
            <p><ProductFormat price={price}/></p>
            <p>{description.slice(0,90)}...</p>
            <NavLink className="w-28 h-8" to={`/SingleProduct/${id}`}>
            <button className='bg-indigo-600 w-28 h-8 text-white'>Read More</button>
          </NavLink> 
            </div>
      </div>
    </div>
  );
}
