import React from "react";

function Checkbox({ containDigitKey, handleDigitKey, strKey }) {
  return (
    <div>
      <label htmlFor="input">{strKey}</label>
      <input
        type="checkbox"
        id="input"
        checked={containDigitKey}
        onChange={handleDigitKey}
      />
    </div>
  );
}

export default Checkbox;
