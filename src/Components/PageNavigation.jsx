import React from 'react'
import { NavLink } from 'react-router-dom'

export const PageNavigation = ({title}) => {
  return (
    <>
      <NavLink className="text-blue-700" to="/">Home</NavLink>/{title}
    </>
  );
}
