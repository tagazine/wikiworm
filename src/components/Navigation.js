// for navigation.js

import React from "react";
import { Nav, NavLink } from "reactstrap";
import { Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Nav className="navtop">
        <div >
          <NavLink href="/">Home</NavLink>

          <NavLink href="/login">Login</NavLink>

          <NavLink href="/profile">Profile</NavLink>
        </div>
      </Nav>

      <Outlet />
    </>
  );
};

export default Navigation;
