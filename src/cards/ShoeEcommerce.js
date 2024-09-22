import React, { useState } from "react";
import shoeEcommerce from "../assets/images/shoe-ecommerce.png";
import { useTheme } from "../context/ThemeContext";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ShoeEcommerce = () => {
  const { isDarkMode } = useTheme();
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="w-full h-full overflow-hidden relative rounded-2xl"
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {!isDarkMode && (
        <>
          <div className="absolute inset-0 bg-[#F38DBD]"></div>
          <div className="absolute -bottom-[120px] left-0 right-0 h-72 bg-[#FFD778] rounded-t-full"></div>
        </>
      )}
      <div className="relative z-10 p-4">
        <div className="flex flex-row justify-end">
          <img
            src={shoeEcommerce}
            alt="shoeEcommerce"
            width="400px"
            className="rounded-2xl -rotate-[5deg]"
          />
        </div>

        <div
          className="absolute -bottom-2 left-3"
          onClick={() => navigate("/solebliss")}
        >
          <div className="relative">
            <button
              className={`rounded-full p-2 flex items-center justify-center transition-all duration-300 ease-in-out ${
                isDarkMode
                  ? "bg-[#0d1117] dark-shadow"
                  : "bg-white light-shadow"
              }`}
            >
              {isHover && (
                <span
                  className={`text-xs transition-all duration-300 ease-in-out transform origin-left
          translate-x-0 opacity-100 font-poppins`}
                >
                  Shoe Ecommerce
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
    </div>
  );
};

export default ShoeEcommerce;
