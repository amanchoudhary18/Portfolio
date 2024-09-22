import React, { useEffect } from "react";
import { experiences } from "../constants";
import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";

const ExperiencePage = () => {
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

      <div className="mx-auto p-6">
        {experiences.map((experience, index) => (
          <div
            className={`flex flex-col md:flex-row items-start mb-12 relative font-poppins ${
              isDarkMode ? "text-stone-300" : "text-gray-800"
            }`}
            key={index}
          >
            <div className="flex-shrink-0 w-full md:w-1/3 pr-6">
              <h3 className="text-xl md:text-3xl font-montagu font-semibold">
                {experience.jobTitle}
              </h3>
              <p className="text-lg md:text-xl font-poppins font-bold">
                {experience.company}
              </p>
              <p className="text-sm md:text-base">{`${experience.from} - ${experience.to}`}</p>
              <p className="text-sm md:text-base">{experience.location}</p>
            </div>
            <div className="flex-grow w-full md:w-2/3">
              <ul className="md:pl-5 md:pt-0 pt-5">
                {experience.description.map((line, descIndex) => (
                  <li
                    key={descIndex}
                    className={`text-sm md:text-base ${
                      isDarkMode ? "text-stone-400" : "text-gray-800"
                    } mb-1`}
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;
