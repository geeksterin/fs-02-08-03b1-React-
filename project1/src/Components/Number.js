import React from "react";

function Number({ lengthKey, handleLengthKey }) {
  return (
    <div>
      <label htmlFor="input"></label>
      <input
        type="Number"
        id="input"
        value={lengthKey}
        onChange={(e) => handleLengthKey(e)}
      />
    </div>
  );
}

export default Number;
