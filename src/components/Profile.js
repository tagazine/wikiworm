import React from "react";
import { Nav, NavLink } from "reactstrap";
import { Outlet, Link } from "react-router-dom";

export default function Profile() {
  return (
    <>
      <div style={{ minHeight: 800, marginTop: 20 }}>
        <h1>Profile Page</h1>

        <>
          <nav>
            <ul>
              <li>
                <Link to="/profile/draw">Draw</Link>
              </li>
            </ul>
          </nav>

          <Outlet />
        </>
      </div>
    </>
  );
}
