import React, { useEffect, useState} from "react";
import E from "./E";
import F from "./F";
function D() {
  const [count, setCount] = useState(0);
  function handleClick()
  {
    setCount(count + 1);
  }
  console.log("Mounting Phase Of D Starts");
  useEffect(() => {
    console.log("Mounting Phase Of D Ends");
  })
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      <h1>D</h1>
      <E />
      <F />
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
