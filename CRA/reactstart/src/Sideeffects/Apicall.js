import React, { useEffect, useState } from "react";

function Apicall() {
  //https://api.github.com/users
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function callApi() {
      const res = await fetch("https://api.github.com/users");
      const data = await res.json();
      console.log(data);
      setUsers(data);
    }
    callApi();
  }, []);
  return (
    <div>
      {users.map((user) => {
        return <p>{user.login}</p>;
      })}
    </div>
  );
}

export default Apicall;
