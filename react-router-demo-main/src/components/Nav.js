import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  return (
    <ul>
      <li>
        <NavLink to="/" end>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/users">Users</NavLink>
      </li>
    </ul>
  );
};

export default Nav;
