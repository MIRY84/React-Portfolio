import React from "react";
import "./index.css";// imported css
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import About from "./routes/About";
import Contact from "./routes/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
//import { Route, RouterProvider } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
function App() {
  return (//created routes to different pages
    <>
   <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />


      </Routes>
      <Footer />
      </>
  );
}

export default App;
