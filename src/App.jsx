import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Home from "./UI/Home";
import Skills from "./UI/Skills";
import Project from "./UI/Project";
import Contacts from "./UI/Contacts";
import Footer from "./UI/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import About from "./UI/About";
import Service from "./UI/Service";

function App() {
  const [mode, setMode] = useState(false); // false for light mode, true for dark mode

  const toggleMode = () => {
    setMode(!mode);
  };

  useEffect(() => {
    Aos.init();
    if (mode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return (
    <div
      className={`bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen ${
        mode ? "dark" : ""
      }`}
    >
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div className="">
        {/* <Home />
        <About />
        <Service mode={mode} />
        <Skills />
        <Project /> */}
        <Contacts />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
