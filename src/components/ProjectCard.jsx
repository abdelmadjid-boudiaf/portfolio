import React from "react";
import { projectsData } from "../data/projectsData";
import { motion } from "framer-motion";

const ProjectCard = () => {
  const card = projectsData.map((item) => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ rotate: "2deg" }}
        transition={{ duration: 0.3 }}
        key={item.id}
        className="w-64 flex flex-col justify-between bg-[var(--primary-background-color)] border-2 border-gray-300/20 shadow-xl rounded-lg overflow-hidden hover:border-[var(--primary-color)] transition-all duration-300"
      >
        <a href={item.projectUrl} target="_blank" rel="noreferrer">
          <img className="w-full h-auto" src={item.imgUrl} alt={item.name} />
        </a>
        <div className="p-5 flex flex-col justify-between flex-grow">
          <div>
            <h1 className="mb-2 text-2xl font-bold tracking-tight text-[var(--primary-color)]">
              {item.name}
            </h1>
            <p className="mb-3 font-normal text-[var(--secondary-color)]">
              {item.description}
            </p>
          </div>
          <a
            href={item.projectUrl}
            className="inline-flex w-fit items-center px-3 py-2 text-sm font-medium text-center text-[var(--primary-background-color)] bg-[var(--primary-color)] rounded-lg hover:scale-105 transition-all duration-300"
          >
            View Project
          </a>
        </div>
      </motion.div>
    );
  });

  return <>{card}</>;
};

export default ProjectCard;
