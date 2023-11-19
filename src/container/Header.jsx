import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";
import mine from "../images/index";
import { useState } from "react";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const linksList = ["about", "projects", "skills", "contacts"];

  const link = linksList.map((link) => (
    <li key={link} className="mx-2">
      <a
        href={`#${link}`}
        className="block px-4 py-2 text-xl rounded-md transition-all duration-300 text-[var(--title-color)] hover:text-[var(--primary-color)] hover:underline"
        onClick={() => setMobileMenu(false)}
      >
        {link}
      </a>
    </li>
  ));

  return (
    <header className="flex justify-between items-center py-3 bg-[var(--secondary-background-color)] px-6 shadow-lg">
      <a className="flex items-center justify-center w-12 h-12 rounded-full overflow-hidden">
        <img src={mine} alt="my photo for logo" className="w-full" />
      </a>
      <nav className="flex flex-grow justify-end items-center">
        <ul className="flex sm:hidden items-center">
          {link}
        </ul>
        <AiOutlineMenu
          className="hidden sm:block font-bold text-4xl text-[var(--secondary-color)] cursor-pointer bg-[var(--background-color-hover)] rounded-full p-1 ml-3"
          onClick={() => setMobileMenu(!mobileMenu)}
        />
        {mobileMenu && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 300 }}
            className="fixed min-h-screen shadow-lg top-0 right-0 bg-[var(--primary-background-color)] flex justify-between z-20"
          >
            <ul className="flex flex-col mt-16 w-full">
              {link}
            </ul>
            <div className="w-10 h-10 flex justify-center items-center absolute top-4 right-4 font-bold text-[var(--secondary-color)] text-3xl hover:-rotate-180 hover:text-red-700 cursor-pointer transition-all duration-300 bg-[var(--background-color-hover)] rounded-full p-1">
              <AiOutlineCloseCircle onClick={() => setMobileMenu(false)} />
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;
