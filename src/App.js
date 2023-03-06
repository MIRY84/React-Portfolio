import React from "react";
import "./index.css";// imported css
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import About from "./routes/About";
import Contact from "./routes/Contact";
//import { Route, RouterProvider } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

function App() {
  return (//created routes to different pages
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />


      </Routes>
      </>
  );
}

export default App;
