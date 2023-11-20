import React from "react";
import { useConsumeContext } from "../globalstatemanager/stateProvide";

function Incrememt() {
  const [state, dispatch] = useConsumeContext();
  function handleClick() {
    dispatch({ type: "increment" });
  }
  return <button onClick={handleClick}>Increment</button>;
}

export default Incrememt;
