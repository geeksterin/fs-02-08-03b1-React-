import React, { useEffect } from "react";

function H() {
  console.log("Mounting Phase Of H Starts");
  useEffect(() => {
    console.log("Mounting Phase Of H Ends");
  });
  return (
    <div>
      <h1>H</h1>
    </div>
  );
}

export default H;
