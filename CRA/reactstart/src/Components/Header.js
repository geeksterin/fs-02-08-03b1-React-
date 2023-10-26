import React from "react";
import Navbar from "./Navbar";

function Header() {
  function cb() {
    console.log("hello pankaj");
  }
  return (
    <div>
      <h1>Header</h1>

      <Navbar navitem1="about" navitem2="contact" cb={cb} />
    </div>
  );
}

export default Header;
