import React from "react";
import { useTheme } from "../context/ThemeContext";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

const Github = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`w-full h-full relative flex justify-center items-center rounded-2xl ${
        isDarkMode ? "" : "bg-white"
      }`}
    >
      <div className={`flex items-center p-2 rounded-full my-auto `}>
        <IoLogoGithub
          size="80px"
          className={isDarkMode ? "text-white" : "text-[#0d1117]"}
        />

        <div className="absolute bottom-3 left-3">
          <a
            href="https://github.com/amanchoudhary18"
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

export default Github;
