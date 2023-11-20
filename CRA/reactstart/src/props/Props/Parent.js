import React from "react";
import Child from "./Child";
import Childprop from "./Childprop";
import Card from "./Card";
function Parent() {
  const obj = {
    vill: "abc",
    po: "kfkejw",
  };
  const marks = [9.17, 9.21, 9.32];

  function cb(a) {
    console.log("i am a function prop, passed from parent to child");
  }
  return (
    <div>
      <h1>Parent</h1>
      {/* <Child
        str={"samiul"}
        age={22}
        isAlive={true}
        address={obj}
        arr={marks}
        func={cb}
      /> */}

{/*       
      <div>
        <h1></h1>
        <h1></h1>
      </div> */}

      {/* <Childprop>
        <div>
        <h1>i am a cards h1</h1>
        <h1>I amcard</h1>
       </div>
      </Childprop> */}
      <Card>
        <h1>I am a h1 prop</h1>
      </Card>

      <Card>
        <p>I am a para</p>
      </Card>

      <Card>
        <button type="text">Click</button>
      </Card>
    </div>
  );
}

export default Parent;
