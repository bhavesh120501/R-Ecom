import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { CartContext } from "../context/CartContext";

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {totalItem} = useContext(CartContext);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className={`flex items-center ${menuOpen ? "hidden" : ""}`}>
          <NavLink
            className="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700"
            to="/"
            onClick={closeMenu}
          >
            Brand
          </NavLink>
        </div>

        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            aria-label="toggle menu"
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <RxCross2 className="h-6 w-6 text-black" />
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 text-black fill-current"
              >
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                />
              </svg>
            )}
          </button>
        </div>

        <div
          className={`md:flex items-center ${
            menuOpen
              ? "fixed inset-0 bg-white z-10 flex flex-col justify-center items-center gap-3"
              : "hidden"
          } md:relative md:flex-row md:mx-6`}
        >
          {menuOpen && (
            <button
              type="button"
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="toggle menu"
              onClick={toggleMenu}
            >
              <RxCross2 className="h-6 w-6 text-black" />
            </button>
          )}
          <div className="flex flex-col items-center md:flex-row md:mx-6">
            <NavLink
              className="my-2 text-lg md:text-base text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0"
              to="/"
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink
              className="my-2 text-lg md:text-base text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0"
              to="/about"
              onClick={closeMenu}
            >
              About
            </NavLink>
            <NavLink
              className="my-2 text-lg md:text-base text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0"
              to="/products"
              onClick={closeMenu}
            >
              Products
            </NavLink>
            <NavLink
              className="my-2 text-lg md:text-base text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0"
              to="/contact"
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </div>

          <div className="flex justify-center md:block relative">
            <NavLink
              className="relative text-gray-700 hover:text-gray-600"
              to="/Cart"
              onClick={closeMenu}
            >
              <svg
                className="h-7 w-7"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="absolute -top-1 -right-1 rounded-full bg-indigo-600 text-white p-1 text-xs flex items-center justify-center w-4 h-4">
                {totalItem}
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
