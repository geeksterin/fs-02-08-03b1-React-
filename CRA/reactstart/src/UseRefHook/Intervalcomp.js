import React, { useEffect, useState, useRef } from "react";

function Intervalcomp() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <div>
      <button
        onClick={() => clearInterval(intervalRef.current)}
      >{`Count  ${count}`}</button>
    </div>
  );
}

export default Intervalcomp;
