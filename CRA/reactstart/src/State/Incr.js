import React, { useState } from "react";

/**
 *
 * const  [value,setValue] = useState(initialValue)->will return an array=
 *
 *
 *
 */

// function Incr() {
//   //   let counter = 0;
//   const [counter, setCounter] = useState(10);
//   function handleClick() {
//     console.log("before Increment", counter);
//     //   counter++;
//     setCounter(counter + 1);
//     console.log("after Increment", counter);
//   }
//   return (
//     <div>
//       <h1>{counter}</h1>
//       <button onClick={handleClick}>Click</button>
//     </div>
//   );
// }

function Incr() {
  const [user, setUser] = useState({
    fname: "samiul",
    lname: "khan",
    age: 22,
  });

  function handleClick() {
    const updatedObj = {
      age: user.age + 1,
      ...user,
    };
    setUser(updatedObj);
  }

  return (
    <div>
      <h1>{user.fname}</h1>
      <h1>{user.lname}</h1>
      <h1>{user.age}</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default Incr;
