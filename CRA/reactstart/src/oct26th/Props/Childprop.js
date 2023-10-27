import React from "react";

function Childprop(props) {
  console.log(props);
  return <div>{props.children}</div>;
}

export default Childprop;
