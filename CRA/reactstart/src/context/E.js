import React, { useContext } from "react";
import { UserContext } from "./A";

// function E() {
//   return (
//     <div>
//       <h1>E</h1>
//       <UserContext.Consumer>
//         {(val) => {
//           return <h1>{val}</h1>;
//         }}
//       </UserContext.Consumer>
//     </div>
//   );
// }

function E() {
  const val = useContext(UserContext);
  return (
    <div>
      <h1>E</h1>
      <h1>{val}</h1>
    </div>
  );
}

export default E;
