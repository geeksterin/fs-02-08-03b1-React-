import React, { useEffect } from "react";
import "./Css/G.css";

function G() {
  console.log("Mounting Phase Of G Starts");
  useEffect(() => {
    console.log("Mounting Phase Of G Ends");
  });
  return (
    <div>
      <h1>G</h1>
    </div>
  );
}

export default G;
