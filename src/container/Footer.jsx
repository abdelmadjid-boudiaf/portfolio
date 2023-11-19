import React from "react";

import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full h-16 bg-[var(--secondary-background-color)] flex items-center justify-center">
          <div className="ml-4 flex items-center">
        <AiOutlineCopyrightCircle className="text-[var(--primary-color)] text-xl" />
        <span className="ml-2 text-[var(--primary-color)]">
          2023 Abdelmadjid Boudiaf
        </span>
      </div>
    </footer>
  );
};

export default Footer;
