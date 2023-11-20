import React from "react";

export default function Card(props) {
  return (
    <div>
      <h1>I am a card</h1>
      {props.children}
    </div>
  );
}
