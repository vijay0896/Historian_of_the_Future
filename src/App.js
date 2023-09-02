// project
import { Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import Home from "./Componets/Homepage";
import Navbar from "./Componets/Navbar";
import Contact from "./Componets/Contact";
import Content from "./Componets/Content";
import Footer from "./Componets/Footer";
import Login from "./Componets/login";
import Mission from "./Componets/Mission";
import About from "./Componets/About";

import Projects from "./Componets/Projects";
import Art from "./Componets/Art";
class App extends Component {
  render() {
    return (
      <>
        {" "}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/Content" element={<Content />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Mission" element={<Mission />}></Route>
          <Route path="/about" element={<About />}></Route>
          
          <Route path="/Projects" element={<Projects />}></Route>
          <Route path="/Art" element={<Art />}></Route>
        </Routes>
        {<Footer />}
      </>
    );
  }
}
export default App;
