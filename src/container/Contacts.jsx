import React from "react";
import { motion } from "framer-motion";
import { contacts } from "../data/contactsData.jsx";
import SectionTitle from "../components/SectionTitle.jsx";

const Contacts = () => {
  const contactContainerClassName =
    "flex justify-start items-center gap-2 w-4/5 p-3 overflow-hidden  bg-[var(--primary-color)] hover:shadow-lg transition-shadow duration-300 rounded-md sm:text-sm";

  const contactTextClassName =
    "text-sm text-white text-md font-bold";

  const contact = contacts.map((contact) => (
    <motion.div
      key={contact.id}
      initial={{ opacity: 0, scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={contactContainerClassName}
    >
      <div className=" font-bold text-xl text-slate-200">{contact.icon}</div>
      <a
        href={`${contact.href}`}
        target="_blank"
        className={contactTextClassName}
        rel="noreferrer"
      >
        {contact.text}
      </a>
    </motion.div>
  ));

  return (
    <div className="flex flex-col justify-center items-center w-full bg-[var(--secondary-background-color)] min-h-screen border-b-4 border-gray-100/70">
      <SectionTitle title="contacts" id="contacts" />
      <motion.div className="my-10 mx-auto flex flex-wrap max-w-screen-xl justify-center gap-4">
        {contact}
      </motion.div>
    </div>
  );
};

export default Contacts;
