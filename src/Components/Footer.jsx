import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaDiscord, FaInstagram, FaYoutube } from 'react-icons/fa';

export const Footer = () => {
  return (
    <>
      {/* Main Footer */}
      <footer className="mt-20 bg-indigo-950">
        <div className="container mx-auto px-4 py-8">
          {/* Top Content with Blue Background */}
          <section className="flex justify-center">
            <div className="flex flex-row justify-around bg-gray-100 w-full md:w-6/12 rounded-md -mt-16">
              <div className="flex flex-col items-center justify-center text-xs">
                <h3>Ready To Get Started?</h3>
                <h3>Talk To Us Today</h3>
              </div>
              <div className="flex flex-col items-center justify-center text-xs">
                <NavLink className="w-28 h-8" to="/Contact">
                  <button className="bg-indigo-600			 w-28 h-8 text-white">
                    Get Started
                  </button>
                </NavLink>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <div className="flex flex-row w-full md:w-6/12 mx-auto items-start justify-evenly gap-2 mt-8 text-white">
            <div className="flex flex-col gap-4 text-xs w-2/12 min-h-20">
              <h3>My Page</h3>
              <h3>Lorem Ipsum is simply dummy text.</h3>
            </div>
            <div className="flex flex-col gap-4 text-xs min-h-20">
              <h3>Subscribe To Get Important Updates</h3>
              <form action="#" className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="YOUR EMAIL"
                  name="Username"
                  required
                  autoComplete="off"
                  className="border-2 border-slate-200 w-10/12 p-2 h-8"
                />
                <input
                  className="p-2 self-start items-center justify-center cursor-pointer bg-indigo-600			 w-28 h-8"
                  type="submit"
                  value="SUBSCRIBE"
                />
              </form>
            </div>
            <div className="flex flex-col gap-4 text-xs min-h-20">
              <h3>Follow Us</h3>
              <div className="flex flex-row gap-2">
                <span className="text-xl">
                  <a href="">
                    <FaDiscord />
                  </a>
                </span>
                <span className="text-xl">
                  <a href="">
                    <FaInstagram />
                  </a>
                </span>
                <span className="text-xl">
                  <a href="">
                    <FaYoutube />
                  </a>
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4 text-xs w-2/12 min-h-20">
              <h3>Call Us</h3>
              <a href="tel:+918178818173">+918178818173</a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <hr />
        <div className="container mx-auto px-4 mt-4">
          <div className="flex flex-row w-full md:w-6/12 mx-auto items-start justify-around text-xs text-white">
            <div className="flex justify-center items-center">
              <h3>@{new Date().getFullYear()} All Rights Reserved</h3>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
              <h3>PRIVACY POLICY</h3>
              <h3>TERMS AND CONDITIONS</h3>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
