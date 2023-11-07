import React from "react";

function Card({ login, imgSrc }) {
  return (
    <div>
      <img src={imgSrc} alt="Avatar" />
      <h1>{login}</h1>
    </div>
  );
}

export default Card;
