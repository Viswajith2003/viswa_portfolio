import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { SlNote } from "react-icons/sl";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoCodeSlash } from "react-icons/io5";
import { BsPersonArmsUp } from "react-icons/bs";
import { MdSlowMotionVideo } from "react-icons/md";
import { BsFillPersonVcardFill } from "react-icons/bs";

const Activeslider = ({ mode }) => {
  const cards = [
    {
      logo: IoCodeSlash,
      head: "Developer",
      sub: "Innovative Web Solutions",
      content:
        "I create dynamic, user-friendly applications. I deliver high-quality code and exceptional user experiences. Available for freelance projects to turn your vision into reality.",
      arrow: FaArrowRightLong,
    },
    {
      logo: SlNote,
      head: "Designer",
      sub: "Visual Masterpieces",
      content:
        "I transform ideas into stunning designs, specializing in graphic design, UI/UX, and branding. My designs resonate with your audience and reflect your brand's unique identity.",
      arrow: FaArrowRightLong,
    },
    {
      logo: BsPersonArmsUp,
      head: "Dancer",
      sub: "Expressive Movements",
      content:
        "Dance is my passion, allowing me to express emotions and stories through various styles. I bring energy and creativity to every performance, captivating audiences with my art.",
      arrow: FaArrowRightLong,
    },
    {
      logo: SlNote,
      head: "Content Creator",
      sub: "Engaging Content",
      content:
        "I produce high-quality content across platforms, including blog posts, videos, and social media reels. My goal is to inform, entertain, and inspire, helping you connect with your audience.",
      arrow: FaArrowRightLong,
    },
    {
      logo: MdSlowMotionVideo,
      head: "Video Editor",
      sub: "Crafting Visual Stories",
      content:
        "As a skilled video editor, I turn raw footage into polished, engaging videos. Specializing in storytelling, I enhance your content with seamless transitions, effects, and sound.",
      arrow: FaArrowRightLong,
    },
    {
      logo: BsFillPersonVcardFill,
      head: "Freelancer",
      sub: "Versatile and Reliable",
      content:
        "As a freelancer, I offer a range of services including web development and video editing. With a commitment to quality and timely delivery, let's collaborate and achieve your goals together.",
      arrow: FaArrowRightLong,
    },
  ];

  return (
    <div
      className={`flex items-center justify-center flex-col h-[880px] w-[88%] ${
        mode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <h1
        className={`text-5xl font-bold mt-16 ${
          mode ? "text-white" : "text-black"
        }`}
      >
        My Services
      </h1>
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%] mt-12"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div
              className={`flex flex-col gap-6 mb-20 group relative shadow-lg rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer ${
                mode ? "bg-gray-800 text-white" : "bg-white text-black"
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${card.backgroundImage})` }}
              />
              <div
                className={`absolute inset-0 ${
                  mode ? "bg-black opacity-10" : "bg-white opacity-10"
                } group-hover:opacity-50`}
              />
              <div className="relative flex flex-col gap-3">
                <card.logo
                  className={`w-[32px] h-[32px] ${
                    mode ? "text-blue-400" : "text-blue-600"
                  } group-hover:text-blue-400`}
                />
                <h2 className="text-xl lg:text-2xl">{card.head}</h2>
                <h4 className="text-[16px] font-semibold">{card.sub}</h4>
                <p className="lg:text-[18px]">{card.content}</p>
              </div>
              <card.arrow
                className={`absolute bottom-5 left-5 w-[35px] h-[35px] ${
                  mode ? "text-white" : "text-black"
                } group-hover:text-blue-500 group-hover:-rotate-45 duration-100`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Activeslider;
