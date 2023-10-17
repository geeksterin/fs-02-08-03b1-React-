import React from "react";
import { useNavigate } from "react-router-dom";

export const Nav = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p onClick={() => navigate("/")}>Home</p>
      <p onClick={() => navigate("/about")}>About</p>
      <p onClick={() => navigate("/projects")}>Projects</p>
      <p onClick={() => navigate("/contacts")}>Contacts</p>
      <p onClick={() => navigate("/cards")}>Cards</p>
    </div>
  );
};
