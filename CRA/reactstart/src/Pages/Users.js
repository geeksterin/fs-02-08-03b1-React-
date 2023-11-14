import React, { useEffect, useState } from "react";
import { getAllUsers } from "../http/http.service";

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function getUsers() {
      const { data } = await getAllUsers();
      setUsers(data);
    }
    getUsers();
  }, []);
  return (
    <div>
      {users.map((user) => {
        return (
          <div>
            <h1>{user.login}</h1>
            <p>{user.id}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Users;
