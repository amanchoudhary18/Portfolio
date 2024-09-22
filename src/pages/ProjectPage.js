import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import DraggableBentoGrid from "../components/DraggableBentoGrid";

const ProjectPage = ({ grid, heading, subheading, description, links }) => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  const [cards, setCards] = useState(grid);

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
        }  mb-4`}
        onClick={() => navigate("/")}
      >
        <IoCloseSharp size="20px" />
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-16">
        <div className="col-span-1">
          <p className="font-montagu text-5xl font-semibold">{heading}</p>

          <p className="font-montagu text-lg my-10">{subheading}</p>

          {links.map((link) => (
            <a href={link.href} target="_blank" rel="noreferrer">
              <button
                className={`rounded-full p-2 flex items-center justify-center ${
                  isDarkMode
                    ? "bg-[#0d1117] dark-shadow"
                    : "bg-white light-shadow"
                }`}
              >
                <span className={`text-sm opacity-100 font-poppins px-2`}>
                  {link.title}
                </span>

                <div className="my-auto">
                  <FaArrowRightLong size="12px" className="-rotate-[30deg]" />
                </div>
              </button>
            </a>
          ))}
        </div>

        <div className="col-span-1 font-poppins text-md font-light leading-7">
          {description.map((para) => (
            <p className="my-2">{para}</p>
          ))}
        </div>
      </div>

      <div className="mt-16 mb-5">
        <DraggableBentoGrid cards={cards} setCards={setCards} />
      </div>
    </div>
  );
};

export default ProjectPage;
