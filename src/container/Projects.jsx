import React from "react";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";

const Projects = () => {
  const className =
    "text-[var(--title-color)] text-center z-10 w-24  py-2 px-4  rounded-lg border-2 border-[var(--primary-color)]";
  return (
    <section className="flex flex-col justify-center items-center py-5 min-h-screen  bg-[var(--secondary-background-color)]">
      <SectionTitle title='projects' id='projects' />
      <div className="flex flex-wrap gap-5 mt-3 justify-center">
        <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;
