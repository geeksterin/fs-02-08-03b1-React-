import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import A from "./Sideeffects/NestedComponents/A";
import Frag from "./oct26th/Frag";
import Imgcomp from "./oct26th/Imgcomp";
import Event from "./oct26th/Event";
import Parent from "./oct26th/Props/Parent";
import Incr from "./State/Incr";
import Effect from "./Sideeffects/Effect";
import { useState } from "react";
import Apicall from "./Sideeffects/Apicall";
import Comp from "./axios/Comp";

function App() {
  // const inlineStyle = {
  //   width: "100%",
  //   height: "100vh",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  // };
  const [flag, setFlag] = useState(true);
  function handleClick() {
    setFlag(!flag);
  }
  return (
    <>
      <Comp />
    </>
  );
}

export default App;
