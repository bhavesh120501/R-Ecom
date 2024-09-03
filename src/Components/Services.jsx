import React from 'react';
import { FaTruckFast } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import { SiWebmoney } from "react-icons/si";
import { RiSecurePaymentFill } from "react-icons/ri";

export const Services = () => {
  return (
    <div className="container mx-auto mt-20 max-w-screen-lg mb-20">
      <div className="flex flex-row gap-5 h-48 justify-evenly items-center">
        <div className='flex flex-col gap-5 items-center justify-center bg-gray-100 rounded-md flex-grow h-full'>
          <FaTruckFast />
          <p className='text-center'>Super Fast And Free Delivery</p>
        </div>
        <div className='flex flex-col gap-5 h-full'>
          <div className='flex flex-row py-4 gap-5 p-4 items-center bg-gray-100 rounded-md flex-grow'>
            <FaShieldAlt />
            <p className='text-center'>No Contact Shopping</p>
          </div>
          <div className='flex flex-row py-4 gap-5 p-4 items-center bg-gray-100 rounded-md flex-grow'>
            <SiWebmoney />
            <p className='text-center'>Money Back Guaranteed</p>
          </div>
        </div>
        <div className='flex flex-col gap-5 items-center justify-center bg-gray-100 rounded-md flex-grow h-full'>
          <RiSecurePaymentFill />
          <p className='text-center'>Super Secure Payment System</p>
        </div>
      </div>
    </div>
  );
}
