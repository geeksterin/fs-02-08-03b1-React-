import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
} from "../Redux/Counter/counterBuilders";

// function Counter({ count, incrementCount, decrementCount }) {
//   return (
//     <div>
//       <h1>Count {count}</h1>
//       <button onClick={incrementCount}>Increment</button>
//       <button onClick={decrementCount}>Decrement</button>
//     </div>
//   );
// }

// function mapStateToProps(state) {
//   return {
//     count: state.count,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     incrementCount: () => dispatch(incrementCounter()),
//     decrementCount: () => dispatch(decrementCounter()),
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count {count}</h1>
      <button onClick={() => dispatch(incrementCounter())}>Increment</button>
      <button onClick={() => dispatch(decrementCounter())}>Decrement</button>
    </div>
  );
}

export default Counter;
