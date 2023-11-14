import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../http/http.service";

function User() {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    async function get(id) {
      const { data } = await getUser(id);
      setUser(data);
    }
    get(userId);
  }, []);

  return (
    <div>
      <h1>{user.login}</h1>
      <p>{user.name}</p>
    </div>
  );
}

export default User;
