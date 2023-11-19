import React from "react";

const SectionTitle = ({ title, id }) => {
  return (
    <h1
      className="text-[var(--title-color)] text-center z-10 w-40 py-2 px-4 rounded-lg border-2 border-[var(--primary-color)] bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-xl"
      id={id}
    >
      {title}
    </h1>
  );
};

export default SectionTitle;
