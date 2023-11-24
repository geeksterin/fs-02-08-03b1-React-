import React, { useState, useMemo } from "react";

function UseMemoComp() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  function handleAge() {
    setAge(age + 1);
  }

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return count % 2 === 0;
  }, [count]);

  //   function isEven() {
  //     console.log("is Even func");
  //     let i = 0;
  //     while (i < 2000000000) i++;
  //     return count % 2 === 0;
  //   }
  return (
    <div>
      <button onClick={handleClick}>
        Click {count} {isEven ? "Even" : "odd"}
      </button>
      <button onClick={handleAge}>Click {age}</button>
    </div>
  );
}

export default UseMemoComp;
