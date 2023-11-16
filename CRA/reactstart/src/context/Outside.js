import React, { useContext } from "react";
import { UserContext } from "./A";
function Outside() {
  const val = useContext(UserContext);
  return <div>Outside {val}</div>;
}

export default Outside;
