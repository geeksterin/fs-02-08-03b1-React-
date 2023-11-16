import React, { useReducer, useState } from "react";

// function MultiCounter() {
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);
//     const [count3, setCount3] = useState(0);
//     /**
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);
//   const [count3, setCount3] = useState(0);
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);
//   const [count3, setCount3] = useState(0);
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);
//   const [count3, setCount3] = useState(0);
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);
//   const [count3, setCount3] = useState(0);
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);
//   const [count3, setCount3] = useState(0);
//   v

//      */
//   function handleClick1() {
//     setCount1(count1 + 1);
//   }
//   return (
// <div>
//   <div>
//     <h1>First Counter {count1}</h1>
//     <buttton onClick={handleClick1}>Incr1</buttton>
//     <buttton onClick={() => setCount1(count1 - 1)}>Decr1</buttton>
//   </div>
//   <div>
//     <h1>Second Counter {count2}</h1>
//     <buttton onClick={() => setCount2(count2 + 1)}>Incr2</buttton>
//     <buttton onClick={() => setCount2(count2 - 1)}>Decr2</buttton>
//   </div>
//   <div>
//     <h1>Second Counter {count3}</h1>
//     <buttton onClick={() => setCount3(count3 + 1)}>Incr3</buttton>
//     <buttton onClick={() => setCount3(count3 - 1)}>Decr3</buttton>
//   </div>
// </div>
//   );
// }

const initialState = {
  count1: 0,
  count2: 0,
  count3: 0,
};

function reduce(state, action) {
  switch (action.type) {
    case "incrementCount1":
      return {
        ...state,
        count1: state.count1 + 1,
      };
    case "decrementCount1":
      return {
        ...state,
        count1: state.count1 - 1,
      };
    case "incrementCount2":
      return {
        ...state,
        count2: state.count2 + 1,
      };
    case "decrementCount2":
      return {
        ...state,
        count2: state.count2 - 1,
      };

    case "incrementCount3":
      return {
        ...state,
        count3: state.count3 + 1,
      };
    case "decrementCount3":
      return {
        ...state,
        count3: state.count3 - 1,
      };
  }
}

function MultiCounter() {
  const [state, dispatch] = useReducer(reduce, initialState);
  console.log(state);
  return (
    <div>
      <div>
        <h1>First Counter {state.count1}</h1>
        <buttton onClick={() => dispatch({ type: "incrementCount1" })}>
          Incr1
        </buttton>
        <buttton onClick={() => dispatch({ type: "decrementCount1" })}>
          Decr1
        </buttton>
      </div>
      <div>
        <h1>Second Counter {state.count2}</h1>
        <buttton onClick={() => dispatch({ type: "incrementCount2" })}>
          Incr2
        </buttton>
        <buttton onClick={() => dispatch({ type: "decrementCount2" })}>
          Decr2
        </buttton>
      </div>
      <div>
        <h1>Second Counter {state.count3}</h1>
        <buttton onClick={() => dispatch({ type: "incrementCount3" })}>
          Incr1
        </buttton>
        <buttton onClick={() => dispatch({ type: "decrementCount3" })}>
          Decr1
        </buttton>
      </div>
    </div>
  );
}

export default MultiCounter;
