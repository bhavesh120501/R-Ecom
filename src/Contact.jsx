import React from 'react';
import { Nav } from './Components/Nav';

export const Contact = () => {
  return (
    <>
      <Nav/>
      <div className='container mx-auto mt-16 flex flex-col gap-6 p-4'>
        <div className='flex items-center justify-center pt-4 text-2xl'>Contact Us</div>
        <div className='w-full'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278905!2d73.91411937438944!3d18.562253982539378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity!5e0!3m2!1sen!2sin!4v1720765692120!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className='w-full'
          ></iframe>
        </div>
        <div className='w-full flex justify-center mt-6'>
          <form className='flex flex-col items-center justify-center gap-6 w-full max-w-lg' action="https://formspree.io/f/xvgpgzvb" method='POST'>
            <input
              className='border-2 border-slate-200 w-full p-2 h-10'
              type="text"
              placeholder='USERNAME'
              name='Username'
              required
              autoComplete='off'
            />
            <input
              type="text"
              className='border-2 border-slate-200 w-full p-2 h-10'
              placeholder='EMAIL'
              name='Email'
              required
              autoComplete='off'
            />
            <textarea
              name="Message"
              className='border-2 border-slate-200 w-full p-2 h-32'
              required
              autoComplete='off'
              placeholder='Message'
            ></textarea>
            <input
              className='p-2 self-start cursor-pointer bg-indigo-600			 w-28'
              type="submit"
              value="Send"
            />
          </form>
        </div>
      </div>
    </>
  );
}
