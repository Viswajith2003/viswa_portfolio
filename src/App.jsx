import React, { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/UI/Home";
import Skills from "./Components/UI/Skills";
import Project from "./Components/UI/Project";
import Contacts from "./Components/UI/Contacts";
import Footer from "./Components/UI/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen ">
      <Navbar />
      <div className="ml-52">
        <Home />
        <Skills />
        <Project />
        <Contacts />
        <Footer />
      </div>
    </div>
  );
}

export default App;
