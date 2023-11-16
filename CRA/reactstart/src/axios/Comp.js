import React, { useState, useEffect } from "react";
import { getAllUsers, getUser, postUsers } from "../http/http.service";
//please see the "../http/http.service" for more details implementation of axios

function Comp() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // getAllUsers()
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // async function func() {
    //   const { data } = await getAllUsers();
    //   console.log(data);
    // }

    // func();

    // (async function () {
    //   const { data } = await getAllUsers();
    //   console.log(data);
    // })();

    async function getData() {
      const { data } = await getAllUsers();
      //   console.log(data);
      //   data = data.filter((user) => {
      //     return user.login.includes("ab");
      //   });

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
        
    
      console.log(data);
       setUsers(data);
              */
    }

    async function getOneUser(userId) {
      const { data } = await getUser(userId);
      console.log(data);
    }
    getData();
    getOneUser(1000);

    async function postNewUsers(userData) {
      const { data } = await postUsers(userData);
      console.log(data);
    }
    postNewUsers({
      fname: "samiul",
      lname: "khan",
    });
  }, []);
  return <div>Comp</div>;
}

export default Comp;
