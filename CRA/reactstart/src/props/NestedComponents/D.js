import React from "react";
import E from "./E";
import F from "./F";
function D({ name }) {
  return (
    <div>
      <h1>D</h1>
      <p className="D_g_header">I am a para inside D</p>
      <E />
      <F abc={name} />
    </div>
  );
}

function Footer() {
  return <div className="footer_main_container"></div>;
}

function Navbar() {
  return <div className="navbar_main_container"></div>;
}

export default D;
