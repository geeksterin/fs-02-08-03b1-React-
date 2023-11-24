import React from "react";

function Button({ increment, text }) {
  console.log(`${text} button component`);

  return (
    <div>
      <button onClick={increment}>Increment {text}</button>
    </div>
  );
}

export default React.memo(Button);
