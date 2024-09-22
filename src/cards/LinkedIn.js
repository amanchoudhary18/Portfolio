import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { FaArrowRightLong } from "react-icons/fa6";

const LinkedIn = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`w-full h-full relative flex justify-center items-center rounded-2xl ${
        isDarkMode ? "" : "bg-[#0a66c2]"
      }`}
    >
      <div className={`flex items-center p-2 rounded-full my-auto `}>
        <FaLinkedinIn
          size="80px"
          className={!isDarkMode ? "text-white" : "text-[#0a66c2]"}
        />

        <div className="absolute bottom-3 left-3">
          <a
            href="https://www.linkedin.com/in/aman-choudhary19/"
            target="_blank"
            rel="noreferrer"
          >
            <button
              className={`rounded-full p-2  ${
                isDarkMode
                  ? "bg-[#0d1117] dark-shadow"
                  : "bg-white light-shadow"
              } hover:`}
            >
              <FaArrowRightLong size="12px" className="-rotate-[30deg]" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LinkedIn;
