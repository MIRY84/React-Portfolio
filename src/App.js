import React from "react";
import "./index.css";// imported css
//import { Route, RouterProvider } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import About from "./routes/About";
import Contact from "./routes/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  return (//created routes to different pages
  <>
    <Router>
     <Header/>
      <Routes>
        <Route path="React-Portfolio/" element={<Home />} />
        <Route path="React-Portfolio/projects" element={<Projects />} />
        <Route path="React-Portfolio/about" element={<About />} />
        <Route path="React-Portfolio/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;