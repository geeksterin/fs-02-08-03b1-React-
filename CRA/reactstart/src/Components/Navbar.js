import React from "react";

function Navbar({ navitem1, navitem2, cb }) {
  cb();
  return (
    <div className="navbar">
      <h5>Navbar</h5>
      <p>{navitem1}</p>
      <p>{navitem2}</p>
      <p></p>
    </div>
  );
}

export default Navbar;
