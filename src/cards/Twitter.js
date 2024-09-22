import React from "react";
import { FaTwitter } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { FaArrowRightLong } from "react-icons/fa6";

const Twitter = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`w-full h-full relative flex justify-center items-center rounded-2xl ${
        isDarkMode ? "" : "bg-[#98D0FF]"
      }`}
    >
      <div className={`flex items-center p-2 rounded-full my-auto `}>
        <FaTwitter
          size="80px"
          className={!isDarkMode ? "text-white" : "text-[#98D0FF]"}
        />

        <div className="absolute bottom-3 left-3">
          <a href="https://x.com/Aman18007" target="_blank" rel="noreferrer">
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

export default Twitter;
