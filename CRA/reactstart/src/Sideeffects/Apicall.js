import React, { useEffect, useState } from "react";
import Card from "./Card";

function Apicall() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://api.github.com/users");
      const data = await res.json();
      console.log(data);
      setUsers(data);
      setFilteredUsers(data);
    }
    fetchData();
  }, []);
  useEffect(() => {
    if (filterValue) {
      const newUsers = users.filter((user) => {
        return user.login.includes(filterValue);
      });
      setFilteredUsers(newUsers);
    } else {
      setFilteredUsers(users);
    }
  }, [filterValue]);

  function handleChange(event) {
    setFilterValue(event.target.value);
  }

  return (
    <div>
      <h1>users</h1>
      <input
        type="text"
        value={filterValue}
        onChange={(e) => handleChange(e)}
      />
      {filteredUsers.map((user) => {
        return <Card login={user.login} imgSrc={user.avatar_url} />;
      })}
    </div>
  );
}

export default Apicall;
