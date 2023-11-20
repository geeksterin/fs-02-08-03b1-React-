import React from "react";
import { useConsumeContext } from "../globalstatemanager/stateProvide";

function Decrement() {
  const [state, dispatch] = useConsumeContext();
  function handleClick() {
    dispatch({ type: "decrement" });
  }
  return <button onClick={handleClick}>Decrement</button>;
}

export default Decrement;
