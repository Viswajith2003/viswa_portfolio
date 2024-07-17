import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";
import { useEffect } from "react";
import Aos from "aos";
import Home from "./Components/UI/Home";
import Project from "./Components/UI/Project";
import Contacts from "./Components/UI/Contacts";
import Footer from "./Components/UI/Footer";
import Skills from "./Components/UI/Skills";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      <Project />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
