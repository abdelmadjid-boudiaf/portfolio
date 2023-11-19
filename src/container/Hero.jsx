import React from "react";
import { reactHero } from "../images";
import { MdFacebook } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const icons = [
    {
      id: 2,
      icon: <FaGithub />,
      href: "https://github.com/abdelmadjid-boudiaf",
      label: "GitHub",
    },
    {
      id: 3,
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/abdelmadjid-boudiaf",
      label: "LinkedIn",
    },
  ].map((item) => (
    <a
      key={item.id}
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className="hover:scale-110 duration-300 flex text-4xl text-white items-center justify-center"
      aria-label={item.label}
    >
      {item.icon}
    </a>
  ));

  return (
    <section className="w-full relative flex min-h-screen justify-center items-center sm:text-center bg-gradient-to-r from-purple-500 to-blue-500">
      <div className="w-2/3 flex flex-col sm:justify-center sm:items-center lg:w-full lg:mr-0 p-10 md:p-8 lg:p-12 gap-5">
        <h1 className="text-[var(--title-color)] text-3xl font-bold sm:text-2xl">
          Abdelmadjid Boudiaf, Frontend developer
        </h1>
        <p className="text-white leading-8 mt-3 mb-5 text-xl sm:text-md">
          Frontend developer skilled in React and modern web technologies,
          dedicated to creating seamless, user-friendly applications. With a
          focus on clean and maintainable code, I bring ideas to life and
          enhance digital interactions. Let's collaborate on innovative web
          solutions that stand out in today's landscape.
        </p>
        <div className="flex gap-4 justify-start items-center sm:justify-center">
          {icons}
        </div>
      </div>
      <div className="w-1/3  flex justify-center animate-floatUpDown lg:hidden">
        <div className="w-72 h-72 rounded-full overflow-hidden">
          <img
            src={reactHero}
            alt="Frontend Developer"
            className="h-full w-full"
          />
        </div>
      </div>
      <div className="absolute bottom-0 right-0 p-2 text-white text-[1px]">
        Image by{" "}
        <a
          href="https://www.freepik.com/free-vector/creative-abstract-quantum-illustration_21743721.htm#query=react%20developer&position=0&from_view=keyword&track=ais&uuid=3416b5a0-376f-4ad0-ad9d-f9778de00b74"
          target="_blank"
          rel="noopener noreferrer"
        >
          Freepik
        </a>
      </div>
    </section>
  );
};

export default Hero;
