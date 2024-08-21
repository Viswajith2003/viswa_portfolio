import React from "react";
import profile from "../Assets/img/profile.png";
import { FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

function Home() {
  return (
    <section className="container mx-auto pt-0 lg:mt-20" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* hero left content */}
          <div className="w-full md:basis-1/2 mt-12">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="font-[600] text-[30px] "
            >
              Welcome to my TechWorld
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="font-[800] text-7xl mt-10"
            >
              Hi! I'm Viswajith <br />
              Software Developer
            </h1>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1800"
              className="flex items-center gap-6 mt-7"
            >
              <button className="bg-blue-800 h-12 w-36 text-white font-[500] py-2 px-4 rounded-full hover:font[500] mt-8 hover:bg-blue-600 hover:text-white easy-in duration-700">
                <a className="items-center" href="#contact">
                  <h1>Get in touch</h1>
                </a>
              </button>
            </div>

            <div className="flex space-x-8 mt-20">
              <BsGithub className="w-8 h-8 hover:scale-95" />
              <BsInstagram className="w-8 h-8 hover:scale-95" />
              <FaLinkedin className="w-8 h-8 hover:scale-95" />
            </div>
          </div>
          {/* hero left end */}
          {/* hero img :*/}
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center">
              <img
                src={profile}
                alt="profile picture"
                width={450}
                height={300}
              />
            </figure>
          </div>
          {/* hero img end :*/}
        </div>
      </div>
    </section>
  );
}

export default Home;
