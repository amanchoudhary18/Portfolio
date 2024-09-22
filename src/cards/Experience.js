import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";

const Experience = () => {
  const [isHover, setIsHover] = useState(false);
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  return (
    <div
      className="w-full h-full flex flex-col px-5 py-2 mt-5"
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="font-bold text-2xl pl-1 p-2 font-montagu">
        How is it going ?
      </div>

      <p className="text-[10px] sm:text-[15px] text-sm font-poppins mt-3">
        With a strong foundation in both front-end and back-end development,
        I’ve worked on projects that span the full software development
        lifecycle. Here's a glimpse into the key milestones of my journey so
        far.
      </p>

      <div
        className="absolute bottom-3 left-3"
        onClick={() => navigate("/experiences")}
      >
        <div className="relative">
          <button
            className={`rounded-full p-2 flex items-center justify-center transition-all duration-300 ease-in-out ${
              isDarkMode ? "bg-[#0d1117] dark-shadow" : "bg-white light-shadow"
            }`}
          >
            {isHover && (
              <span
                className={`text-xs transition-all duration-300 ease-in-out transform origin-left
          translate-x-0 opacity-100 font-poppins`}
              >
                Read More
              </span>
            )}

            <div
              className={`my-auto transition-transform duration-300 ease-in-out ${
                isHover ? "translate-x-1 px-1" : "translate-x-0"
              }`}
            >
              <FaArrowRightLong size="12px" className="-rotate-[30deg]" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
