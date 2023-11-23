import "./App.css";
// import Header from "./Components/Header";
// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";
// import A from "./Sideeffects/NestedComponents/A";
// import A from "./context/A";
// import Frag from "./oct26th/Frag";
// import Imgcomp from "./oct26th/Imgcomp";
// import Event from "./oct26th/Event";
// import Parent from "./oct26th/Props/Parent";
// import Incr from "./State/Incr";
// import Effect from "./Sideeffects/Effect";
// import { useState } from "react";
// import Apicall from "./Sideeffects/Apicall";
// import Comp from "./axios/Comp";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home";
// import Project from "./Pages/Project";
// import About from "./Pages/About";
// import Career from "./Pages/Career";
// import Contact from "./Pages/Contact";
// import Nav from "./Components/Nav";
// import Users from "./Pages/Users";
// import User from "./Pages/User";
// import UseReducercomp from "./UseReducer/UseReducercomp";
// import MultiCounter from "./UseReducer/MultiCounter";
// import ComplexCounter from "./Components/ComplexCounter";
import RenderComp from "./Optmization/RenderComp";

function App() {
  return (
    <>
      <RenderComp />
    </>
  );
}
/**
 *http://localhost:3000/users/ ->All users
 * http://localhost:3000/users/ -> Particuler user
 * http://localhost:3000/ Home
 * http://localhost:3000/project Project
 * http://localhost:3000/about   About
 * http://localhost:3000/career  Career
 * http://localhost:3000/contact  Contact
 *
 *
 * http://localhost:3000/users/{userId}
 */
/*
  const inlineStyle = {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const [flag, setFlag] = useState(true);
  function handleClick() {
    setFlag(!flag);
  }

  


*/
export default App;
