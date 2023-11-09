import React, { useState, useEffect } from "react";
import { getAllUsers, getUser } from "../http/http.service";

function Comp() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function getData() {
      const { data } = await getAllUsers();
      console.log(data);

      /*
        const { data } = await axios.get("https://api.github.com/users", {
            headers: {
                "Content-Type": "application/json",
                "Authorization":`Bearer {token}`
            }
        });

        axios.post("https://api.github.com/",{
            headers: {
                "Content-Type": "application/json",
                "Authorization":`Bearer {token}`
            }
        })
        axios.delete("server url/users/delete",{
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization":`Bearer {token}`
            }
        }
        })
        
        
        */

      //   console.log(data);
      //   setUsers(data);
    }

    async function getOneUser(userId) {
      const { data } = await getUser(userId);
      console.log(data);
    }
    getData();
    getOneUser(1000);
  }, []);
  return <div>Comp</div>;
}

export default Comp;
