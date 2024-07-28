import React from "react";
import { SlNote } from "react-icons/sl";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoCodeSlash } from "react-icons/io5";
import { BsPersonArmsUp } from "react-icons/bs";
import { MdSlowMotionVideo } from "react-icons/md";
import { BsFillPersonVcardFill } from "react-icons/bs";

export default function Service() {
  const cards = [
    {
      logo: IoCodeSlash,
      head: "Developer",
      sub: "Innovative Web Solutions",
      content:
        " I create dynamic, user-friendly applications. From building new apps to optimizing existing ones, I deliver high-quality code and exceptional user experiences. Available for freelance projects to turn your vision into reality. ",
      arrow: FaArrowRightLong,
    },
    {
      logo: SlNote,
      head: "Designer",
      sub: "Visual Masterpieces",
      content:
        " I transform ideas into stunning designs, specializing in graphic design, UI/UX, and branding. My designs resonate with your audience and reflect your brand's unique identity. Let's collaborate on freelance projects to elevate your brand.",
      arrow: FaArrowRightLong,
    },
    {
      logo: BsPersonArmsUp,
      head: "Dancer",
      sub: "Expressive Movements",
      content:
        " Dance is my passion, allowing me to express emotions and stories through various styles. I bring energy and creativity to every performance, captivating audiences with my art. Available for freelance performances and choreography.",
      arrow: FaArrowRightLong,
    },
    {
      logo: SlNote,
      head: "Content Creator",
      sub: "Engaging Content",
      content:
        " I produce high-quality content across platforms, including blog posts, videos, and social media reels. My goal is to inform, entertain, and inspire, helping you connect with your audience. Ready to take on freelance content creation projects.",
      arrow: FaArrowRightLong,
    },
    {
      logo: MdSlowMotionVideo,
      head: "Video Editor",
      sub: "Crafting Visual Stories",
      content:
        " As a skilled video editor, I turn raw footage into polished, engaging videos. Specializing in storytelling, I enhance your content with seamless transitions, effects, and sound. Available for freelance video editing to bring your vision to life.",
      arrow: FaArrowRightLong,
    },
    {
      logo: BsFillPersonVcardFill,
      head: "Freelancer",
      sub: "Versatile and Reliable",
      content:
        " As a freelancer, I offer a range of services including development, design, dance, content creation, and video editing. With a commitment to quality and timely delivery, I help bring your projects to life, no matter the scope. Let's collaborate and achieve your goals together.",
      arrow: FaArrowRightLong,
    },
  ];
  return (
    <div>
      <h1 className="text-5xl font-bold mt-16">My Services..</h1>

      <div className="mt-12 flex gap-12">
        {cards.map((card, index) => (
          <div
            key={index}
            className="border-2 border-black p-5 w-72 rounded-lg hover:scale-95 space-y-4"
          >
            <card.logo className="w-10 h-12" />
            <h2 className="text-2xl font-bold">{card.head}</h2>
            <h4 className="text-[16px] font-semibold">{card.sub}</h4>
            <p>{card.content}</p>
            <card.arrow className="w-8 h-10" />
          </div>
        ))}
      </div>
    </div>
  );
}
