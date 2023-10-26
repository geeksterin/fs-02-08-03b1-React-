import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import A from "./oct26th/NestedComponents/A";
import Frag from "./oct26th/Frag";
import Imgcomp from "./oct26th/Imgcomp";
import Event from "./oct26th/Event";

function App() {
  const inlineStyle = {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div style={inlineStyle}>
      <Event />
    </div>
  );
}

export default App;
