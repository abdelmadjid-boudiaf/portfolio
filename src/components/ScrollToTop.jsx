import React, { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-3 right-2 z-50 w-10 h-10 p-2 flex justify-center items-center text-3xl rounded-full text-white bg-[var(--primary-color)] cursor-pointer transition-all duration-300"
          onClick={scrollToTop}
        >
          <AiOutlineArrowUp />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
