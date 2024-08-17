import React, { useState } from "react";
import { LuMenuSquare } from "react-icons/lu";
import { CgCloseR } from "react-icons/cg";
import { MdDarkMode } from "react-icons/md";
import { IoSunnyOutline } from "react-icons/io5";

function Navbar({ mode, toggleMode }) {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <header className="w-full h-[80px] leading-[80px] flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-[10px]">
            <span className="w-[45px] h-[45px] bg-blue-800 text-white text-[24px] font-[500] rounded-full flex items-center justify-center">
              VJ
            </span>
            <div className="leading-[20px]">
              <h2 className="text-2xl font-[800]">Viswa</h2>
              <p className="text-[14px] font-[500]">personal</p>
            </div>
          </div>

          {/* Menu buttons */}
          <div className="flex space-x-4">
            <button className="flex items-center" onClick={toggleMode}>
              {/* {!mode ? (
                <IoSunnyOutline className="w-10 h-10 hover:scale-95" />
              ) : (
                <MdDarkMode className="w-10 h-10 hover:scale-95" />
              )} */}
            </button>
            <button className="flex items-center" onClick={toggleMenu}>
              {!open ? (
                <LuMenuSquare className="w-10 h-10 hover:scale-95" />
              ) : (
                <CgCloseR className="w-10 h-10 hover:scale-95" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Slide-in Navbar */}
      <div
        className={`fixed top-0 right-0 w-[250px] h-full ${
          mode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
        } transform ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex items-center justify-between p-4">
          <button className="flex items-center" onClick={toggleMenu}>
            <CgCloseR className="w-8 h-8 hover:scale-95" />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full space-y-4">
          <a href="#home" className="text-xl hover:underline">
            Home
          </a>
          <a href="#about" className="text-xl hover:underline">
            About Me
          </a>
          <a href="#skills" className="text-xl hover:underline">
            Skills
          </a>
          <a href="#projects" className="text-xl hover:underline">
            Projects
          </a>
          <a href="#contact" className="text-xl hover:underline">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
