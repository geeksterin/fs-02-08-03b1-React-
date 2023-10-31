import React, { useState } from "react";

/**
 *
 * const  [value,setValue] = useState(initialValue)->will return an array=
 *
 *
 *
 */

// function Incr() {
//   let counter = 0;
//   const [counter, setCounter] = useState(10);
//   function handleClick() {
//     console.log("before Increment", counter);
//   counter++;
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

// function Incr() {
//   const [user, setUser] = useState({
//     fname: "samiul",
//     lname: "khan",
//     age: 22,
//   });

//   function handleClick() {
//     const updatedObj = {
//       ...user,
//       age: user.age + 1,
//     };
//     setUser(updatedObj);
//   }

//   return (
//     <div>
//       <h1>{user.fname}</h1>
//       <h1>{user.lname}</h1>
//       <h1>{user.age}</h1>
//       <button onClick={handleClick}>Click</button>
//     </div>
//   );
// }

// function Incr() {
//   const [isLoggedin, setIsLoggedIn] = useState(false);
//   // function handleClick() {
//   //   setIsLoggedIn(!isLoggedin);
//   // }
//   // return  (
//   //   <div>
//   //     {isLoggedin ? <h1>User is LoggedIn</h1> : <h1>User is Not logged In</h1>}
//   //     <button onClick={ handleClick}>Click</button>
//   //   </div>
//   // );

//   //conditional rendering
//   // return isLoggedin ? (
//   //   <LoggedInComp func={setIsLoggedIn} />
//   // ) : (
//   //   <LogoutComp func={setIsLoggedIn} />
//   // );
//   //shortcircuit
//   return (
//     <>
//       {isLoggedin && <LoggedInComp func={setIsLoggedIn} />}
//       {!isLoggedin && <LogoutComp func={setIsLoggedIn} />}
//     </>
//   );
// }

// function LoggedInComp({ func }) {
//   function handleClick() {
//     func(false);
//   }
//   return (
//     <div>
//       <h1>User is Logged In</h1>
//       <button onClick={handleClick}>Click</button>
//     </div>
//   );
// }
// function LogoutComp({ func }) {
//   function handleClick() {
//     func(true);
//   }
//   return (
//     <div>
//       <h1>User is not Logged In</h1>
//       <button onClick={handleClick}>Click</button>
//     </div>
//   );
// }

function Incr() {
  function handleClick() {
    console.log("before update", counter);
    setCounter(counter + 1);
    console.log("after update", counter);
  }
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default Incr;
