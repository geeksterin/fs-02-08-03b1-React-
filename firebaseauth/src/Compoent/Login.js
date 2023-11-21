import React from "react";
import { auth, provider } from "../firebase.config.js";
import { signInWithPopup } from "firebase/auth";

function Login() {
  function handleClick() {
    signInWithPopup(auth, provider)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <button onClick={handleClick}>SignIn</button>
    </div>
  );
}

export default Login;
