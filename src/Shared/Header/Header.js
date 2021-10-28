import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/donation">Donation</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
    </>
  );
};

export default Header;
