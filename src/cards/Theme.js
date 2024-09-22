import React from "react";
import { useTheme } from "../context/ThemeContext";
import { FaMoon } from "react-icons/fa";
import { PiSunDimFill } from "react-icons/pi";

const Theme = () => {
  const { toggleTheme, isDarkMode } = useTheme();

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div
        className={`flex items-center p-2 rounded-full my-auto w-[125px] ${
          isDarkMode ? " bg-[#21262D] bento-dark-shadow" : "bg-[#F0F2F8] "
        }`}
      >
        <button
          className={`text-[#FFE3A4] bg-black rounded-full p-2 transition-transform duration-300 ease-in-out ${
            isDarkMode ? "translate-x-[60px]" : "translate-x-0"
          }`}
          onClick={toggleTheme}
        >
          {isDarkMode ? <PiSunDimFill size="30px" /> : <FaMoon size="25px" />}
        </button>
      </div>
    </div>
  );
};

export default Theme;
