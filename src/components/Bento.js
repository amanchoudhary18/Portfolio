import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";
import { useTheme } from "../context/ThemeContext";

const Bento = ({ type, children, id, opacity }) => {
  const { isDarkMode } = useTheme();

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transition,
    transform: CSS.Translate.toString(transform),
    cursor: isDragging ? "grabbing" : "grab",
    zIndex: isDragging ? 1000 : 1,
  };

  const getGridClasses = () => {
    switch (type) {
      case "horizontal":
        return "md:col-span-2 md:row-span-1 col-span-full";
      case "vertical":
        return "col-span-1 row-span-2";
      default:
        return "col-span-1 row-span-1";
    }
  };

  return (
    <div
      {...attributes}
      {...listeners}
      ref={setNodeRef}
      style={style}
      className={`relative rounded-2xl text-lg cursor-grab transition-opacity duration-300 ease-in-out ${getGridClasses()} 
        w-full h-full ${
          isDarkMode ? "bg-[#0d1117] text-white" : "bg-white text-[#0d1117]"
        } 
        ${isDarkMode ? "bento-dark-shadow" : ""} ${
        opacity ? "opacity-100" : "opacity-50"
      }`}
    >
      {children}
      <div
        className={`absolute rounded-2xl inset-0 ${
          isDarkMode ? "bento-dark-shadow" : "light shadow"
        } pointer-events-none`}
      ></div>
    </div>
  );
};

export default Bento;
