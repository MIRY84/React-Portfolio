import React from "react";
import "./index.css";// imported css
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import About from "./routes/About";
import Contact from "./routes/Contact";
//import { Route, RouterProvider } from "react-router-dom";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />


      </Routes>
      </>
  );
}

export default App;
