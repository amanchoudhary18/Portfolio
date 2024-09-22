import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import sweetscapes from "../assets/images/sweetscapes-ss.png";
import sweetscapesDark from "../assets/images/sweetscapes-ss-dark.png";

import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Sweetscapes = () => {
  const { isDarkMode } = useTheme();
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className={`w-full h-full overflow-hidden relative rounded-2xl `}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img
        src={isDarkMode ? sweetscapesDark : sweetscapes}
        alt="sweetscapes"
        className="w-[100%] h-[100%]"
      />

      <div
        className="absolute bottom-3 left-3"
        onClick={() => navigate("/sweetscapes")}
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
                SweetScapes
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

export default Sweetscapes;
