import React, { useEffect, useState } from "react";
import B from "./B";
import C from "./C";
import D from "./D";
function A() {
  const [count, setCount] = useState(0);
  console.log("Mounting phase of A starts");
  function handleClick() {
    setCount(count + 1);
  }
  /**
   *
   *  const [state,setState] = useState(initialStateValue)
   * useEffect(callback)
   */
  useEffect(() => {
    console.log("Mounting Phase Of A Ends");
  });
  return (
    <>
      <button onClick={handleClick}>ClickA</button>
      <h1> A</h1>
      <B />
      <C />
      <D />
    </>
  );
}

export default A;
