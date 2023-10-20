import React from "react";

const Card = () => {
  const name = "card";
  return (
    <div>
      <div>
        <h5>I am card top</h5>
        <h1>{name}</h1>
      </div>
      <div>
        <div>
          <p>Intro</p>
          <p>Desc</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
