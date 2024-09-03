import React from 'react';
import shopImage from '../assets/shop.jpg';
import { NavLink } from 'react-router-dom';

export const HeroSection = ({ myData }) => {
  const { name } = myData;
  return (
    <>
      <div className="container mx-auto mt-20 flex flex-col md:flex-row gap-2 items-center max-w-screen-lg">
        <div className="flex flex-col text-left gap-3 w-full md:w-1/2">
          <p>Welcome To</p>
          <h1 className='font-semibold text-4xl'>{name}</h1>
          <p className='text-sm'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <NavLink className="w-28 h-8" to="/Products">
            <button className='bg-indigo-600 w-28 h-8 text-white'>Shop Now</button>
          </NavLink> 
        </div>
        <div className='mt-8 md:mt-0 w-full md:w-1/2 flex justify-center'>
          <figure>
            <img src={shopImage}
              alt="shop_image"
              className='w-full'
            />
          </figure>
        </div>
      </div>
    </>
  );
}
