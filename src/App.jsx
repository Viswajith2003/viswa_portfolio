import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Home from "./UI/Home";
import Skills from "./UI/Skills";
// import Project from "./UI/Project";
import Contacts from "./UI/Contacts";
import Footer from "./UI/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

import About from "./UI/About";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen ">
      <Navbar />
      <div className="ml-52">
        {/* <Home /> */}
        <About />
        {/* <Skills /> */}
        {/* <Project /> */}
        {/* <Contacts /> */}
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
