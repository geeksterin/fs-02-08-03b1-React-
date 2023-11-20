import react, { useContext, useReducer } from "react";

const inititalState = {
  count: 0,
};

function reduce(state, action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    case "reset":
      return {
        ...state,
        count: 0,
      };
  }
}

/*
const [state,dispatch] = useReducer(reduce,state)

<Context.Provider value={[state,dispatch]}>
<Comp/>
</Context.Provider>

*/

const CounterContext = react.createContext();

export function ContextProvider({ children }) {
  return (
    <CounterContext.Provider value={useReducer(reduce, inititalState)}>
      {children}
    </CounterContext.Provider>
  );
}

export function useConsumeContext() {
  return useContext(CounterContext);
}

/**
 <ContextProvider>
 <Comp/>
 </ContextProvider>
 */
