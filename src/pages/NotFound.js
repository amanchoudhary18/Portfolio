import React, { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";

const NotFound = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className={`flex flex-col items-center py-8 ${
        isDarkMode ? "text-stone-200" : ""
      }`}
    >
      <button
        className={`animate-fall rounded-full p-3 ${
          isDarkMode ? "dark-shadow" : "bg-[#EDE9E9]"
        } mb-4`}
        onClick={() => navigate("/")}
      >
        <IoCloseSharp size="20px" />
      </button>

      <h1
        className={`text-3xl font-medium
           font-montagu mt-10 ${!isDarkMode ? "text-black" : "text-stone-200"}`}
      >
        Seems you are lost : 404
      </h1>
    </div>
  );
};

export default NotFound;
