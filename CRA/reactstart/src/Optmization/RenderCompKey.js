import React, { useEffect, useState } from "react";
import { v4 } from "uuid";

function RenderCompKey() {
  const api = "https://api.github.com/users";
  const [users, setUsers] = useState([]);
  console.log(v4());
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h1>RenderComp</h1>
      {users.map((user, index) => (
        // <h1 key={Math.random() * 1000}>{user.login}</h1>
        // <h1 key={index}>{user.login}</h1>
        // <Comp key={v4()} />
        <h1 key={v4()}>{user.login}</h1>
      ))}
    </div>
  );
}

export default RenderCompKey;
