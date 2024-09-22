import React from "react";
import memoji from "../assets/images/memoji-1.png";

const Intro = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center px-5 py-2">
      <div className=" p-2">
        <img
          src={memoji}
          alt="memoji"
          className="animate-zoomRotate w-[40px] sm:w-[60px]"
        />
      </div>

      <p className="text-[10px] sm:text-[15px] text-sm font-poppins">
        I'm
        <span className="font-semibold text-lg pl-1">Aman</span>, a fullstack
        developer and product designer from India. I'm interested in React,
        Node, Product Design, Jamstack, Startups, Cryptocurrencies and Music.
      </p>
    </div>
  );
};

export default Intro;
