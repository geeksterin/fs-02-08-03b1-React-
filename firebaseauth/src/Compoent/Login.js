import React, { useState } from "react";
import { auth, provider } from "../firebase.config.js";
import { signInWithPopup } from "firebase/auth";

function Login() {
  const [user, setUser] = useState(null);
  async function handleClick() {
    try {
      const { user } = await signInWithPopup(auth, provider);
      setUser(user);
      console.log(user);
    } catch (error) {
      console.error(error);
    }
    // signInWithPopup(auth, provider)
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }
  return user ? (
    <h1>{`weolcome ${user.displayName}`}</h1>
  ) : (
    <button onClick={handleClick}>SignIn</button>
  );
}

export default Login;
