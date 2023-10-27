import React from "react";
import B from "./B";
import C from "./C";
import D from "./D";
function A() {
  const name = "samiul";
  return (
    <>
      <h1></h1>
      <div>
        <h1> A</h1>
        <B />
        <C />
        <D name={name} />
      </div>
    </>
  );
}

export default A;
