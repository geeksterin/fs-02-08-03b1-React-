import React from "react";
import { useConsumeContext } from "../globalstatemanager/stateProvide";

function MainCounter() {
  const [state, dispatch] = useConsumeContext();
  console.log(state);
  return (
    <div>
      <h1>{state.count}</h1>
    </div>
  );
}

export default MainCounter;
