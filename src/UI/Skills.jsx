import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-black text-light py-3 px-6 shadow-black cursor-pointer absolute "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      animate={{ x: parseFloat(x), y: parseFloat(y) }}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  );
};

export default function Skills() {
  return (
    <div className="container ">
      <h2 className="font-bold text-6xl mt-10 w-full text-center mb-5">
        Skills
      </h2>
      <div className="w-full h-[750px] relative flex items-center justify-center rounded-full bg-circularLight text-white">
        <motion.div
          className="flex items-center justify-center rounded-full font-bold bg-black text-light py-3 px-14 shadow-black cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="CSS" x="-90vm" y="-182vm" />
        <Skill name="HTML" x="-310vw" y="10vw" />
        <Skill name="Javascript" x="330vw" y="100vw" />
        <Skill name="ReactJS" x="30vw" y="250vw" />
        <Skill name="NextJS" x="-350vw" y="-300vw" />
        <Skill name="Tailwind CSS" x="-415vw" y="180vw" />
        <Skill name="Bootstrap" x="230vw" y="-210vw" />
        <Skill name="MYSQL" x="480vw" y="-90vw" />
        <Skill name="Firebase" x="-480vw" y="-90vw" />
        <Skill name="Python" x="80vw" y="-350vw" />
        <Skill name="NodeJS" x="380vw" y="290vw" />
      </div>
    </div>
  );
}
