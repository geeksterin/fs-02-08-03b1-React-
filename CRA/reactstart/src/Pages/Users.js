import React, { useEffect, useState } from "react";
import { getAllUsers } from "../http/http.service";
import { useNavigate, Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const navigator = useNavigate();
  useEffect(() => {
    async function getUsers() {
      const { data } = await getAllUsers();
      setUsers(data);
    }
    getUsers();
  }, []);

  function handleClick(user) {
    navigator(`/users/${user.id}`);
  }
  return (
    <div>
      {users.map((user) => {
        return (
          <div>
            <h1>{user.login}</h1>
            <p>{user.id}</p>
            <button onClick={() => handleClick(user)}>Details</button>
            {/* <Link to={`/users/${user.id}`}> details</Link> */}
          </div>
        );
      })}
    </div>
  );
}

export default Users;
