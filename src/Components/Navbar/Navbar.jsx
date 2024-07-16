import { React, useState } from "react";
import { LuMenuSquare } from "react-icons/lu";
import { CgCloseR } from "react-icons/cg";
import { MdDarkMode } from "react-icons/md";
import { IoSunnyOutline } from "react-icons/io5";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };
  const toggleMode = () => {
    setMode(!mode);
  };

  return (
    <header className="w-full h-[80px] leading-[80px]  flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* logo= */}
          <div className="flex items-center gap-[10px]">
            <span className="w-[45px] h-[45px] bg-blue-800 text-white text-[24px] font-[500] rounded-full flex items-center justify-center">
              VJ
            </span>
            <div className="leading-[20px]">
              <h2 className="text-2xl font-[800]">Viswa</h2>
              <p className="text-[14px] font-[500]">personal</p>
            </div>
          </div>

          {/* menu right btn start */}
          <div className="flex space-x-4">
            <button className="flex items-center " onClick={toggleMode}>
              {!mode ? (
                <IoSunnyOutline className="w-10 h-10 hover:scale-95" />
              ) : (
                <MdDarkMode className="w-10 h-10 hover:scale-95" />
              )}
            </button>
            <button className="flex items-center " onClick={toggleMenu}>
              {!open ? (
                <LuMenuSquare className="w-10 h-10 hover:scale-95" />
              ) : (
                <CgCloseR className="w-10 h-10 hover:scale-95" />
              )}
            </button>
          </div>
          {/* menu right btn end */}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
