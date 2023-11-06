import React, { useEffect } from "react";
import "./Css/F.css";

function F() {
  console.log("Mounting Phase Of F Starts");
  useEffect(() => {
    console.log("Mounting Phase Of F Ends");
  });
  return (
    <div>
      <h1>F</h1>
    </div>
  );
}

export default F;
