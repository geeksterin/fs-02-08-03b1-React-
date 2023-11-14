import React, { useReducer, useState } from "react";

// const initialState = 0;

// function reduce(state, action) {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//   }
// }

// function UseReducercomp() {
//   const [state, dispatch] = useReducer(reduce, initialState);
//   // const [state,setState] = useState(0)
//   return (
//     <div>
//       <h1>{state}</h1>
//       <button onClick={() => dispatch("increment")}>Incr</button>
//       <button onClick={() => dispatch("decrement")}>Decr</button>
//     </div>
//   );
// }

// const initialState = {
//   count: 0,
// };

// function reduce(state, action) {
//   switch (action) {
//     case "increment":
//       return {
//         count: state.count + 1,
//       };
//     case "decrement":
//       return {
//         count: state.count - 1,
//       };
//   }
// }

// function UseReducercomp() {
//   const [state, dispatch] = useReducer(reduce, initialState);
//   // const [state,setState] = useState(0)
//   return (
//     <div>
//       <h1>{state.count}</h1>
//       <button onClick={() => dispatch("increment")}>Incr</button>
//       <button onClick={() => dispatch("decrement")}>Decr</button>
//     </div>
//   );
// }

// const initialState = {
//   count: 0,
// };
// function reduce(state, action) {
//   switch (action.type) {
//     case "increment":
//       return {
//         count: state.count + 1,
//       };
//     case "decrement":
//       return {
//         count: state.count - 1,
//       };
//   }
// }
// function UseReducercomp() {
//   const [state, dispatch] = useReducer(reduce, initialState);
//   // const [state,setState] = useState(0)
//   return (
//     <div>
//       <h1>{state.count}</h1>
//       <button onClick={() => dispatch({ type: "increment" })}>Incr</button>
//       <button onClick={() => dispatch({ type: "decrement" })}>Decr </button>
//     </div>
//   );
// }
// export default UseReducercomp;

const initialState = {
  count: 0,
};
function reduce(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };
    case "decrement":
      return {
        count: state.count - 1,
      };
    case "incrementby5":
      return {
        count: state.count + action.value,
      };

    case "decrementby5":
      return {
        count: state.count - action.value,
      };
  }
}
function UseReducercomp() {
  const [state, dispatch] = useReducer(reduce, initialState);
  // const [state,setState] = useState(0)
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Incr</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decr </button>
      <button onClick={() => dispatch({ type: "incrementby5", value: 5 })}>
        Incr By 5
      </button>
      <button onClick={() => dispatch({ type: "decrementby5", value: 5 })}>
        Decr By 5
      </button>
    </div>
  );
}
export default UseReducercomp;
