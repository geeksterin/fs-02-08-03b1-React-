import React, { useEffect } from "react";

function E() {
  console.log("Mounting Phase Of E Starts");
  useEffect(() => {
    console.log("Mounting Phase Of E Ends");
    
  });
  return (
    <div>
      <h1>E</h1>
    </div>
  );
}

export default E;
