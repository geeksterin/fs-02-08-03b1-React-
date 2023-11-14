import React, { useReducer, useState } from "react";

const initialState = 0;

function reduce(state, action) {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
  }
}

function UseReducercomp() {
  const [state, dispatch] = useReducer(reduce, initialState);
  // const [state,setState] = useState(0)
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => dispatch("increment")}>Incr</button>
      <button onClick={() => dispatch("decrement")}>Decr</button>
    </div>
  );
}

export default UseReducercomp;
