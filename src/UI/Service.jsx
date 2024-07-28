import React from "react";
import { SlNote } from "react-icons/sl";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Service() {
  const cards = [
    {
      logo: SlNote,
      head: "Developer",
      sub: "Innovative Web Solutions",
      content:
        " I create dynamic, user-friendly applications. From building new apps to optimizing existing ones, I deliver high-quality code and exceptional user experiences. Available for freelance projects to turn your vision into reality. ",
      arrow: FaArrowRightLong,
    },
    {
      logo: SlNote,
      head: "Developer",
      sub: "Innovative Web Solutions",
      content:
        " I create dynamic, user-friendly applications. From building new apps to optimizing existing ones, I deliver high-quality code and exceptional user experiences. Available for freelance projects to turn your vision into reality. ",
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
            <p>{card.arrow}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
