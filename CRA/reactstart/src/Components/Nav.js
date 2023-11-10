import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <ul>
      <Link to="/">
        <li>Home</li>
          </Link>
          
      <Link to="/project">
        <li>Project</li>
      </Link>

      <Link to="/about">
        <li>About</li>
      </Link>
      <Link to="career">
        <li>Career</li>
      </Link>
    </ul>
  );
}

export default Nav;
