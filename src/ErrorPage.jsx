import React from 'react'
import { NavLink } from 'react-router-dom';

export const ErrorPage = () => {
  return (
      <div className="container mt-20 mx-auto p-4">
        <div className="flex flex-col gap-6 justify-center items-center">
          <h2 className='text-6xl font-bold'>404</h2>
          <h1 className='text-2xl'>UH OH! You're Lost</h1>
          <p className='text-sm'>The page you are looking for doesn't exist.Click the below button to go to the homepage.</p>
          <NavLink className="w-28 h-8" to="/">
            <button className="bg-indigo-600 w-28 h-8 text-white">
              HOME
            </button>
          </NavLink>
        </div>
      </div>
  );
}
