import React, { useState } from "react";
import B from "./B";

export const UserContext = React.createContext();

function A() {
  const [user, setUser] = useState("samiul");
  return (
    <div>
      <h1>A</h1>
      <UserContext.Provider value={"obito uchina"}>
        <B />
      </UserContext.Provider>
      /..... ....
    </div>
  );
}

export default A;
