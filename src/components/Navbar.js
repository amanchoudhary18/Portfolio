import React, { useRef, useEffect, useState } from "react";
import { ALL, PROJECTS, ABOUT, SETTINGS } from "../constants";
import { useTheme } from "../context/ThemeContext";

const Navbar = ({ selectedCategory, setCategory, filterCards }) => {
  const { isDarkMode } = useTheme();
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
  const categories = [ALL, ABOUT, PROJECTS, SETTINGS];
  const selectedIndex = categories.indexOf(selectedCategory);
  const buttonRefs = useRef([]);

  useEffect(() => {
    if (buttonRefs.current[selectedIndex]) {
      const selectedButton = buttonRefs.current[selectedIndex];
      setIndicatorStyle({
        width: selectedButton.offsetWidth,
        left: selectedButton.offsetLeft,
      });
    }
  }, [selectedIndex]);

  return (
    <div className="flex flex-row justify-center py-8">
      <div
        className={`relative flex flex-row gap-1 md:gap-3 ${
          isDarkMode ? "bento-dark-shadow" : "bg-[#fae4e4]"
        } p-1 rounded-2xl`}
      >
        {categories.map((category, id) => (
          <button
            ref={(el) => (buttonRefs.current[id] = el)}
            onClick={() => {
              filterCards(category);
              setCategory(category);
            }}
            key={id}
            className={`nav-button px-3 md:px-4 py-1 rounded-2xl relative z-10 font-medium hover:text-slate-600 ${
              isDarkMode && selectedCategory !== category
                ? "text-stone-200"
                : ""
            } `}
          >
            {category}
          </button>
        ))}
        <div
          className="absolute bottom-1.5 top-1.5 bg-white rounded-2xl transition-all duration-300 ease-in-out"
          style={{
            width: `${indicatorStyle.width}px`,
            left: `${indicatorStyle.left}px`,
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
