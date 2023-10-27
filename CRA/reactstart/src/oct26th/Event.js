import React from "react";

function Event() {
  function handleClick(args) {
    console.log(`Hello World `);
  }

  function handleInputChange(e) {
    console.log(e.target.value);
  }

  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={handleClick}>Click</button>
      <input type="text" onChange={(e) => handleInputChange(e)} />
    </div>
  );
}

export default Event;

// function func(a) {}

// func(12);


