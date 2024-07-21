import React from "react";
import netflix from "../Assets/img/netflix.jpg";
import Travel from "../Assets/img/Travel.png";
import Fd from "../Assets/img/restaurant.png";
import gym from "../Assets/img/gym.jpg";
import blog from "../Assets/img/blog.png";
import weather from "../Assets/img/weather.png";

const Project = () => {
  return (
    <section id="Project ">
      <div className="container">
        <div className="flex items-center justify-center mt-20 flex-wrap">
          <div className="mb-7 sm:mb-0 text-center">
            <h3 className="font-bold text-6xl mt-10 w-full text-center">
              My recent projects
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-4 flex-wrap mt-12">
          <div className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg: w-[32.2%] relative z-[1]">
            <figure>
              <img
                className="rounded-[8px] border-2 border-black"
                src={netflix}
                alt=""
              />
            </figure>
          </div>
          <div className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg: w-[32.2%] relative z-[1]">
            <figure>
              <img
                className="rounded-[8px] border-2 border-black"
                src={Travel}
                alt=""
              />
            </figure>
          </div>
          <div className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg: w-[32.2%] relative z-[1]">
            <figure>
              <img
                className="rounded-[8px] border-2 border-black"
                src={Fd}
                alt=""
              />
            </figure>
          </div>
          <div className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg: w-[32.2%] relative z-[1]">
            <figure>
              <img
                className="rounded-[8px] border-2 border-black"
                src={blog}
                alt=""
              />
            </figure>
          </div>
          <div className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg: w-[32.2%] relative z-[1]">
            <figure>
              <img
                className="rounded-[8px] border-2 border-black"
                src={weather}
                alt=""
              />
            </figure>
          </div>
          <div className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg: w-[32.2%] relative z-[1]">
            <figure>
              <img
                className="rounded-[8px] border-2 border-black"
                src={gym}
                alt=""
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
