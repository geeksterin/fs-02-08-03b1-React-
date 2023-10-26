import React from "react";

function Event() {
  function handleClick(e) {
    console.log(`Hello World ${e}`);
  }

  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={() => handleClick(12)}>Click</button>
    </div>
  );
}

export default Event;
