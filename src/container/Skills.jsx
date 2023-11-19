import React, { useState } from "react";
import { motion } from "framer-motion";
import { data } from "../images";
import SectionTitle from "../components/SectionTitle";

const Skills = () => {
 
  const skill = data.map((item) => {
    
    return (
      <div
        className="w-36 h-22 flex flex-col justify-start items-center text-gray-100"
        key={item.id}
      >
        <div className="w-16 h-16 p-3 transition-all duration-300 cursor-pointer  rounded-full flex justify-center items-center hover:bg-[var(--background-color-hover)] ">
          <img className="w-full" src={item.item} alt={item.name} />
        </div>
        <h3 className="text-[var(--secondary-color)]">{item.name}</h3>
      </div>
    );
  });

  return (
    <div className="flex flex-col justify-center items-center w-3/4 md:w-full mx-auto min-h-screen ">
     <SectionTitle title="skills" id="skills"/>
      <motion.div
        initial={{ opacity: 0, scale: 0.2 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="my-10 mx-auto flex flex-wrap max-w-xlg justify-center gap-4"
      >
        {skill}
      </motion.div>
    </div>
  );
};

export default Skills;
