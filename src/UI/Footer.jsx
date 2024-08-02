import React from "react";

function Footer() {
  return (
    <footer className="bg-[#12141e] pt-12 ">
      {/* Footer top */}
      <div className="container mx-auto">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
              Do you want to make beautiful <br /> products?
            </h2>
            <a href="#contacts">
              <button className="bg-blue-500 rounded-md text-white font-[500] flex items-center gap-2 hover:bg-blue-800 ease-in duration-300 py-2 px-4 round-[8px]">
                <i className="ri-mail-line"></i>Hire me
              </button>
            </a>
          </div>
          <div className="w-full sm:w-1/2">
            <p className="text-gray-300 leading-7 mt-4 sm:mt-0">
              Knowing what you need to work on and what areas need improvement
              can help you become a better hardworker.
            </p>
            <div className="flex items-center gap-4 flex-wrap mk:gap-8 mt-10">
              <span className="text-gray-300 font-[600] text-[15px]">
                Follow Me:
              </span>
              <span className="w-[35px] h-[35px] bg-gray-700 p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="#linkedin"
                  className="text-white font-[500] text-[18px]"
                >
                  <i className="ri-linkedin-line"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-gray-700 p-1 rounded-[50px] cursor-pointer text-center">
                <a href="#github" className="text-white font-[500] text-[18px]">
                  <i className="ri-github-line"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-gray-700 p-1 rounded-[50px] cursor-pointer text-center">
                <a href="#insta" className="text-white font-[500] text-[18px]">
                  <i className="ri-instagram-line"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
