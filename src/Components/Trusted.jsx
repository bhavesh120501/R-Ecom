import React from 'react';
import { SiTheboringcompany } from 'react-icons/si';

export const Trusted = () => {
  return (
    <div className='container mx-auto mt-20 bg-gray-100 h-40 rounded-md'>
      <div className='flex flex-col gap-6 h-full'>
        <h1 className='mt-6 text-center'>Trusted By 100+ Companies</h1>
        <div className='flex flex-row justify-around w-full'>
          <span className='text-6xl'><SiTheboringcompany /></span>
          <span className='text-6xl'><SiTheboringcompany /></span>
          <span className='text-6xl'><SiTheboringcompany /></span>
          <span className='text-6xl'><SiTheboringcompany /></span>
          <span className='text-6xl'><SiTheboringcompany /></span>
        </div>
      </div>
    </div>
  );
}
