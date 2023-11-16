import React from "react";
import { UserContext } from "./A";

function E() {
  return (
    <div>
      <h1>E</h1>
      <UserContext.Consumer>
        {(val) => {
          return <h1>{val}</h1>;
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default E;
