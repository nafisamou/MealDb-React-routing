import React from "react";
import { NavLink } from "react-router-dom";
import './header.css'
const Header = () => {
  return (
    <div className="header">
      <nav className="mb-5 pb-5">
        <NavLink 
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to="/home"
        >
          Home
        </NavLink>
        <NavLink className={({ isActive }) =>
              isActive ? 'active': undefined
            } to="/about">About</NavLink>
           <NavLink to="/meals">Meals</NavLink>
      </nav>
    </div>
  );
};

export default Header;
