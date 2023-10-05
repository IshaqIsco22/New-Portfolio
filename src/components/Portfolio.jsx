/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import NavBar from "../sections/NavBar";
import Home from "../sections/Home";
import Skills from "../sections/Skills";

function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }
  return (
    <>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Skills darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </>
  );
}

export default Portfolio;
