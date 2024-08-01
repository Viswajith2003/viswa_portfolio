import React from "react";
import { IoCodeSlashSharp } from "react-icons/io5";

export default function Project() {
  return (
    <div>
      <div className="mt-14">
        <h1 className="text-4xl font-bold">
          Somthings <br /> I've worked on
        </h1>
      </div>
      <div className="mt-16">
        <div className="p-3 border border-black rounded-lg w-72 h-auto">
          <div className="border border-black rounded-lg w-54 h-40"></div>
          <h1 className="text-2xl font-bold mt-3">Heading</h1>
          <div className="flex gap-3 my-3 text-center">
            <div className="border border-black p-1 rounded-full w-auto h-7 text-[14px] px-2">
              HTML
            </div>
            <div className="border border-black p-1 rounded-full w-auto h-7 text-[14px] px-2">
              CSS
            </div>
            <div className="border border-black p-1 rounded-full w-auto h-7 text-[14px] px-2">
              JavaScript
            </div>
          </div>
          <p>
            Web technologies include tools and techniques for developing
            websites and web applications.
          </p>
          <div className="flex gap-3 mt-3 text-center">
            <div className="border border-black p-2 rounded-xl w-1/4">
              <IoCodeSlashSharp className="w-10 h-6" />
            </div>
            <div className="border border-black p-2 rounded-xl w-3/4">
              Live View
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// import React from "react";
// import netflix from "../Assets/img/netflix.jpg";
// import Travel from "../Assets/img/Travel.png";
// import Fd from "../Assets/img/restuarant.png";
// import gym from "../Assets/img/gym.jpg";
// import blog from "../Assets/img/blog.png";
// import weather from "../Assets/img/weather.png";

// const Project = () => {
//   return (
//     <section id="Project ">
//       <div className="container">
//         <div className="flex items-center justify-center mt-20 flex-wrap">
//           <div className="mb-7 sm:mb-0 text-center">
//             <h3 className="font-bold text-6xl mt-10 w-full text-center">
//               My recent projects
//             </h3>
//           </div>
//         </div>
//         <div className="flex items-center gap-4 flex-wrap mt-12">
//           <div className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg: w-[32.2%] relative z-[1]">
//             <figure>
//               <img
//                 className="rounded-[8px] border-2 border-black"
//                 src={netflix}
//                 alt=""
//               />
//             </figure>
//           </div>
//           <div className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg: w-[32.2%] relative z-[1]">
//             <figure>
//               <img
//                 className="rounded-[8px] border-2 border-black"
//                 src={Travel}
//                 alt=""
//               />
//             </figure>
//           </div>
//           <div className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg: w-[32.2%] relative z-[1]">
//             <figure>
//               <img
//                 className="rounded-[8px] border-2 border-black"
//                 src={Fd}
//                 alt=""
//               />
//             </figure>
//           </div>
//           <div className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg: w-[32.2%] relative z-[1]">
//             <figure>
//               <img
//                 className="rounded-[8px] border-2 border-black"
//                 src={blog}
//                 alt=""
//               />
//             </figure>
//           </div>
//           <div className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg: w-[32.2%] relative z-[1]">
//             <figure>
//               <img
//                 className="rounded-[8px] border-2 border-black"
//                 src={weather}
//                 alt=""
//               />
//             </figure>
//           </div>
//           <div className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg: w-[32.2%] relative z-[1]">
//             <figure>
//               <img
//                 className="rounded-[8px] border-2 border-black"
//                 src={gym}
//                 alt=""
//               />
//             </figure>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Project;
