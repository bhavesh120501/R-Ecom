import React from 'react';
import { ProductFormat } from '../Helper/ProductFormat';
import { CiDeliveryTruck } from "react-icons/ci";
import { TbTruckReturn } from "react-icons/tb";
import { GrDeliver } from "react-icons/gr";
import { BiShieldQuarter } from "react-icons/bi";
import { Stars } from './Stars';
import { AddToCart } from './AddToCart';

export const MyProductData = ({ data }) => {
  const { id, name, company, price, description, category, stock, stars, reviews } = data;
  console.log(data);
  return (
    <>
      <div className='flex flex-col gap-4 h-full w-full md:w-1/2 text-xs'>
        <h2 className='text-3xl'>{name}</h2>
        <Stars stars={stars} reviews={reviews} />
        <p className='flex gap-1 font-semibold'>
          MRP:
          <del>
            <ProductFormat price={price + 250000} />
          </del>
        </p>
        <p className='flex gap-1 text-indigo-700'>
          Deal Of The Day: <ProductFormat price={price} />
        </p>
        <p className='text-xs'>
          {description}
        </p>
        <div className='flex md:flex-row w-full justify-between'>
          <div className='flex flex-col gap-1 items-center'>
            <span className='text-xl'><CiDeliveryTruck /></span>
            <p className='text-nowrap text-xs items-center'>Free Delivery</p>
          </div>
          <div className='flex flex-col gap-1 items-center'>
            <span className='text-xl'><TbTruckReturn /></span>
            <p className='text-nowrap text-xs items-center'>30 Days Replacement</p>
          </div>
          <div className='flex flex-col gap-1 items-center'>
            <span className='text-xl'><GrDeliver /></span>
            <p className='text-nowrap text-xs items-center'>Delivered</p>
          </div>
          <div className='flex flex-col gap-1 items-center'>
            <span className='text-xl'><BiShieldQuarter /></span>
            <p className='text-nowrap text-xs items-center'>2 Years Warranty</p>
          </div>
        </div>
        <hr className='-mt-4 border-gray-300' />
        <p>Available: <span className='font-medium'>{stock > 0 ? "In Stock" : "Not Available"}</span></p>
        <p>ID: <span className='font-medium'>{id}</span></p>
        <p>Brand: <span className='font-medium'>{company}</span></p>
        <hr className='border-t-2 w-4/6 border-black' />
        {stock > 0 && <AddToCart data={data} />}
      </div>
    </>
  )
}
