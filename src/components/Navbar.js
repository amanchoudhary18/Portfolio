import React, { useCallback, useEffect, useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleScroll = useCallback(() => {
    if (showMenu) {
      setShowMenu(false);
    }
  }, [showMenu]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showMenu, handleScroll]);

  const sections = [
    {
      title: "Home",
      link: "#home",
      subsections: [
        { title: "Personal Info", link: "#personal-info" },
        { title: "Philosophy", link: "#philosophy" },
      ],
    },
    {
      title: "Experience",
      link: "#experience",
      subsections: [
        { title: "Job Roles", link: "#job-roles" },
        { title: "Key Achievements", link: "#achievements" },
      ],
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Tech Stack",
      link: "#tech-stack",
      subsections: [
        { title: "Languages", link: "#languages" },
        { title: "Frameworks & Tools", link: "#frameworks-tools" },
      ],
    },
    {
      title: "Contact",
      link: "#contact",
    },
  ];

  return (
    <div
      className={`${
        showMenu
          ? "bg-[#301848] rounded-xl py-2 px-4"
          : "bg-[#B976E5] rounded-full p-1 pl-3 delay-100"
      }  w-fit transition-[background-color,padding] duration-200 ease-linear `}
    >
      <div
        className={`flex flex-row justify-between transition-all duration-200 ease-linear  ${
          showMenu ? "gap-12" : "gap-3 delay-100"
        }`}
      >
        <p
          className={`happy-monkey my-auto text-lg font-semibold ${
            showMenu ? "text-[#B976E5]" : "text-[#301848] delay-100"
          }`}
        >
          amanchoudhary
        </p>
        <div
          className={`text-xs  rounded-full py-2 px-4 my-auto ${
            showMenu ? "text-black bg-white" : " bg-[#301848] text-white"
          }`}
          role="button"
          onClick={toggleShowMenu}
        >
          <p>{showMenu ? "Close" : "Menu"}</p>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-max-height duration-500 ease-linear  ${
          showMenu ? "max-h-[500px]" : "max-h-0 delay-100"
        }`}
      >
        {showMenu && (
          <div className="py-3">
            {sections.map((section) => (
              <div className="mb-2" key={section.title}>
                <p
                  className="text-[#B976E5] text-xl font-semibold hover:text-white"
                  role="button"
                >
                  {section.title}
                </p>
                <div className="ml-5">
                  {section?.subsections?.map((subsection) => (
                    <p className="text-[#dbcaeb]" key={subsection.title}>
                      {subsection.title}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
