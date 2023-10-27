import React from "react";

/**
 *
 * {str: 'samiul', age: 22, isAlive: true, address: {…}, arr: Array(3), …}
 */
function Child({ str, age, isAlive, address, arr, func }) {
  func(12);
  return (
    <div>
      Child
      <h1>{str}</h1>
      <p>{age}</p>
      <p>{isAlive}</p>
      <p>
        {address.vill} {address.po}
      </p>
      {arr.map((num) => {
        return <p>{num}</p>;
      })}
    </div>
  );
}

export default Child;


function parent()
{
  const var1 = 12;
  const var2 = 13;
  const var3 = 24;
  child(var1, var2, var3);
}

function child(a, b, c)
{
  console.log(a,b,c);
  
}
