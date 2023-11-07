import React, { useEffect, useState } from "react";

function Effect() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  // useEffect(() => {
  //     console.log("i am rendering");
  // after the mounting phase and after each updation phase
  // })
  //   useEffect(() => {
  //     console.log("i am rendering");
  // once, only after the mounting phase ends
  //   }, []);

    // useEffect(() => {
    //   console.log("i am rednering");
    // }, [count1,asmany states as you wants]);

  //   useEffect(() => {
  //     console.log("updation due to count1 state");
  //   }, [count1]);
  //   useEffect(() => {
  //     console.log("updation due to count2 state");
  //   }, [count2]);

  function handleClick1() {
    setCount1(count1 + 1);
  }
  function handleClick2() {
    setCount2(count2 + 1);
  }
  return (
    <div>
      <h1>Effect</h1>
      <h1>{count1}</h1>
      <h1>{count2}</h1>
      <button onClick={handleClick1}>Click1</button>
      <button onClick={handleClick2}>Click2</button>
    </div>
  );
}

export default Effect;
