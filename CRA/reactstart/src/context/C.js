import React, { useContext } from "react";
import D from "./D";
import { UserContext } from "./A";
function C() {
  const val = useContext(UserContext);
  return (
    <div>
      <h1>C {val}</h1>
      <D />
    </div>
  );
}

export default C;
