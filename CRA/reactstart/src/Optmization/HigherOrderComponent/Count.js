import React from "react";

function Count({ count, text }) {
  console.log(`${text} count component`);
  return (
    <div>
      <h1>
        {text} {count}
      </h1>
    </div>
  );
}
export default React.memo(Count);
