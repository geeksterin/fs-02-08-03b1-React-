import React,{useEffect} from "react";
import H from "./H";
import "./Css/C.css";
function C() {
  console.log("Mounting Phase Of C Starts");
  useEffect(() => {
    console.log("Mounting Phase Of C Ends");
  })
  return (
    <div>
      <h1>C</h1>
      <H />
    </div>
  );
}

export default C;
