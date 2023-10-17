import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Cards from "./pages/Cards";
import { Nav } from "./pages/Nav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/cards" element={<Cards />} />
        </Routes>
      </BrowserRouter>
      <div className="App"></div>
    </>
  );
}

export default App;
